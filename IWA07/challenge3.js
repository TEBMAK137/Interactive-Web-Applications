const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoOwed = parseFloat(leoBalance);
const sarahOwed = parseFloat(sarahBalance);
const totalOwed = leoOwed + sarahOwed;

const owedLeo = `${leoName} ${leoSurname} (Owed: R ${Math.abs(leoOwed.toFixed(2))})`;
const owedSarah = `${sarahName} ${sarahSurname} (Owed: R ${Math.abs(sarahOwed.toFixed(2))})`;
const totalDivider = `${divider}\n`;
const totalAmount = `  Total amount owed: R ${totalOwed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
const result = `\n${owedLeo}\n${owedSarah}\n\n${totalDivider}${totalAmount}\n${divider}`;

console.log(result);
