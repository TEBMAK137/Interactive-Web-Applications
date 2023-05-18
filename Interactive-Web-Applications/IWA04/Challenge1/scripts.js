const date = 2050;
const status = 'student';
let count = 0;

if (date === 2050) {
  console.log("January", 'New Year’s Day');
  console.log("March", 'Human Rights Day');
  const aprilDate = 'April';
  console.log(aprilDate, 'Family Day');
  console.log(aprilDate, 'Freedom Day');
  count += 4;

  if (status === "student") {
    console.log('June', 'Youth Day');
    count += 1;
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  const decemberDate = 'December';
  console.log(decemberDate, 'Day of Reconciliation');
  count += 3;

  if (status === "parent") {
    console.log(decemberDate, 'Christmas Day');
    count += 1;
  }

  console.log(decemberDate, 'Day of Goodwill');
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
