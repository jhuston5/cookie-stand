'use strict';

// Create an array containing every hour the store is open
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArray =[];

// Create a DOM container element for the table content
const storeTable = document.querySelector('table');
let tr = document.createElement('tr');
let th = document.createElement('th');
th.textContent = 'Store';
tr.appendChild(th);
storeTable.appendChild(tr);

// Iterate and display every hour the store is open
for (let i = 0; i < hour.length; i++) {
  let th = document.createElement('th');
  th.textContent = hour[i];
  tr.appendChild(th);
}

let th2 = document.createElement('th');
th2.textContent = 'Daily Location Total';
tr.appendChild(th2);
storeTable.appendChild(tr);


function Store(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookiesSoldEachHourArray = [];
  this.dailyTotal = 0;
  // Method that creates random variables using Math.random
  this.getRandomCustomers = function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  };
  // Method that multiplies the random customer element by the average cookies purchased
  this.cookiesPurchased = function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  };
  // Method that pushes the total cookies purchased to an array and adds up a daily total
  this.createCookiesPurchasedArray = function() {
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
    }
  };

  // Method that displays a table of the data created and pushed to the avgCookiesSoldEachHourArray
  this.renderTable = function() {
    let tr = document.createElement('tr');
    tr.textContent = `${this.name}`;
    storeTable.appendChild(tr);
    this.createCookiesPurchasedArray();
    for (let i = 0; i < hour.length; i++) {
      let td = document.createElement('td');
      td.textContent = `${this.avgCookiesSoldEachHourArray[i]}`;
      tr.appendChild(td);
    }
    let totalTd = document.createElement('td');
    totalTd.textContent = this.dailyTotal;
    tr.appendChild(totalTd);
  };
  // Push every new object into a container array
  storeArray.push(this);
}


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// Create a function that displays row and column totals
function grandTotals () {
  let hourTotalRow = document.createElement('tfoot');
  hourTotalRow.textContent = 'Total';
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourTotal += storeArray[j].avgCookiesSoldEachHourArray[i];
    }
    let td = document.createElement('td');
    td.textContent = hourTotal;
    hourTotalRow.appendChild(td);
    grandTotal += hourTotal;
  }
  let grandTotalId = document.createElement('td');
  grandTotalId.textContent = grandTotal;
  hourTotalRow.appendChild(grandTotalId);

  storeTable.appendChild(hourTotalRow);
}


// Function that renders data from every array in storeArray
function renderAll () {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].renderTable();
  }
  grandTotals();
}


renderAll();



// NON-WORKING CODE FOR THEME BUTTONS
// let changeHeader = document.querySelector('header');
// let changeMain = document.querySelector('main');
// let changeFooter = document.querySelector('footer');

// let salmonThemeBtn = document.querySelector('#salmon-btn');

// function setCookieTheme() {
//   changeMain.classList.add('.cookie-theme');
//   changeHeader.classList.remove('.cookie-theme');
//   changeFooter.classList.remove('.cookie-theme');
// }

// let cookieThemeBtn = document.querySelector('#cookie-btn');

// function setSalmonTheme() {
//   changeMain.classList.remove('cookie-theme');
//   changeHeader.classList.add('cookie-theme');
//   changeFooter.classList.add('cookie-theme');
// }

// salmonThemeBtn.addEventListener('click', setSalmonTheme);
// cookieThemeBtn.addEventListener('click', setCookieTheme);
