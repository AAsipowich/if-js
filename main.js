const user = 'John Doe';
console.log(user);

let student = 'Anya';
console.log(student);
student = user;
console.log(user);

let test = 1;

test = ++test;

test += '1';
// В переменной test значение 21
console.log(test);

test = --test;

// В переменной test значение 20
console.log(test);

test = !test;
// В переменной test значение false
console.log(test);

let bol = 1;
const bal = [2, 3, 5, 8];
for (let i = 0; i <= bal.length; i++) {
  bol *= bal[i];
  console.log(bol);
}

const bac = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i <= bac.length; i++) {
  if (bac[i] > 5 && bac[i] < 10) console.log(bac[i]);
}

const tro = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i <= tro.length; i++) {
  if (tro[i] % 2 === 0) console.log(tro[i]);
}

// Функция palindrome

function palindrome(str) {
  return str === str.split('').reverse('').join('');
}
console.log(palindrome('шалаш'));

// Функция min(a, b) и функция max(a,b)
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(9, 5));

function max(a, b) {
  // debugger
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(9, 5));

function ternMin(a, b) {
  return a < b ? a : b;
}
ternMin(4, 6);

function ternMax(a, b) {
  return a > b ? a : b;
}
ternMax(8, 9);

// Замена элементов массива

function Zero() {
  let arr = [3, 11, 50, 27, 19, 4, 80, 78, 52, 90];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      arr = arr.join().replace(/0/g, 'zero');
      console.log(arr.split(','));
    }
  }
}

Zero();

// Покрасить абзацы по клику
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const paragText1 = document.getElementById('text1');
const paragText2 = document.getElementById('text2');
const paragText3 = document.getElementById('text3');

function colorChange(parameter) {
  let clicks = 0;
  return function () {
    clicks += 1;
    const paragraph = parameter;
    paragraph.style.color = colors[clicks - 1];
    if (clicks > colors.length - 1) {
      clicks = 0;
    }
  };
}

paragText1.addEventListener('click', colorChange(paragText1));
paragText2.addEventListener('click', colorChange(paragText2));
paragText3.addEventListener('click', colorChange(paragText3));

// Преобразование формата даты
function dateReplace(date) {
  const dateReplaced = date.slice(8) + date.slice(4, 8) + date.slice(0, 4);
  const dateWithDots = dateReplaced.replace(/-/g, '.');
  console.log(dateWithDots);
}

dateReplace('2020-11-26');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchString(searchWord) {
  let foundString;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].country.includes(searchWord) || data[i].city.includes(searchWord)
     || data[i].hotel.includes(searchWord)) {
      foundString = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
      console.log(foundString);
    }
  }
}

searchString('Germany');

const wordPalindrome = 'шалаш';
const reverseWordPalindrome = wordPalindrome.split().reverse().join();
console.log(wordPalindrome === reverseWordPalindrome);

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
function searchHotels(searchWord) {
  const searchWordToLowerCase = searchWord.toLowerCase();
  hotels.forEach((element) => {
    const searchLineToLowerCase = element.name.toLowerCase() + element.city.toLowerCase()
      + element.country.toLowerCase();
    if (searchLineToLowerCase.includes(searchWordToLowerCase)) {
      console.log(`${element.country}, ${element.city}, ${element.name}`);
    }
  });
}

searchHotels('south');

function searchCountry() {
  return hotels.reduce((accumulator, currentValue) => {
    const resultSearch = [];
    if (!accumulator[currentValue.country]) {
      resultSearch.push(currentValue.city);
      accumulator[currentValue.country] = resultSearch;
    } else if (!accumulator[currentValue.country].includes(currentValue.city)) {
      accumulator[currentValue.country].push(currentValue.city);
    }
    return accumulator;
  }, {});
}

console.log(searchCountry());
