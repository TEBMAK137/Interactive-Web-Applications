const salary = 4000;
const lodging = 'apartment';
const size = 'large';

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  734: '3%',
  234: '20%',
  913: '12%',
  415: '38%',
  502: '42%',
};

const rent = {
  none: 0,
  'small-room': 200,
  'large-room': 300,
  'small-apartment': 400,
  'large-apartment': 800,
  'small-house': 1200,
  'large-house': 2400,
};

const taxKey = 913;
const taxPercentage = parseInt(tax[taxKey]);
const taxAsDecimal = taxPercentage / 100;

const afterTaxAmount = salary * (1 - taxAsDecimal);
const type = `${lodging}-${size}`;
const rentAmount = rent[type];
const total = afterTaxAmount - expenses.food - expenses.transport - rentAmount;
const roundedTotal = total.toFixed(2);

console.log(roundedTotal);
