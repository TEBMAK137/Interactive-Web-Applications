let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated === 'string'; // Corrected the comparison operator
    const calculatedAsNumber = isString ? parseInt(calculated) : parseInt(calculated);
    calculated = (calculatedAsNumber + 1).toString(); // Assign the updated value to calculated
}

const calcUser = () => {
  logCalc(); // Corrected the missing parentheses
  if (calculated > '2') user = 'John'; // Changed the comparison to a string
  if (calculated > '2') state = 'requesting'; // Changed the comparison to a string
  if (calculated > '3') state = 'idle'; // Changed the comparison to a string
}

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
        state = 'idle'; // Set the state to 'idle' after logging the message
    }
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
