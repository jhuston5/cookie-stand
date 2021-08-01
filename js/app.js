'use strict';


// Create an array containing every hour the store is open
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArray =[];

const storeTable = document.querySelector('table');
let tr = document.createElement('tr');
let th = document.createElement('th');
th.textContent = 'Store';
tr.appendChild(th);
storeTable.appendChild(tr);
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
  this.getRandomCustomers = function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookiesPurchased = function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  };
  this.createCookiesPurchasedArray = function() {
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
    }
  };
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
  storeArray.push(this);
}


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


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

function renderAll () {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].renderTable();
  }
  grandTotals();
}


renderAll();



// Wrap this in a function, call this function in the render all after the for loop

//WORKING CODE
// let hourTotalRow = document.createElement('tr');
// hourTotalRow.textContent = 'Total';
// let grandtotal = 0;
// for (let i = 0; i < hour.length; i++) {
//   let hourTotal = 0;
//   for (let j = 0; j < storeArray.length; j++) {
//     hourTotal += storeArray[j].avgCookiesSoldEachHourArray[i];
//   }
//   let td = document.createElement('td');
//   td.textContent = hourTotal;
//   hourTotalRow.appendChild(td);
//   grandtotal += hourTotal;
// }
// let grandTotalId = document.createElement('td');
// grandTotalId.textContent = grandtotal;
// hourTotalRow.appendChild(grandTotalId);

// storeTable.appendChild(hourTotalRow);
//END WORKING CODE


// let totalTh = document.createElement('th');
// totalTh.textContent = 'Daily Location Total';
// tr.appendChild(totalTh);
// for (let i = 0; i < storeArray.length; i++) {
//   let dailyTotal = 0;
//   for (let j = 0; j < hour.length; j++) {
//     dailyTotal += storeArray[i].avgCookiesSoldEachHourArray[j];
//   }
//   let dailyTotalRow = document.createElement('tr');
//   dailyTotalRow.textContent = dailyTotal;
//   totalTh.appendChild(dailyTotalRow);
// }
// storeTable.appendChild(dailyTotalRow);


// this.addTotalCookiesPurchased = function() {
//   let totalCookies = 0;
//   for (let i = 0; i < this.avgCookiesSoldEachHourArray.length; i++) {
//     totalCookies += this.avgCookiesSoldEachHourArray[i];
//   }
//   this.avgCookiesSoldEachHourArray.push(totalCookies);
// };
