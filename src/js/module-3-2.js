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
//     return typeof arguments[i] === 'number' ? true : false;
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
