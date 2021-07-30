'use strict';


// Create an array containing every hour the store is open
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  //create an empty array that will house the random numbers
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,

  getRandomCustomers: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  },
  displayCookies: function() {
    let ul = document.getElementById('seattleStore');
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    ul.appendChild(h3);
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      //Use the DOM to create the list
      li.textContent = `${hour[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
  }
};

seattle.displayCookies();


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  //create an empty array that will house the random numbers
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  },
  displayCookies: function() {
    let ul = document.getElementById('tokyoStore');
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    ul.appendChild(h3);
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      //Use the DOM to create the list
      li.textContent = `${hour[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
  }
};

tokyo.displayCookies();


let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  //create an empty array that will house the random numbers
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  },
  displayCookies: function() {
    let ul = document.getElementById('dubaiStore');
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    ul.appendChild(h3);
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      //Use the DOM to create the list
      li.textContent = `${hour[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
  }
};

dubai.displayCookies();


let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  //create an empty array that will house the random numbers
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  },
  displayCookies: function() {
    let ul = document.getElementById('parisStore');
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    ul.appendChild(h3);
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      //Use the DOM to create the list
      li.textContent = `${hour[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
  }
};

paris.displayCookies();


let lima = {
  name: 'Lima',
  min: 20,
  max: 16,
  avg: 4.6,
  //create an empty array that will house the random numbers
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPurchased: function() {
    return Math.ceil(this.getRandomCustomers()*this.avg);
  },
  displayCookies: function() {
    let ul = document.getElementById('limaStore');
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    ul.appendChild(h3);
    for (let i = 0; i < hour.length; i++) {
      let avgCookie = this.cookiesPurchased();
      this.avgCookiesSoldEachHourArray.push(avgCookie);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      //Use the DOM to create the list
      li.textContent = `${hour[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
  }
};

lima.displayCookies();
