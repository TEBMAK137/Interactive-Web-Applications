const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`)
  },
};

const christmas = 6;
const futureId = 9;

// Log the name of the holiday assigned to key 9, or indicate that it hasn't been created yet
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

// Copy the Christmas holiday object and make the necessary changes
const copied = { ...holidays[christmas] };
copied.name = 'X-mas';
copied.date.setHours(0, 0, 0, 0); // Set the time to midnight

// Check if the new date is earlier than the current date
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);

// Apply the changes to the temporary object (copied) only if the new date is earlier
if (isEarlier) {
  holidays[christmas] = copied;
}

// Log the changes made to the temporary object
console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date !== copied.date || copied.date);

// Find the first and last holidays in the year
const holidayDates = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = new Date(Math.min(...holidayDates));
const lastHolidayTimestamp = new Date(Math.max(...holidayDates));

// Format and log the first and last holiday dates
const formatDate = date => `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
console.log('The first holiday in the year:', formatDate(firstHolidayTimestamp));
console.log('The last holiday in the year:', formatDate(lastHolidayTimestamp));

// Select a random holiday and log its date
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomHolidayIndex];
console.log('Random holiday date:', formatDate(randomHoliday.date));
