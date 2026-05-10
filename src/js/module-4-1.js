// # Обєкти

// ## ОСНОВИ

// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.

// const person = {
//   name: 'Leonid',
//   age: 13,
//   profesion: 'Driver',
// };

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person.name);

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// console.log((person.age = 20));
// console.log(person.age);
// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.

// person.work = 'Kiev';
// console.log(person.work);

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// delete person.profesion;
// console.log(person.profesion);

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// console.log(person.hasOwnProperty('work'));

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// об'єктом person.

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().

// ---

// ## ЗАДАЧІ

// ```
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// ```
// function task1(str, number) {
//   const odj = {
//     name: str,
//     age: number,
//   };
//   return odj;
// }
// console.log(task1('hello', 23));
// ---

// ```
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
// ```

// function task2(odj) {
//   odj.addreess = '';
//   return odj;
// }
// console.log(task2('hello'));

// ---

// ```
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.
// ```

// function task3(odj, newAge) {
//   odj.age = newAge;
//   return odj;
// }
// console.log(task3({ age: 23 }, 34));

// ---

// ```
// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.
// ```

// function task4(odj) {
//   delete odj.age;
//   return odj;
// }
// console.log(task4({ age: 23 }));
// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// ```

// function task5(odj) {
//   return odj.name;
// }
// console.log(task5({ name: 'hello' }));
// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// ```

// function task6(odj) {
//   if (odj.hasOwnProperty('addreess')) {
//     return true;
//   }
//   return false;
// }
// console.log(task6({ addreess: 'Kiev' }));
// ---

// ```
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// ```

// function task7(odj, odj2) {
//   const result = {
//     ...odj,
//     ...odj2,
//   };
//   return result;
// }
// console.log(task7({ addreess: 'Kiev', name: 'fhdsjf' }));

// ---

// ```
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.
// ```

// function task8(name = 'Unknown', age = 0, addreess) {
//   const odj = {
//     name,
//     age,
//     addreess,
//   };
//   return odj;
// }
// console.log(task8('fhdsjf', '12', 'Kiev'));

// ---

// ```
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// ```

// function task9(odj) {
//   odj.name = 'Dimon';
//   odj.age = 25;
//   const result = {
//     ...odj,
//   };
//   return result;
// }
// console.log(task9({ name: 'Igor', age: 22 }));
// ---

// ```
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// ```
// function task10(odj) {
//   const isEmail = odj.hasOwnProperty('email');
//   odj.email = 'email';
//   const newOdj = {
//     ...odj,
//   };
//   return newOdj;
// }
// console.log(task10({ name: 'Igor', age: 22 }));

// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// ```
// function task11(odj) {
//    odj.age = '22';
//   return odj;
// }

// console.log(task11({ name: 'Igor', age: 22 }));
// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// ```
// function task12(odj) {
//   const isAddress = odj.hasOwnProperty('address');
//   if (isAddress) {
//     return;
//   }
//   return odj;
// }

// console.log(task12({ name: 'Igor', age: 22 }));
// ---

// ```
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// ```

// function task13(odj) {
//   return `User ${odj.name} from ${odj.city}!`;
// }

// console.log(task13({ name: 'Igor', city: 'Kiev' }));

// ---

// ```
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// ```

// function task14(odj) {
//   let arr = [];
//   for (const el of Object.entries(odj)) {
//     arr.push(el);
//   }
//   return arr;
// }
// console.log(
//   task14([
//     ['name', 'John'],
//     ['age', 25],
//     ['address', '123 Street'],
//   ]),
// );
// ---

// ```
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// ```

// function task15(odj) {
//   let arr = [];

//   for (const el of odj) {
//     el.age += 1;
//     arr.push(el);
//   }
//   return arr;
// }
// console.log(task15([{ name: 'John', age: 25, address: '123 Street' }]));

// ---

// ## ЗАДАЧІ №2

// ```
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
// ```

// const contactBook = {
//   list: ['hello', 'hello2', 'hello3'],
//   setAddContact(newContact) {
//     this.list.push(newContact);
//   },
//   removeContact(contact) {
//     // const idx = this.list.indexOf(contact);

//     let resat = this.list.filter(el => {
//       return el !== contact;
//     });

//     this.list = resat;
//   },
// };
// console.log(contactBook.list);
// contactBook.setAddContact('hello4');
// console.log(contactBook.list);
// contactBook.removeContact('hello2');
// console.log(contactBook.list);

const contactBook1 = {
  list: [],
  addContact(name, tel) {
    this.list.push({ name, tel });
  },
  removeContact(name, tel) {
    let arr = [];
    for (const el of this.list) {
      if (el.name !== name && el.tel !== tel) {
        arr.push(el);
      }
    }
    this.list = arr;
  },
};

// ```
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// ```

const rectangle = {
  a: 10,
  b: 10,

  getArea() {
    return this.a * this.b;
  },
};
console.log(rectangle.getArea());

// Math.

// ```
// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// ```
const toDoList = {
  list: ['hello', 'hello2', 'hello3'],
  setAddList(newlist) {
    this.list.push(newlist);
  },
};
console.log(toDoList.list);
toDoList.setAddList('hello5');
console.log(toDoList.list);
// ```
// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// ```

// ```
// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// ```

// const libraryCatalog = {
//   book: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   setBook(newBook) {
//     this.book.push(newBook);
//   },

//   // addBook(bookName) {
//   //   for (const books of this.book) {
//   //     if (books.title === bookName) {
//   //     }
//   //   }
//   // },

//   setBookSepartely(title2, rating2) {
//     this.book.push({ title: title2, rating: rating2 });
//   },
// };
// // libraryCatalog.addBook('The Mist', 9);
// // libraryCatalog.addBook('The Last Kingdom', 4);
// console.log(libraryCatalog.book);
// libraryCatalog.setBook({ title: 'hello5', rating: 10 });
// // libraryCatalog.setBook('hello6');
// console.log(libraryCatalog.book);
// libraryCatalog.setBookSepartely('sgjd', 12);
// console.log(libraryCatalog.book);

// ```
// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
// ```

// ```
// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// ```

// ```
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// ```

// ```
// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// ```

// ```
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// ```

// ```
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// ```

// ---

// ## РОЗПИСАНІ ЗАДАЧІ

// Створити об'єкт **contactBook**:

// - **Властивості**:
//   - `contacts` (масив контактів)
// - **Методи**:
//   - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
//     контактів.
//   - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
//     його з масиву контактів.
//   - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
//     масиві контактів.

const contactBook = {
  contacts: [],
  addContact(contact) {
    this.contacts.push(contact);
  },
  deleteContact(contactName) {
    const idx = this.contacts.indexOf(contactName);
    if (idx !== -1) {
      this.contacts.splice(idx, 1);
    }
  },
  findContact(contactName) {
    const idx = this.contacts.indexOf(contactName);
    return this.contacts[idx];
  },
};
contactBook.addContact('44445565');
contactBook.addContact('222224545');
contactBook.addContact('333345656545');
console.log(contactBook.contacts);
contactBook.deleteContact('44445565');
console.log(contactBook.contacts);
console.log(contactBook.findContact('222224545'));
console.log(contactBook.contacts);

// ---

// Створити об'єкт **rectangle**:

// - **Властивості**:
//   - `width` (довжина першої сторони)
//   - `height` (довжина другої сторони)
// - **Методи**:
//   - `area()` - метод, що обчислює та повертає площу прямокутника.
//   - `perimeter()` - метод, що обчислює та повертає периметр прямокутника.

// ---

// Створити об'єкт **toDoList**:

// - **Властивості**:
//   - `tasks` (масив задач)
// - **Методи**:
//   - `addTask(task)` - метод, що приймає задачу та додає її до масиву задач.
//   - `markAsDone(taskName)` - метод, що приймає ім'я задачі та позначає її як
//     виконану.
//   - `listTasks()` - метод, що виводить список всіх задач.

const toDoList1 = {
  tasks: [],

  addTask(task) {
    this.tasks.push(task);
  },
  markAsDone(taskName) {
    for (const el of this.tasks) {
      if (el.title === taskName) {
        el.isCompleted = true;
      }
    }
  },
};
// ---

// Створити об'єкт **bankAccount**:

// - **Властивості**:
//   - `balance` (поточний баланс)
// - **Методи**:
//   - `deposit(amount)` - метод, що приймає суму та додає її до балансу.
//   - `withdraw(amount)` - метод, що приймає суму та знімає її з балансу (з
//     перевіркою на достатність коштів).
//   - `checkBalance()` - метод, що повертає поточний баланс.

const bankAccount = {
  balance: 100,

  deposit(amount) {
    console.log((this.balance += amount));
  },
  withdraw(amount) {
    if (this.balance < amount) {
      this.balance = amount;
    }
  },
  checkBalance() {
    console.log(this.balance);
  },
};

bankAccount.deposit(80);
bankAccount.withdraw(350);
console.log(bankAccount.checkBalance());

// ---

// Створити об'єкт **libraryCatalog**:

// - **Властивості**:
//   - `books` (масив книг)
// - **Методи**:
//   - `addBook(book)` - метод, що приймає книгу та додає її до масиву книг.
//   - `findBookByAuthor(author)` - метод, що приймає ім'я автора та повертає книги
//     цього автора.
//   - `findBookByISBN(isbn)` - метод, що приймає ISBN та повертає книгу з цим
//     ISBN.
//   - `listBooks()` - метод, що виводить список всіх книг.

const libraryCatalog = {
  books: [],
  addBook(book) {
    this.books.push(book);
  },
  findBookByAuthor(author) {
    for (const el of this.books) {
      if (el === author) {
        return el.title;
      }
    }
  },
  findBookByISBN(isbn) {
    for (const el of this.books) {
      if (el.title.isbn === isbn) {
        return el.title;
      }
    }
  },
  listBooks() {
    return this.books;
  },
};

// ---

// Створити об'єкт **temperatureConverter**:

// - **Методи**:
//   - `celsiusToFahrenheit(celsius)` - метод, що приймає температуру в градусах
//     Цельсія та повертає її в градусах Фаренгейта.
//   - `fahrenheitToCelsius(fahrenheit)` - метод, що приймає температуру в градусах
//     Фаренгейта та повертає її в градусах Цельсія.

const temperatureConverte = {
  celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
  fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
};

// ---

// Створити об'єкт **shoppingCart**:

// - **Властивості**:
//   - `items` (масив товарів)
// - **Методи**:
//   - `addItem(item)` - метод, що приймає товар та додає його до кошика.
//   - `totalCost()` - метод, що підраховує та повертає загальну вартість всіх
//     товарів у кошику.
//   - `listItems()` - метод, що виводить список всіх товарів у кошику.

// ---
let total = 0;
const shoppingCart = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },
  totalCost() {
    for (const el of this.items) {
      total += el.length;
    }
    console.log(total);
  },
  listItems() {
    return this.items;
  },
};
shoppingCart.addItem(['scolad', 'scolad', 'scolad', 'scolad', 'scolad']);
shoppingCart.totalCost(['scolad', 'scolad', 'scolad']);
shoppingCart.listItems();
console.log(shoppingCart.items);

// Створити об'єкт **socialNetworkUser**:

// - **Властивості**:
//   - `username` (ім'я користувача)
//   - `friends` (масив друзів)
// - **Методи**:
//   - `addFriend(friendName)` - метод, що приймає ім'я друга та додає його до
//     списку друзів.
//   - `removeFriend(friendName)` - метод, що приймає ім'я друга та видаляє його зі
//     списку друзів.
//   - `listFriends()` - метод, що виводить список всіх друзів.

const socialNetworkUser = {
  username: 'Leonid',
  friends: [],

  addFriend(friendName) {
    this.friends.push(friendName);
  },
  removeFriend(friendName) {
    let arr = [];
    for (const el of this.friends) {
      if (el !== friendName) {
        arr.push(el);
      }
    }
    this.friends = arr;
  },
  listFriends() {
    console.log(this.friends.join(','));
  },
};

socialNetworkUser.addFriend('andri');
socialNetworkUser.addFriend('Andri');
socialNetworkUser.listFriends();
// ---

// Створити об'єкт **musicPlayer**:

// - **Властивості**:
//   - `songs` (масив пісень)
//   - `currentSong` (індекс або ідентифікатор поточної пісні)
// - **Методи**:
//   - `addSong(song)` - метод, що приймає пісню та додає її до списку пісень.
//   - `play()` - метод, що відтворює поточну пісню.
//   - `pause()` - метод, що ставить відтворення на паузу.
//   - `next()` - метод, що перемикає на наступну пісню.
//   - `previous()` - метод, що перемикає на попередню пісню.

// ---

const musicPlayer = {
  songs: [],
  currentSong: 'Sting',

  ddSong(song) {
    this.songs.push(song);
  },
  play() {
    for (const el of this.songs) {
      if (el === this.currentSong) {
        return el;
      }
    }
  },
  pause() {
    for (const el of this.songs) {
      if (el !== this.currentSong) {
        return;
      }
    }
  },
  next() {
    for (const el of this.songs) {
      if (el !== el) {
        return;
      }
      return el;
    }
  },
  previous() {
    for (const el of this.songs) {
      const playSongs = this.songs.length - 1;
      if (playSongs < 0) {
      }
      return el;
    }
  },
};

musicPlayer.ddSong(['fajfal, afadsf, dafdf, dsafsd', 'fdf']);
musicPlayer.pause();
musicPlayer.next();
musicPlayer.previous();
console.log(musicPlayer.songs);

// Створити об'єкт **myString**:

// - **Методи**:
//   - `reverse(str)` - метод, що приймає рядок та повертає його в перевернутому
//     вигляді.
//   - `ucFirst(str)` - метод, що приймає рядок та повертає цей же рядок, зробивши
//     його першу літеру заголовною.
//   - `ucWords(str)` - метод, що приймає рядок та робить заголовною першу літеру
//     кожного слова цього рядка.

const myString = {
  reverse(str) {
    console.log(str.split('').reverse().join(''));
  },
  ucFirst(str) {
    console.log(str[0].toUpperCase() + str.slice(1));
  },
  ucWords(str) {
    if (str[0] !== str[0].toUpperCase()) {
      return str[0].toUpperCase() + str.slice(1);
    }
  },
};
// myString.reverse('hello');
// myString.ucFirst('kiev');
// myString.ucWords('true');
console.log(myString.reverse('hello'));
console.log(myString.ucFirst('kiev'));
console.log(myString.ucWords('true'));

// ---

// Створити об'єкт **validator**:

// - **Методи**:
//   - `isEmail(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     емейлом. Повертає `true` або `false`.
//   - `isDomain(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     доменом. Повертає `true` або `false`.
//   - `isDate(str)` - метод, що приймає рядок та перевіряє, чи є він коректною
//     датою. Повертає `true` або `false`.
//   - `isPhone(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     номером телефону. Повертає `true` або `false`.

// ---

const validator = {
  arr: [],
  isCorect: true,
  isNontCorect: false,

  isEmail(str) {
    this.arr.push(str);
    for (const el of this.arr) {
      if (el.email === str) {
        this.isCorect = true;
      }
    }
  },
  isDomain(str) {
    this.arr.push(str);
    for (const el of this.arr) {
      if (el.domen === str) {
        this.isCorect = true;
      }
    }
  },
  isDate(str) {
    this.arr.push(str);
    for (const el of this.arr) {
      if (el.data === str) {
        this.isCorect = true;
      }
    }
  },
  isPhone(str) {
    this.arr.push(str);
    for (const el of this.arr) {
      if (el.tel === str) {
        this.isCorect = true;
      }
    }
  },
};
