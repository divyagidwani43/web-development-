'use strict';
/////////////////////////////////////////////////
// Data
// when data is from API it is in form of objects
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
// all html elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////////////////////
const a = document.querySelector('.movements__row')


//////////////////////////////////////////////////////////////////////////////////////////////
// display movements
console.log(account1.movements) //recieving this data by sending it to function using arguments

const displayMovements = function (movements) {
  //read BELOW first
  // we arent overwriting everthing the 2 present before this function call are still there as they are in html file hardcoded
  // to remove those we -
  console.log(containerMovements.innerHTML)
  // set containmovement html to empty so only below string would be in it
  containerMovements.innerHTML = '';
  console.log(containerMovements.innerHTML)
  // we make function recieve movements data here
  // the data is sent when the function is called below - displayMovements(account1.movements)
  console.log(movements)

  // USING FOREACH on movements
  movements.forEach(function (mov, i) {
    // console.log(mov, i)


    // MAKING HTML STRING
    // getting html string , can be any name not neccessary html
    const type = mov > 0 ? "deposit" : "withdrawal"

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${i + 1} days ago</div>
      <div class="movements__value">$${Math.abs(mov)}</div>
    </div>`;
    //here we put dynamic values that can change over time and remove hardcoded data
    // compare the original string in html doc
    // we have deposit in green and withdraw in red by class names one has movements__type--deposit and other has movements__type--withdrawal 
    // so ${mov>0 ? "deposit" : "withdrawal"} 


    // ADDING HTML STRING
    // now we need to add above string in html to be displayed in page 
    containerMovements.insertAdjacentHTML('afterbegin', html)
    // we will call on movements class that can be accessed using containerMovements
    //class_name.insertAdjacentHTML( position in which we want to add html , string)
    // POSITIONS - afterbegin (<> just after parent element)
    // beforebegin (before parent element opens <>) , beforeend (just before PE</>) , afterend (</>after PE closes)
  });
  console.log(a)
  // we want to add in a row for every movement see a selecting movement row
  console.log(containerMovements)
}
displayMovements(account1.movements)
console.log(containerMovements.innerHTML)
// it will now have the string we created