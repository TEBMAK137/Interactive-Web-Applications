// scripts.js

const STATUS_MAP = {
  shelf: {
    color: 'green',
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: 'blue',
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: 'red',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: 'orange',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  }
};

// Book 1
const book1Status = document.querySelector('#book1 .status');
const book1ReserveBtn = document.querySelector('#book1 .reserve');
const book1CheckoutBtn = document.querySelector('#book1 .checkout');
const book1CheckinBtn = document.querySelector('#book1 .checkin');

const book1StatusText = book1Status.textContent.trim();
const book1StatusProperties = STATUS_MAP[book1StatusText];

book1Status.style.color = book1StatusProperties.color;
book1ReserveBtn.disabled = !book1StatusProperties.canReserve;
book1CheckoutBtn.disabled = !book1StatusProperties.canCheckout;
book1CheckinBtn.disabled = !book1StatusProperties.canCheckIn;
book1CheckinBtn.style.color = 'black';

// Book 2
const book2Status = document.querySelector('#book2 .status');
const book2ReserveBtn = document.querySelector('#book2 .reserve');
const book2CheckoutBtn = document.querySelector('#book2 .checkout');
const book2CheckinBtn = document.querySelector('#book2 .checkin');

const book2StatusText = book2Status.textContent.trim();
const book2StatusProperties = STATUS_MAP[book2StatusText];

book2Status.style.color = book2StatusProperties.color;
book2ReserveBtn.disabled = !book2StatusProperties.canReserve;
book2CheckoutBtn.disabled = !book2StatusProperties.canCheckout;
book2CheckinBtn.disabled = !book2StatusProperties.canCheckIn;
book2CheckinBtn.style.color = 'black';

// Book 3
const book3Status = document.querySelector('#book3 .status');
const book3ReserveBtn = document.querySelector('#book3 .reserve');
const book3CheckoutBtn = document.querySelector('#book3 .checkout');
const book3CheckinBtn = document.querySelector('#book3 .checkin');

const book3StatusText = book3Status.textContent.trim();
const book3StatusProperties = STATUS_MAP[book3StatusText];

book3Status.style.color = book3StatusProperties.color;
book3ReserveBtn.disabled = !book3StatusProperties.canReserve;
book3CheckoutBtn.disabled = !book3StatusProperties.canCheckout;
book3CheckinBtn.disabled = !book3StatusProperties.canCheckIn;
book3CheckinBtn.style.color = 'black';
