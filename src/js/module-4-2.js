// # Масив обєктів - spred та rest

// ---

// **1. Завдання:**
// Створи об'єкт із властивостями `firstName` (рядок), `lastName` (рядок) та `age`
// (число). Додай метод `getFullName`, який повертає повне ім'я у форматі:
// `[firstName] [lastName]`. Також додай метод `incrementAge`, який збільшує вік
// на 1.

// const objTasks = {
//   firstName: 'Leonid',
//   lastName: 'Volkov',
//   age: 35,
//   getFullName() {
//     return this['firstName'] + ' ' + this['lastName'];
//   },
//   incrementAge() {
//     return (this.age += 1);
//   },
// };
// console.log(objTasks.getFullName());
// console.log(objTasks.incrementAge());

// ---

// **2. Завдання:**
// Створи об'єкт із властивостями `bankName` (рядок), `accountNumber` (число) та
// `balance` (число). Додай метод `deposit`, який приймає суму як аргумент і додає
// її до балансу, а також метод `withdraw`, який приймає суму і зменшує баланс,
// якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.

// const objBank = {
//   bankName: 'MonoBank',
//   accountNumber: 4143,
//   balance: 1000,

//   deposit(sum) {
//     return (this.balance += sum);
//   },
//   withdraw(sum) {
//     if (sum >= this.balance) {
//       const result = (this.balance -= sum);
//       return result;
//     }
//     return this.balance;
//   },
// };

// objBank.deposit(500);
// objBank.withdraw(1200);
// console.log(objBank.withdraw());
// ---

// **3. Завдання:**
// Створи об'єкт з властивостями `width` (число), `height` (число). Додай метод
// `calculateArea`, який повертає площу прямокутника, та метод
// `calculatePerimeter`, який повертає периметр.

// const objWidth = {
//   width: 30,
//   height: 80,
//   calculateArea() {
//     return this.width * this.height;
//   },
//   calculatePerimeter() {
//     console.log(
//       `Периметр прямокутника зі сторонами ${this.width} і ${this.height} дорівнює: ${this.calculateArea()}`,
//     );
//   },
// };

// console.log(objWidth.calculateArea());
// console.log(objWidth.calculatePerimeter());

// ---

// **4. Завдання:**
// Створи об'єкт із властивостями `name` (рядок), `position` (рядок) та `salary`
// (число). Додай метод `getInfo`, який повертає рядок у форматі:
// `[name] працює на позиції [position] із зарплатою [salary]`.

// const objName = {
//   name: 'Kosta',
//   position: 'Start',
//   salary: 345,
//   getInfo() {
//     return `${this['name']} - ${this['position']} - ${this['salary']}`;
//   },
// };
// console.log(objName.getInfo());

// ---

// **5. Завдання:**
// Створи об'єкт із властивостями `countryName` (рядок), `capital` (рядок) та
// `population` (число). Додай метод `getDetails`, який повертає рядок у форматі:
// `Країна: [countryName], столиця: [capital], населення: [population]`.

// const objCapital = {
//   contryName: 'Ukraina',
//   capital: 'Kiev',
//   population: 45,

//   getDetails() {
//     return `Країна: ${this['contryName']}, столиця: ${this['capital']}, населення: ${this['population']}`;
//   },
// };
// console.log(objCapital.getDetails());
// ---

// **6. Завдання:**
// Створи об'єкт із властивостями `itemName` (рядок), `quantity` (число) та
// `pricePerItem` (число). Додай метод `calculateTotalPrice`, який повертає
// загальну вартість, множачи `quantity` на `pricePerItem`.

// const objName = {
//   itemName: 'Kiev',
//   quatity: 234,
//   pricePerItem: 451,
//   calculateTotalPrice() {
//     return this.quatity * this.pricePerItem;
//   },
// };
// console.log(objName.calculateTotalPrice());

// ---

// **7. Завдання:**
// Створи об'єкт із властивостями `email` (рядок) та `password` (рядок). Додай
// метод `checkLogin`, який приймає два аргументи (email і password) і повертає
// `true`, якщо вони збігаються зі значеннями об'єкта.

// const objEmail = {
//     email:'sobaca@.email.com',
//     password:'Hellow23World',

//     checkLogin(str){
//         if(this.email === str && this.password === str){
//             return true;
//         }
//         return false;

//     }

// }

// ---

// **8. Завдання:**
// Створи об'єкт із властивостями `temperature` (число) та `unit` (рядок, що
// приймає значення `"C"` або `"F"`). Додай метод `convertToCelsius`, який
// переводить температуру з Фаренгейта в Цельсій, якщо `unit` дорівнює `"F"`, та
// метод `convertToFahrenheit`, який робить зворотнє перетворення.

// const objNumber = {
//   temperture: 32,
//   unit: 'C',
//   convertToCelsius(str) {
//     if (this.unit !== str) {
//       return (this.temperture * 9) / 5;
//     }
//   },
// };
// console.log(objNumber.convertToCelsius());

// ---

// **9. Завдання:**
// Створи об'єкт із властивостями `vehicleType` (рядок), `fuelType` (рядок) та
// `fuelEfficiency` (число). Додай метод `calculateRange`, який приймає кількість
// пального (число) і повертає відстань, яку можна подолати.

// const objStr = {
//   vehicleType: 'sedan',
//   fuelType: 'disel;',
//   fuelEfficieny: 40,
//   calculateRange() {
//     return `sedan - ${this.fuelEfficieny / this.fuelType.length}`;
//   },
// };

// console.log(objStr.calculateRange());
// ---

// **10. Завдання:**
// Створи об'єкт із властивостями `studentName` (рядок), `grade` (число) та
// `subject` (рядок). Додай метод `upgradeGrade`, який збільшує значення `grade` на
// 1, та метод `getReport`, який повертає рядок у форматі:
// `[studentName] має оцінку [grade] з предмету [subject]`.

// const objStydent = {
//   studentName: 'Igor',
//   grade: 3,
//   sudject: 'Matemateka',

//   upgradeGrade() {
//     this.grade += 1;
//   },
//   getReport() {
//     return `${this['studentName']} - ${this['grade']} bal, ${this['sudject']} `;
//   },
// };
// console.log(objStydent.getReport());
// // ---

// **11. Завдання:**
// Створи об'єкт із властивостями `movieTitle` (рядок), `director` (рядок) та
// `duration` (число, у хвилинах). Додай метод `getMovieInfo`, який повертає опис
// фільму у форматі: `[movieTitle], режисер [director], тривалість [duration] хв`.

// const objFilm = {
//     movieTitle: 'Doroga',
//     director:'Filini',
//     duration:104,
//     getMovieInfo(){
//         return `${this.movieTitle}, ${this.director}, ${this.duration}`
//     }
// }
// ---

// **12. Завдання:**
// Створи об'єкт із властивостями `username` (рядок), `isOnline` (булеве значення).
// Додай метод `toggleStatus`, який змінює значення `isOnline` на протилежне.

// const odjUser = {
//     username:'Kosta',
//     inOnline: true,

//     toggleStatus(){
//         return !this.inOnline;
//     },

// }
// ---

// **13. Завдання:**
// Створи об'єкт із властивостями `day` (число), `month` (число) та `year` (число).
// Додай метод `formatDate`, який повертає рядок у форматі: `DD/MM/YYYY`.

// const odjDay = {
//   day: 30,
//   month: 7,
//   year: 2026,

//   formatDate() {
//     return `${this.day}/${this.month}/${this.year}.`;
//   },
// };
// console.log(odjDay.formatDate());
// ---

// **14. Завдання:**
// Створи об'єкт із властивостями `colorName` (рядок) та `isPrimary` (булеве
// значення). Додай метод `checkPrimary`, який повертає `true`, якщо `colorName` є
// одним із базових кольорів: `"red"`, `"blue"`, `"yellow"`.

// const objColor = {
//   colorNema: 'blue',
//   isPrimary: true,

//   checkPrimary() {
//     if (
//       this.colorNema === 'red' ||
//       this.colorNema === 'blue' ||
//       this.colorNema === 'yellow'
//     ) {
//       return this.isPrimary;
//     }
//   },
// };
// console.log(objColor.checkPrimary());

// ---

// **15. Завдання:**
// Створи об'єкт із властивостями `animalType` (рядок), `age` (число). Додай метод
// `isAdult`, який повертає `true`, якщо вік тварини більше або дорівнює 2.

// const objType = {
//   animalType: 'Sobaka',
//   age: 11,
//   isAdult() {
//     if (this.age >= 2) {
//       return true;
//     }
//   },
// };
// console.log(objType.isAdult());

// ---

// **16. Завдання:**
// Створи об'єкт із властивостями `planetName` (рядок), `diameter` (число, у км).
// Додай метод `getRadius`, який повертає радіус планети, ділячи `diameter` на 2.

// const objPlanet = {
//   planetName: 'luna',
//   dimeter: 4000,

//   getRadius() {
//     return this.dimeter / 2;
//   },
// };

// console.log(objPlanet.getRadius());
// ---

// **17. Завдання:**
// Створи об'єкт із властивостями `songName` (рядок), `artist` (рядок) та
// `duration` (число, у хвилинах). Додай метод `getSongInfo`, який повертає рядок:
// `"Song '[songName]' by [artist], [duration] minutes"`.

// const objSong = {
//   songName: 'Litel',
//   artist: 'ASIDISI',
//   duration: 10,
//   getSongInfo() {
//     return `Song ${this['songName']} by ${this['artist']}, ${this['duration']} minutes `;
//   },
// };
// console.log(objSong.getSongInfo());
// ---

// **18. Завдання:**
// Створи об'єкт із властивостями `cityName` (рядок), `population` (число) та
// `isCapital` (булеве значення). Додай метод `getCityInfo`, який повертає опис
// міста у форматі: `[cityName] має населення [population]. Столиця: [isCapital]`.

// const objCity = {
//   cityName: 'New York',
//   population: 2000,
//   isCapital: true,

//   getCityInfo() {
//     return `${this['cityName']} має населення ${this['population']}. Столиця: ${this['isCapital']}`;
//   },
// };
// console.log(objCity.getCityInfo());

// ---

// **19. Завдання:**
// Створи об'єкт із властивостями `username` (рядок), `level` (число). Додай метод
// `levelUp`, який збільшує рівень на 1, та метод `getUserInfo`, який повертає
// рядок: `[username], рівень: [level]`.

// const objUser = {
//   username: 'Anton',
//   level: 22,

//   levelUp() {
//     this.level += 1;
//   },

//   getUserInfo() {
//     return `${this['username']}, ${this['level']}`;
//   },
// };
// console.log(objUser.levelUp());
// console.log(objUser.getUserInfo());

// ---

// **20. Завдання:**
// Створи об'єкт із властивостями `eventName` (рядок), `date` (рядок). Додай метод
// `getEventInfo`, який повертає рядок: `Подія: [eventName], Дата: [date]`.

// const objEvent = {
//   eventName: 'Kazantip',
//   date: 10,
//   getEventInfo() {
//     return `Подія: ${this['eventName']}, Дата: ${this['date']}`;
//   },
// };
// console.log(objEvent.getEventInfo());

// ---

// **21. Завдання:**
// Створи об'єкт із властивостями `length` (число) та `width` (число). Додай метод
// `isSquare`, який повертає `true`, якщо довжина і ширина однакові.

// const objLength = {
//   length: 34,
//   widht: 35,
//   isSquare() {
//     if (this.length === this.widht) {
//       return true;
//     }

//   },
// };
// console.log(objLength.isSquare());

// ---

// **22. Завдання:**
// Створи об'єкт із властивостями `temperature` (число). Додай метод `isFreezing`,
// який повертає `true`, якщо температура менше або дорівнює 0.

// const objTemperature = {
//   temperature: -23,

//   isFreezing() {
//     if (this.temperature <= 0) {
//       return true;
//     }
//   },
// };
// console.log(objTemperature.isFreezing());

// ---

// **23. Завдання:**
// Створи об'єкт із властивостями `score` (число). Додай метод `resetScore`, який
// встановлює значення `score` на 0.

// const objScore = {
//   score: 31,

//   resetSocore() {
//     return (this.score = 0);
//   },
// };
// console.log(objScore.resetSocore());

// ---

// **24. Завдання:**
// Створи об'єкт із властивостями `name` (рядок), `price` (число). Додай метод
// `discount`, який приймає відсоток знижки і повертає нову ціну.

// const objName2 = {
//   name: 'Alex',
//   price: 3000,
//   discount() {
//     return (this.price / 100) * 15;
//   },
// };
// console.log(objName2.discount());
// ---

// **25. Завдання:**
// Створи об'єкт із властивостями `weight` (число, у кг). Додай метод
// `convertToPounds`, який повертає вагу в фунтах (1 кг = 2.20462 фунта).

// const objWidth3 = {
//   weight: 55,
//   convertToPounds() {
//     return this.weight * 220462;
//   },
// };
// console.log(objWidth3.convertToPounds());

// ---

// **26. Завдання:**
// Створи об'єкт із властивостями `speed` (число). Додай метод `increaseSpeed`,
// який приймає число і додає його до швидкості.

// const objSpeed = {
//   speed: 56,
//   increaseSpeed(number) {
//     return (this.speed += number);
//   },
// };

// console.log(objSpeed.increaseSpeed(100));

// ---

// **27. Завдання:**
// Створи об'єкт із властивостями `title` (рядок), `isPublished` (булеве значення).
// Додай метод `togglePublish`, який змінює значення `isPublished` на протилежне.

// const objTitle = {
//   title: 'Hello',
//   isPublished: true,

//   togglePublish() {
//     return !this.isPublished;
//   },
// };
// console.log(objTitle.togglePublish());
// ---

// **28. Завдання:**
// Створи об'єкт із властивостями `email` (рядок). Додай метод `isGmail`, який
// повертає `true`, якщо email містить домен `"@gmail.com"`.

// const objGmail = {
//   email: 'dogsobaka@gmail.com',
//   isGmail() {
//     const email = this.email.indexOf('@gmail.com');
//     const emailSplice = this.email.slice(email);
//     if (emailSplice === '@gmail.com') {
//       return true;
//     }
//   },
// };
// console.log(objGmail.isGmail());

// ---

// **29. Завдання:**
// Створи об'єкт із властивостями `x` (число), `y` (число). Додай метод
// `calculateDistance`, який повертає відстань від початку координат (формула:
// √(x² + y²)).

// const objFormyla = {
//   x: 29,
//   y: 43,

//   calculateDistance() {
//     return Math.sqrt(this.x ** 2 + this.y ** 2);
//   },
// };

// console.log(objFormyla.calculateDistance());

// ---

// **30. Завдання:**
// Створи об'єкт із властивостями `hours` (число), `minutes` (число). Додай метод
// `convertToMinutes`, який повертає загальну кількість хвилин.

// const objHours = {
//   hours: 25,
//   minutes: 39,
//   convertToMinutes() {
//     return this.hours + this.minutes;
//   },
// };

// console.log(objHours.convertToMinutes());
// ---

// ```
// Написати систему контролю банку.

// Властивості:
// - список користувачів [userId, FIO,'password']
// - список рахунків [userId, accountNumber, value]

// Методи:
// - додати користувача
// - видалити користувача

// - створити рахунок
// - видалити рахунок

// - додати гроші на рахунок
// - зняти гроші з рахунка
// ```

// ---

// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання.
// Об'єкт task, який буде містити властивості Name, deadline, priority та done.
// Додайте методи для відмітки завдання як виконаного та для виведення
// інформаціїпро завдання.

// ---

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з
// властивостями назва, ціна та кількість. Додайте методи для додавання товару,
// видалення товару та підрахунку загальної вартості.

// ---

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен
// користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод
// для перевірки введеного пароля при вході.

// ---

// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга
// буде об'єктом з властивостями назва, автор, рік видання та прочитано
// (true/false). Додайте методи для відмітки книги як прочитаної та виведення
// статистики про прочитані книги.

// ---

// Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте
// властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для
// атаки інших персонажів та відновлення здоров'я.

// ---

// Список контактів: Створіть програму для управління списком контактів. Кожен
// контакт буде об'єктом з властивостями ім'я, телефон, email тощо. Додайте методи
// для додавання, видалення та пошуку контактів.

// ---

// Календар подій: Створіть календар подій, де кожна подія буде об'єктом з
// властивостями назва, дата, місце та повідомлення. Додайте методи для додавання
// події, видалення події та перегляду подій на певну дату.

// ---

// Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання товарів у кошик
// та оформлення замовлення. Кожен товар буде об'єктом з властивостями назва, ціна,
// наявність тощо. Реалізуйте методи для додавання товару у кошик, підрахунку
// загальної вартості та оформлення замовлення.

// ---

// Пошук інформації: Створіть програму, яка дозволить шукати інформацію в тексті.
// Ви створюєте об'єкт зі збереженими текстовими даними та методами для пошуку
// заданого слова або фрази у тексті.

// ---

// Банківський рахунок: Створіть об'єкт account, який міститиме інформацію про
// банківський рахунок користувача, таку як ім'я, баланс та історія транзакцій.
// Додайте методи для додавання та витрати коштів, а також для виведення історії
// транзакцій.

// # This

// ```js
// //!======================================================
// // TASK№1
// function greet() {
//   console.log(this);
// }

// const person = {
//   name: 'Olga',
//   sayHi: greet,
// };

// const ref = person.sayHi;
// ref();
// //!======================================================

// //!======================================================
// // TASK№2
// const obj = {
//   name: 'Test',
//   method: function () {
//     console.log(this);
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const arrow = obj.method();
// arrow();
// //!======================================================
// //!======================================================
// // TASK№3
// function whoIsThis() {
//   console.log(this);
// }

// const bound = whoIsThis.bind({ name: 'Bound context' });

// const callLater = fn => fn();

// callLater(bound);
// //!======================================================
// //!======================================================
// // TASK№4
// const user = {
//   name: 'Alice',
//   showName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(user.showName, 100);
// //!======================================================
// //!======================================================
// // TASK№5
// function showThis(a, b) {
//   console.log(this, a, b);
// }

// showThis.call({ x: 10 }, 1, 2);
// showThis.apply({ x: 20 }, [3, 4]);
// //!======================================================
// //!======================================================
// // TASK№6
// const name = 'Global';

// const obj = {
//   name: 'Object',
//   show: function () {
//     console.log(this.name);
//     const nested = function () {
//       console.log(this.name);
//     };
//     nested();
//   },
// };

// obj.show();
// //!======================================================
// //!======================================================
// // TASK№7
// const a = {
//   name: 'A',
//   say: function () {
//     console.log(this.name);
//   },
// };

// const b = {
//   name: 'B',
// };

// const sayFromA = a.say;
// sayFromA.call(b);
// //!======================================================

// //!======================================================
// // TASK№8
// const obj = {
//   name: 'Nested',
//   outer: function () {
//     return {
//       inner: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };

// const innerFn = obj.outer().inner;
// innerFn();
// //!======================================================

// //!======================================================
// // TASK№9
// const obj = {
//   method: function () {
//     console.log(this);
//   },
// };

// const other = {
//   method: obj.method,
// };

// const copy = other.method;
// copy();
// //!======================================================

// //!======================================================
// // TASK№10
// function A() {
//   this.name = 'Function A';
//   return {
//     name: 'Returned Object',
//     getThis: function () {
//       console.log(this.name);
//     },
//   };
// }

// const result = new A();
// result.getThis();
// ```
