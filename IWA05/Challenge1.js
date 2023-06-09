const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

let shipping;
let currency;

const location = 'RSA';
const customers = 1;

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
}

if (location === 'NAM') {
  shipping = 600;
} else {
  shipping = 800;
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (shoes + batteries + pens + shirts > 1000) {
  if (location === 'NAM' && customers < 2) {
    if (location === 'RSA') {
      shipping = 0;
    }
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  const totalPrice = shoes + toys + shirts + batteries + pens + shipping;
  console.log('price', currency, totalPrice);
}
