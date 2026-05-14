// # Масиви

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function task1(arr){
//     for (const el of arr) {
//         console.log(el);

//     }
// }
// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.

// function task2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.

// function task3(arr) {
//   for (const el of arr) {
//     if (el % 2 === 0) {
//       console.log(el);
//     }
//   }
// }
// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function task3(arr, max) {
//   for (const el of arr) {
//     if (el > max) {
//       console.log(el);
//     }
//   }
// }

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function task4 (arr){
//     let total = 0;
//      for (const el of arr) {
//         total+=el

//      }
//      return total;
// }
// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.

// function task5(arr, str) {
//   let total = 0;
//   for (const el of arr) {
//     if (el === str) {
//       total += el.length;
//     }
//   }
//   return total;
// }

// console.log(task5(['s', 'h', 'o', 'p', 'h', 'h', 'h', 'h', 'h'], 'h'));

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.

// function task6(arr) {
//   let array = [];
//   for (const el of arr) {
//     if (el > 0) {
//       array.push(el);
//     }
//   }
//   return array;
// }
// console.log(task6([-1, 2, 34, -50, 6, 7, -9]));

// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.

// function task7(arr) {
//   for (const el of arr) {
//     if (6 <= el.length) {
//       return el.toLowerCase();
//     }
//     return el.toUpperCase();
//   }
// }
// console.log(task7(['helloj', 'Happyinlav', 'hollidey', 'dayloc']));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.

// function task8(arr) {
//   let array = [];

//   for (const el of arr) {
//     if (el % 2 !== 0) {
//       array.push(el);
//     }
//   }
//   return array;
// }
// console.log(task8([1, 2, 34, 50, 6, 7, 9]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.

// function task9(arr) {
//   let total = 1;
//   for (let i = 0; i < arr.length; i++) {
//     total *= arr[i];
//   }
//   return total;
// }
// console.log(task9([1, 2, 34, 50, 6, 7, 9]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.

// function task10(arr) {
//   let array = [];

//   for (const el of arr) {
//     if (el % 3 === 0) {
//       array.push(el);
//     }
//   }
//   return array;
// }
// console.log(task10([1, 2, 34, 50, 6, 7, 9]));

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function task11(arr1, arr2) {
//   let arr = [];
//   for (const el of arr1) {
//     if (arr2.includes(el)) {
//       arr.push(el);
//     }
//   }
//   return arr;
// }

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function task12(arr1, arr2) {
//   let arr = [];
//   for (const el of arr1) {
//     if (!arr2.includes(el)) {
//       arr.push(el);
//     }
//   }
//   return arr;
// }

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function task13(arr) {
//   let total = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < total) {
//       total = arr[i];
//     }
//   }
//   return total;
// }

// console.log(task13([1, 4, 34, 50, 6, -7, 9]));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function task14(arr) {
//   let total = arr[0];
//   console.log(total);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > total) {
//       total = arr[i];
//     }
//   }
//   return total;
// }

// console.log(task14([1, 4, 34, 50, 6, -7, 9]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.

// function task15(arr) {
//   let total = 0;
//   for (const el of arr) {
//     const foo = (total += el / arr.length);
//     if (foo > el) {
//       return foo;
//     }
//   }
// }
// console.log(task15([80, 30, 50, 25]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// function task16(arr) {
//   let total = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (total > arr[i]) {
//       total = arr[i];
//     }
//   }
//   return total;
// }

// console.log(task16([80, 30, 50, 25]));

// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.

// function task17(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[total]) {
//       total = i;
//     }
//   }
//   arr.splice(total, 1);
//   console.log(arr);
// }

// console.log(task17([80, 30, 50, 25]));
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.

// function task18(start, end) {}

// console.log(task17([80, 30, 50, 25]));

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.

// function task19(arr) {
//   let array = [];
//   for (const el of arr) {
//     if (el % 2 === 0) {
//       array.unshift(el);
//     } else if (el % 2 !== 0) {
//       array.push(el);
//     }
//   }
//   return array;
// }

// console.log(task19([80, 30, 50, 25, 32, 47, 22, 55, 67]));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.

// function task20(arr) {
//   let arr2 = [];
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     arr2.push(total);
//   }
//   return arr2;
// }

// console.log(task20([80, 30, 50, 25, 32, 47, 22, 55, 67]));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.

// function task21(arr) {
//   let mas = [];
//   let total = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       total = arr[i];
//       mas.push(total);
//     }
//   }
//   return mas;
// }
// console.log(task21([1, 2, 2, 3, 4, 4, 5]));
// 1
// . Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// function task22(arr, arr1) {
//   return [].concat(arr, arr1);
// }

// console.log(task22([1, 2, 2, 3, 4, 4, 5], [1, 2, 2, 3, 4, 4, 5]));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.

// function task23(arr) {
//   let mas = [];
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i] / 2;
//     mas.push(total);
//   }
//   return mas;
// }
// console.log(task23([1, 2, 2, 3, 4, 4, 5]));
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.

// function task24(arr) {
//   let array = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     array.push(arr[i]);
//   }
//   return array;
// }

// console.log(task24([1, 2, 2, 3, 4, 4, 5]));
// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.

// function task25(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }

// console.log(task25(['fgsgfdsfh', 'jksf', 'jjjs']));

// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// - [Kata #1](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
