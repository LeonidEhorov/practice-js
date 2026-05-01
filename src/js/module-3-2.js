// # Функції

// 1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.

// function task1(a, b) {
//   return a + b;
// }
// console.log(task1(10, 34));

// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.

// function task2(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log(task2(10, 34, 56));
// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.

// function task3(x, a, b) {
//   return x < a || x > b ? true : false;
// }
// console.log(task3(10, 34, 56));

// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

// function task4(str) {
//   return str[0];
// }
// console.log(task4('dfd'));
// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

// function task5(str) {
//   return str[str.length - 1];
// }

// console.log(task5('dfdr'));
// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.

// function task6(number) {
//   return number % 2 === 0 ? true : false;
// }
// console.log(task6(20));

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function task7(number, number1) {
//   if (number === 0 || number1 === 0) {
//     return null;
//   }
//   const result = number * number1;
//   return result;
// }

// console.log(task7(20, 70));

// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<div>Hello world<div>"`

// function task8(str) {
//   return `<div>${str}<div>`;
// }
// console.log(task8('Hello world'));
// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).

// function task9(str) {
//   return `${str}  ${str.length}`;
// }
// console.log(task9('Hello world'));
// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.

// function task10(str) {
//   const isStr = str.split(' ');
//   return isStr.length * str.length;
// }

// console.log(task10('Hello world'));

// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.

// function task11(str) {
//   for (let i = 0; i < str.length; i++) {
//     const foo = str.includes(str[i]);
//     return `${str.length} ${foo}`;
//   }
// }
// console.log(task11('aeiou'));

// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.

// function task12(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }
// console.log(task12('Hello world'));
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.

// function task13() {
//   for (let i = 0; i < arguments.length; i++) {
//     return typeof arguments[i] === 'number';
//   }
// }
// console.log(task13(12, 23));
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.

// function task14() {
//   let total = '';
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   const result = total.split('');
//   return result;
// }

// console.log(task14(12, 23, 'dfgsfd'));
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.

// function task15() {
//   let total = 0;
//   for (const el of arguments) {
//     total += el;
//   }
//   return total;
// }
// console.log(task15(12, 23, 45, 56));
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.
// function task16() {
//   for (const el of arguments) {
//     if (el % 2 !== 0) {
//       return el;
//     }
//   }
// }

// console.log(task16(12, 23, 45, 56));
// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим

function task17() {
  let total = '';
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > total.length) {
      total = arguments[i];
    }
  }
  return total;
}

console.log(task17('gsfgfs', 'agasgsgasdgs', 'sgfdfdsads'));

// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.

// function task18() {
//   let total = '';
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(task18('gsfgfs', 'agasgsgasdgs', 'sgfdfdsadsfa9'));
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function task19() {
//   let to = 1;
//   for (const el of arguments) {
//     if (el === 0) {
//       return null;
//     }
//     to *= el;
//   }
//   return to;
// }

// console.log(task19(10, 23));

// Задача-51
// Напишіть функцію, яка приймає рядок username. Якщо username не пустий, містить тільки малі літери (перевір через toLowerCase) і довжина від 4 до 12 символів — поверни "Валідний username", інакше — "Невалідний username".

function task1(username) {
  const str = username.toLowerCase();
  if (username !== '' && str && username.length > 4 && username.length < 12) {
    return 'Валідний username';
  }
  return 'Невалідний username';
}
console.log(task1('Hello'));
// Задача-52
// Напишіть функцію, яка приймає рядок password. Якщо пароль містить хоча б одну цифру (includes), хоча б одну велику літеру і довжина більше 8 — поверни "Сильний пароль", інакше — "Слабкий пароль".

function task2(password) {
  for (const el of password) {
    const result = password.includes(Number(el));
    const str = el !== el.toUpperCase();
    const strLenght = password.length;

    if (typeof result && str && strLenght > 8) {
      return 'Сильний пароль';
    }
    return 'Слабкий пароль';
  }
}
console.log(task2('hrHo23klk'));
// Задача-53
// Напишіть функцію, яка приймає число number. Якщо число кратне 3 і 5, і його квадрат більше 100 — поверни "Потужне число", якщо тільки кратне 3 або 5 — "Частково підходить", інакше — "Не підходить".

function task3(number) {}
console.log(task3('hrHo23klk'));

// Задача-54
// Напишіть функцію, яка приймає рядок text. Якщо рядок містить слово "error" (без урахування регістру) — поверни "Є помилка", якщо містить "warning" — "Є попередження", інакше — "Чистий текст".
// function task4(text) {
//   if (text === 'error') {
//     return 'Є помилка';
//   } else if (text === 'warning') {
//     return 'Є попередження';
//   }
//   return 'Чистий текст';
// }
// console.log(task4('warning'));
// Задача-55
// Напишіть функцію, яка приймає число price. Якщо price > 1000, зменш його на 10%, якщо > 500 — на 5%, і поверни фінальну ціну. Якщо менше або дорівнює 500 — поверни без змін.

// function task5(price) {
//   if (price > 1000) {
//     price /= 10;
//   } else if (price > 500) {
//     price /= 5;
//   } else if (price <= 500) {
//   }

//   return price;
// }

// console.log(task5(1500));
// // Задача-56
// Напишіть функцію, яка приймає рядок email. Перевір чи email містить "@" і "." після "@". Якщо так — "Валідний", інакше — "Невалідний".

// function task6(email) {
//   const gmail = email.includes('@');
//   const x = email.indexOf('.');
//   const result = email.slice(x);
//   const strSlice = result.includes('@');
//   if (gmail && strSlice) {
//     return 'Валідний';
//   }
//   return 'Невалідний';
// }
// console.log(task6('hdssjf@gmail.com'));
// Задача-57
// Напишіть функцію, яка приймає число number. Якщо число позитивне і його квадрат парний — поверни "Позитивне парне", якщо негативне і його куб менше -100 — "Сильне негативне", інакше — "Інше".

function task7(number) {}
console.log(task7(1500));

// Задача-58
// Напишіть функцію, яка приймає рядок word. Якщо слово однаково читається зліва направо і справа наліво (паліндром) — поверни "Паліндром", інакше — "Не паліндром".

// function task8(word) {
//   const str = word.split('').reverse().join('');
//   if (str === word) {
//     return 'Паліндром';
//   }
//   return 'Не паліндром';
// }

// console.log(task8('racecar'));

// Задача-59
// Напишіть функцію, яка приймає два числа a і b. Поверни більше число, але якщо вони рівні — поверни їх суму.

// function task9(a, b) {
//   return a >= b ? a : b;
//   // let total = 0;
//   // if (a >= b) {
//   //   total = a + b;
//   // }
//   // return total;
// }
// // console.log(task9(23, 23));
// console.log(task9(23, 25));
// Задача-60
// Напишіть функцію, яка приймає рядок text. Якщо довжина рядка більше 20 — обріж його до 20 символів і додай "...", інакше — поверни як є.

// function task10(text) {
//   console.log(text.length);

//   if (text.length > 20) {
//     const result = text.slice(0, 20);
//     return `${result}...`;
//   }
//   return text;
// }
// console.log(task10('racecarfgjsllkfdjgojhio'));
// Задача-61
// Напишіть функцію, яка приймає рядок str. Якщо рядок починається з великої літери і закінчується крапкою — "Правильне речення", інакше — "Неправильне".

// function task11(str) {
//   const strtoUpperCase = str[0];
//   const strIncludes = str.includes('.');
//   if (strtoUpperCase === str[0] && strIncludes) {
//     return 'Правильне речення';
//   }
//   return 'Неправильне';
// }
// console.log(task11('Hello.'));
// Задача-62
// Напишіть функцію, яка приймає число number. Якщо число більше 0 і менше 100, поверни суму його цифр. Якщо більше 100 — поверни квадрат. Якщо менше 0 — поверни модуль.
// let total = 0;
// function task12(number) {
//   for (let i = 0; i < number; i++) {
//     if (number > 0 && number < 100) {
//       total += i;
//     } else if (number > 100) {
//       total = i ** 2;
//     } else if (number < 0) {
//       return number;
//     }
//   }
//   return total;
// }

// console.log(task12(120));
// Задача-63
// Напишіть функцію, яка приймає рядок text. Замінюй всі пробіли на "-" і поверни результат. Якщо рядок вже містить "-", нічого не змінюй.

// function task13(text) {
//   const result = text.split(' ').join('-');
//   const textIncludes = result.includes('-');
//   if (result) {
//     return result;
//   } else if (textIncludes) {
//     return text;
//   }
// }
// console.log(task13('Hello Hello Hello Hello Hello Hello Hello'));
// // Задача-64
// Напишіть функцію, яка приймає число number. Якщо число парне — поверни його половину, якщо непарне — помнож на 3 і додай 1.

// function task14(number) {
//   let total = 1;
//   total = number / 2;
//   total = number / 3;
//   if (total) {
//     return total;
//   } else if (total) {
//     return (total *= 3);
//   }
//   return (total += 1);
// }
// console.log(task14(20));
// Задача-65
// Напишіть функцію, яка приймає рядок name. Якщо ім’я починається з "A" або "a" і довжина більше 5 — поверни "Спеціальне ім’я", інакше — "Звичайне ім’я".

// function task15(name) {
//   if (name[0] === 'A' || (name[0] === 'a' && name.length > 5)) {
//     return 'Спеціальне ім’я';
//   }
//   return 'Звичайне ім’я';
// }
// console.log(task15('Antons'));

// Задача-66
// Напишіть функцію, яка приймає число number. Якщо число кратне 2 і 3 — поверни їх добуток (2*3), якщо тільки 2 — 2, якщо тільки 3 — 3, інакше — 0.

function task16(number) {}
console.log(task16(12));
// Задача-67
// Напишіть функцію, яка приймає рядок text. Якщо текст повністю у верхньому регістрі — переведи його в нижній, якщо в нижньому — у верхній.
// function task17(text) {
//   if (text.toUpperCase()) {
//     return text.toLowerCase();
//   }
//   return text.toUpperCase();
// }
// console.log(task17('ANTON'));
// Задача-68
// Напишіть функцію, яка приймає число number. Поверни "Fizz", "Buzz", "FizzBuzz" або число, але додай умову: якщо число більше 100 — поверни "Занадто велике".
function task18(number) {}

console.log(task18(150));
// Задача-69
// Напишіть функцію, яка приймає рядок text. Якщо текст містить більше 3 голосних букв — "Багато голосних", інакше — "Мало голосних".

// Задача-70
// Напишіть функцію, яка приймає рядок text. Видали всі цифри з рядка і поверни результат. Якщо цифр немає — поверни без змін.

function task20(text) {
  for (let i = 0; i < text.length; i++) {
    const x = Number(text[i]);
    const resalt = text.indexOf(x);
    const a = text.slice(0, 5);
    const f = text.slice(6, 8);
    const y = text.slice(9);
    const foo = [].concat(a, f, y).join('');

    if (typeof x === 'number') {
      return foo;
    }
    return text;
  }
}

console.log(task20('hello1hf5dd'));
