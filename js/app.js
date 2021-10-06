'use strict';

// Create an array containing every hour the store is open
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArray =[];



// Create a DOM container element for the table content
const storeTable = document.querySelector('table');
let tableBody = document.querySelector('tbody');
let tableHead = document.querySelector('thead');
let hoursRows = document.createElement('tr');
let hoursTitle = document.createElement('th');

hoursTitle.textContent = 'Store';
hoursRows.appendChild(hoursTitle);
tableHead.appendChild(hoursRows);

let hourTotalRow = document.querySelector('tfoot');

// Iterate and display every hour the store is open
for (let i = 0; i < hour.length; i++) {
  let th = document.createElement('th');
  th.textContent = hour[i];
  hoursRows.appendChild(th);
  tableHead.appendChild(hoursRows);
}

let th2 = document.createElement('th');
th2.textContent = 'Daily Location Total';
hoursRows.appendChild(th2);



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
    let locationName = document.createElement('th');
    locationName.textContent = `${this.name}`;
    tr.appendChild(locationName);
    tableBody.appendChild(tr);
    this.createCookiesPurchasedArray();
    for (let i = 0; i < hour.length; i++) {
      let td = document.createElement('td');
      td.textContent = `${this.avgCookiesSoldEachHourArray[i]}`;
      tr.appendChild(td);
    }
    let totalTd = document.createElement('td');
    totalTd.textContent = this.dailyTotal;
    tr.appendChild(totalTd);
    tableBody.appendChild(tr);
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
  // let hourTotalRow = document.createElement('tfoot');
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
  // grandTotals();
}


renderAll();
grandTotals();


// Create container element accessing the form id
let formContainer = document.getElementById('locations');

function handleSubmit(event) {
  event.preventDefault();
  let storeLocation = event.target.storeLocation.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let avgCookies = parseInt(event.target.avgCookies.value);
  console.log(storeLocation,minCustomers, maxCustomers, avgCookies);

  let newStore = new Store(
    storeLocation,
    minCustomers,
    maxCustomers,
    avgCookies
  );

  tableBody.innerHTML = '';
  hourTotalRow.innerHTML = '';
  renderAll();
  grandTotals();
}
formContainer.addEventListener('submit', handleSubmit);





