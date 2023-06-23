import { BOOKS_PER_PAGE, authors, genres } from './data';

// You can now use the constants in this file
console.log(BOOKS_PER_PAGE);
console.log(authors);
console.log(genres);

let matches = books;
let page = 1;

if (!books || !Array.isArray(books)) throw new Error('Source required');
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers');

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};

const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

for (const { author, image, title, id } of extracted) {
  const preview = createPreview({
    author,
    id,
    image,
    title,
  });

  fragment.appendChild(preview);
}

document.getElementById('data-list-items').appendChild(fragment);

const genresFragment = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
genresFragment.appendChild(element);

for (const [id, name] of Object.entries(genres)) {
  element = document.createElement('option');
  element.value = id;
  element.innerText = name;
  genresFragment.appendChild(element);
}

document.getElementById('data-search-genres').appendChild(genresFragment);

const authorsFragment = document.createDocumentFragment();
element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Authors';
authorsFragment.appendChild(element);

for (const [id, name] of Object.entries(authors)) {
  element = document.createElement('option');
  element.value = id;
  element.innerText = name;
  authorsFragment.appendChild(element);
}

document.getElementById('data-search-authors').appendChild(authorsFragment);

const theme = dataSettingsTheme.value === 'night' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'night' : 'day';

document.documentElement.style.setProperty('--color-dark', theme === 'night' ? night.dark : day.dark);
document.documentElement.style.setProperty('--color-light', theme === 'night' ? night.light : day.light);
document.getElementById('data-list-button').textContent = `Show more (${Math.max(matches.length - page * BOOKS_PER_PAGE, 0)})`;

document.getElementById('data-list-button').disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

document.getElementById('data-list-button').addEventListener('click', () => {
  document.getElementById('data-list-items').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE));
  actions.list.updateRemaining();
  page += 1;
});

document.getElementById('data-header-search').addEventListener('click', () => {
  document.getElementById('data-search-overlay').open = true;
  document.getElementById('data-search-title').focus();
});

document.getElementById('data-search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of booksList) {
    const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === 'any' || book.author === filters.author;
    let genreMatch = filters.genre === 'any';

    if (!genreMatch) {
      for (const genre of book.genres) {
        if (genre === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  if (result.length < 1) {
    document.getElementById('data-list-message').classList.add('list__message_show');
  } else {
    document.getElementById('data-list-message').classList.remove('list__message_show');
  }

  document.getElementById('data-list-items').innerHTML = '';
  const fragment = document.createDocumentFragment();
  const extracted = source.slice(range[0], range[1]);

  for (const { author: authorId, id, image, title } of extracted) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = /* html */ `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[authorId]}</div>
      </div>
    `;

    fragment.appendChild(element);
  }

  document.getElementById('data-list-items').appendChild(fragment);
  const initial = matches.length - page * BOOKS_PER_PAGE;
  const remaining = hasRemaining ? initial : 0;
  document.getElementById('data-list-button').disabled = initial > 0;
  document.getElementById('data-list-button').textContent = `Show more (${remaining})`;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('data-search-overlay').open = false;
});

document.getElementById('data-settings-overlay').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', result.theme === 'night' ? night.dark : day.dark);
  document.documentElement.style.setProperty('--color-light', result.theme === 'night' ? night.light : day.light);
  document.getElementById('data-settings-overlay').open = false;
});

document.getElementById('data-list-items').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active;

  for (const node of pathArray) {
    if (active) break;
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }
  }

  if (!active) return;
  document.getElementById('data-list-active').open = true;
  document.getElementById('data-list-blur').style.backgroundImage = `url(${active.image})`;
  document.getElementById('data-list-title').textContent = active.title;
  document.getElementById('data-list-subtitle').textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
  document.getElementById('data-list-description').textContent = active.description;
});
