// # Масиви та методи рядкочків

// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// let total = 0;
// for (let i = 1; i <= 100; i++) {
//   total += i;
// }
// console.log(total);
// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).

// for (let i = 1; i < 10; i++) {
//   console.log(`${7}*${i}=${i * 7}`);
// }
// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).
// let total = 1;
// for (let i = 1; i <= 5; i++) {
//   total *= i;
// }
// console.log(total);

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     console.log(str[i]);
//   }
// }

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.

// const str = 'Hello world';

// for (let i = 1; i <= str.length; i++) {
//   console.log(str[str.length - i]);
// }

// for (let i = str.length - 1; i > 0; i--) {
//   console.log(str[i]);
// }
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ' ') break;
//   console.log(str[i]);
// }

// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const str = 'JavaScript';

// for (let i = 0; i <= str.length; i++) {
//   if (i % 2 === 0) {
//     console.log(str[i]);
//   }
// }

// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок

// function task1() {
//   const foo = 'JavaScript';
//   for (let i = foo.length - 1; i >= 0; i--) {
//     console.log(foo[i]);
//   }
// }
// task1();
// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі

// function task2(str) {
//   for (let i = 0; i <= str.length; i++) {
//     if (i % 2 === 0) {
//       console.log(str[i].toUpperCase());
//     }
//     console.log(str[i]);
//   }
// }
// console.log(task2('javascript'));

// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.

// function getString(str1, str2, count) {
//   for (let i = 0; i < count; i++) {
//     console.log((str2 += str1));
//   }
// }

// console.log(getString('yello', 'den', 10));
