'use strict';
const profileContainer = document.getElementById('seattleStore');
console.log(profileContainer);
let article = document.createElement('article');
profileContainer.appendChild(article);


let ul = document.createElement('ul');
ul.id = 'seattleStore';
article.appendChild(ul);


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  timeContainer: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm'],
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    article.appendChild(h3);
    for (let i = 0; i < 14; i++) {
      let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.avgCookiesSoldEachHourArray.push(randomNumber);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${this.timeContainer[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    // return this.avgCookiesSoldEachHourArray;
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    return this.dailyTotal;
    // console.log(this.dailyTotal);
  }
};

console.log(seattle.getRandomCustomers());


// const profileContainer = document.getElementById('seattleStore');
// console.log(profileContainer);
// let article = document.createElement('article');
// profileContainer.appendChild(article);


// let ul = document.createElement('ul');
ul.id = 'tokyoStore';
article.appendChild(ul);

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  timeContainer: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm'],
  avgCookiesSoldEachHourArray: [],
  dailyTotal: 0,
  getRandomCustomers: function() {
    let h3 = document.createElement('h3');
    h3.textContent = `${this.name}`;
    article.appendChild(h3);
    for (let i = 0; i < 14; i++) {
      let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.avgCookiesSoldEachHourArray.push(randomNumber);
      this.dailyTotal = this.dailyTotal+this.avgCookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${this.timeContainer[i]}: ${this.avgCookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);
    }
    // return this.avgCookiesSoldEachHourArray;
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(li);
    // console.log(this.dailyTotal);
  }
};

console.log(tokyo.getRandomCustomers());
