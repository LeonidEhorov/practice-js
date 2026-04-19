// # Розгалуження та булеві оператори

// ## Задачі

// ```
// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```
// function task1(age, balance) {
//   const isAdult = age > 18;
//   const isPositiveBalance = balance > 100;
//   if (isAdult && isPositiveBalance) {
//     return 'Wellcome';
//   }
//   return 'Goodbye';
// }
// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".
// ```
// function task2(amount,price){
//     let total =amount*price;;
//    if(total<1000){
//     return "Ми це купуємо" ;
//    }
//    return "Це занадто дорого";
// }
// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```
// function task3(temp){
//    if(temp<0){
//     return "Замерзає"
//    }else if(temp<25){
//     return "Нормальна температура"
//    }
//    return "Спекотно";

// }
// ```
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".
// ```

// ```
// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".
// ```

// ```
// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".
// ```

// ```
// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".
// ```
// function task7( dayOfWeek,isHoliday){

//     if(dayOfWeek === "Saturday" || dayOfWeek=== "Sunday" || isHoliday){
//         return "Вихідний"
//     }
//     return "Робочий день"
// }

// task7('mondea',false)
// ```
// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".
// ```
function task8(year) {}
// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".
// ```
function task9(hasInvitation, isFriend) {
  if (hasInvitation === isFriend) {
    return 'Ви запрошені';
  }
  return 'Вхід заборонено';
}
// ```
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".
// ```
function task10(age) {
  if (age < 12) {
    return 'Дитина';
  } else if (age > 12 && age > 18) {
    return 'Підліток';
  } else if (age > 18 && age > 60) {
    return 'Дорослий';
  }
  return 'Пенсіонер';
}
// ```
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".
// ```

function task11(isLoggedIn, hasAdminRights) {
  if (isLoggedIn === hasAdminRights) {
    return 'Адмін-сторінка';
  } else if (isLoggedIn !== hasAdminRights) {
    return 'Користувач';
  }
  return 'Гість';
}
// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
// ```
function task12(speed) {
  if (speed < 60) {
    return 'Безпечно';
  } else if (speed < 60 || speed > 100) {
    return 'Увага';
  }
  return 'Небезпечно';
}
// ```
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```

function task13(time, isWeekend) {
  if (time < 12 || !isWeekend) {
    return 'Ранок буднього дня';
  } else if (time > 12 || time < 18 || isWeekend) {
    return 'День вихідного дня';
  }
  return 'Вечір';
}
// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```

function task14(hasGlutenAllergy, containsGluten) {
  if (hasGlutenAllergy !== containsGluten) {
    return 'Не можна їсти';
  }
  return 'Можна їсти';
}

// ```
// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".
// ```

function task15(age) {
  return age < 18 && age > 18
    ? 'Не можна купувати алкоголь'
    : 'Можна купувати алкоголь';
}
// ```
// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
// ```
function task16(isSunny) {
  return !isSunny ? 'Вийдемо на прогулянку' : 'Залишимося вдома';
}

// ```
// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".
// ```
function task17(number) {
  if (number % 2 === 0) {
    return 'Парне';
  }
  return 'Непарне';
}
// ```
// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".
// ```

function task18(password, confirmPassword) {
  return password === confirmPassword
    ? 'Паролі збігаються'
    : 'Паролі не збігаються';
}
// ```
// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
// ```
function task19(temperature) {
  if (temperature < 0) {
    return 'Зима';
  } else if (temperature < 0 || temperature > 15) {
    return 'Весна';
  } else if (temperature > 16 || temperature > 25) {
    return 'Літо';
  }
  return 'Осінь';
}
// ```
// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".
// ```
function task20(number1, number2) {
  if (number1 >= number2) {
    return 'Перше більше';
  } else if (number1 <= number2) {
    return 'Перше менше';
  }
  return 'Рівні';
}
// ```
// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".
// ```
function task21(isBatteryFull) {
  return !isBatteryFull ? 'Не потрібно заряджати' : 'Заряджати';
}
// ---

// ```
// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".
// ```
function task22(isStudent, hasID) {
  if (!isStudent || !hasID) {
    return 'Вхід заборонено';
  }
  return 'Вхід дозволено';
}

// ```
// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".
// ```
function task23(temperature, isRaining) {
  if (temperature > 0 || !isRaining) {
    return 'Потрібно носити теплий одяг';
  }
  return 'Легка одяг';
}
// ```
// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".
// ```
function task24(hasCar, hasLicense) {
  return !hasCar === !hasLicense ? 'Можете водити машину' : 'Водити заборонено';
}

// ```
// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".
// ```

function task25(age, hasParentConsent) {
  if (age < 18 || !hasParentConsent) {
    return 'Доступ заборонено';
  }
  return 'Доступ дозволено';
}

// ```
// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```

function task26(isVegetarian, containsMeat) {
  return isVegetarian !== containsMeat ? 'Не можна їсти' : 'Можна їсти';
}

// ```
// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".
// ```
function task27(hoursWorked, overtime) {
  if (hoursWorked > 40 || overtime) {
    return 'Отримуєте бонус';
  }
  return 'Без бонусу';
}

// ```
// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".
// ```

function task28(number, isPositive) {
  if (number > 0 || isPositive === true) {
    return 'Це позитивне число';
  }
  return 'Це не позитивне число';
}

// ```
// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".
// ```
function task29(temperature, isSunny) {
  if (temperature > 20 || isSunny) {
    return 'Час для прогулянки';
  }
  return 'Залишимося вдома';
}

// ```
// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
// ```
function task30(weight, height) {
  if (weight > 100 || height < 150) {
    return 'Перевищено допустимий ліміт';
  }
  return 'У межах норми';
}

// ```
// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".
// ```

function task31(year, isLeapYear) {
  if (year % 4 || isLeapYear) {
    return 'Це високосний рік';
  }
  return 'Звичайний рік';
}

// ```
// Задача-32
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка".
// ```

function task32(age, isStudent, isSeniorCitizen) {
  if (
    (age < 18 && isStudent === 'студентом' && age > 65) ||
    isStudent === ' пенсіонером' ||
    isSeniorCitizen
  ) {
    return 'Знижка на квиток';
  }
  return 'Повна вартість квитка';
}

// ```
// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
// ```
function task33(temperature, isRaining, hasUmbrella) {
  if ((temperature > 25 && isRaining) || hasUmbrella) {
    return 'Візьміть парасолю та одягніться легше';
  } else if (!hasUmbrella) {
    return 'Залишайтеся вдома';
  }
  return 'Виходьте на прогулянку';
}

// ```
// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".
// ```

function task34(isMember, hasCoupon, purchaseAmount) {
  if ((isMember && hasCoupon) || purchaseAmount > 100) {
    return 'Отримаєте знижку';
  }
  return 'Знижка не доступна';
}

// ```
// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
// ```
function task35(password, confirmPassword) {
  for (const el of confirmPassword) {
    const result = password.includes(el);
    if (result) {
      return 'Пароль прийнято';
    }
    return 'Пароль не відповідає вимогам';
  }
}

// ```
// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".
// ```

function task36(isOnline, hasCamera, hasMicrophone) {
  return isOnline || (hasCamera && hasMicrophone)
    ? 'Готові до відеоконференції'
    : 'Немає можливості для відеоконференції';
}

// ```
// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".
// ```

function task37(currentTime, isWeekend, isHoliday) {
  return currentTime > 8 || !isWeekend || !isHoliday
    ? 'Скоро час на роботу'
    : 'Вільний час';
}

// ```
// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".
// ```

function task38(temperature, isSnowing, hasHeater) {
  if ((temperature < 0 && isSnowing) || hasHeater) {
    return 'Тепло та затишно';
  } else if (!hasHeater) {
    return 'Потрібно зігрітися';
  }
  return 'Погода нормальна';
}

// ```
// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".
// ```
function task39(age, hasDriverLicense, isInsured) {
  return (age > 18 && hasDriverLicense) || isInsured
    ? 'Можна керувати автомобілем'
    : 'Не можна керувати автомобілем';
}

// ```
// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
// ```

function task40(currentDay, hasMeeting, isHoliday) {
  return (currentDay && hasMeeting) || !isHoliday
    ? 'Є зустріч'
    : 'Немає зустрічі';
}

// ```
// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
// ```
function task41(itemPrice, isDiscounted, discountAmount) {
  return itemPrice > 1000 || isDiscounted || discountAmount
    ? 'Скидка доступна'
    : 'Скидка не доступна';
}

// ---

// ```
// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
// ```

function task42(dayOfWeek) {
  const day = dayOfWeek;
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    default:
      console.log('Невідомий день');
  }
}

// ```
// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
// ```
function task43(grade) {
  const da = grade;
  switch (da) {
    case 'A':
      console.log('Відмінно');
      break;
    case 'B':
      console.log('Добре');
      break;
    case 'C':
      console.log('Задовільно');
      break;
    case 'D':
      console.log('Незадовільно');
      break;
    case 'F':
      console.log('Незадовільно');
      break;
    default:
      console.log(1);
  }
}

// ```
// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
// ```

function task44(fruit) {
  const isFruit = fruit;
  switch (isFruit) {
    case 'Цитрус':
      console.log('Відмінно');
      break;
    case 'Яблуко':
      console.log('Добре');
      break;
    case 'Груша':
      console.log('Задовільно');
      break;
    case 'Ягода':
      console.log('Незадовільно');
      break;
    default:
      console.log(1);
  }
}

// ```
// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".

function task45(vehicleType) {
  const isCar = vehicleType;
  switch (isCar) {
    case 'Car':
      console.log('Легковий автомобіль');
      break;
    case 'Truck':
      console.log('Вантажівка');
      break;
    case 'Motorcycle':
      console.log('Мотоцикл');
      break;
    default:
      console.log('Інше');
  }
}

// ```

// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи
// switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від
// введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб",
// "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка",
// "Черепаха", "Змія" - "Рептилія".

function task46(animal) {
  const isAnimal = animal;
  switch (isAnimal) {
    case 'Рептилія':
      console.log('Черепаха', 'Змія', 'Ящірка');
      break;
    case 'Птах':
      console.log('Голуб', 'Орлан', 'Горобець');
      break;
    case 'Риба':
      console.log('Лосось', 'Тунець', 'Тріска');
      break;
    default:
      console.log('Інше');
  }
}

// ```
// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
// ```

function task47(weather) {
  const isWeather = weather;
  switch (isWeather) {
    case 'Sunny':
      console.log('Сонячно');
      break;
    case 'Cloudy':
      console.log('Хмарно');
      break;
    case 'Rainy':
      console.log('Дощ');
      break;
    case 'Snowy':
      console.log('Сніг');
      break;
    default:
      console.log('Інше');
  }
}

// ```
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
// ```

function task48(mood) {
  const isMood = mood;
  switch (isMood) {
    case 'Happy':
      console.log('Щасливий');
      break;
    case 'Sad':
      console.log('Сумний');
      break;
    case 'Angry':
      console.log('Злий');
      break;
    case 'Surprised':
      console.log('Здивований');
      break;
    default:
      console.log('Інше');
  }
}

// ```
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
// ```

function task49(month) {
  const isMonth = month;
  switch (isMonth) {
    case 'Весна':
      console.log('Березень', 'Квітень', 'Травень' - 'Весна');
      break;
    case 'Літо':
      console.log('Червень', 'Липень', 'Серпень' - 'Літо');
      break;
    case 'Осінь':
      console.log('Вересень', 'Жовтень', 'Листопад' - 'Осінь');
      break;
    case 'Зима':
      console.log('Грудень', 'Січень', 'Лютий' - 'Зима');
      break;
    default:
      console.log('Інше');
  }
}

// ```
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
// ```

function task50(color) {
  const maiColor = color;
  switch (maiColor) {
    case 'Теплий колір':
      console.log('Red', 'Orange', 'Yellow');
      break;
    case 'Холодний колір':
      console.log('Blue', 'Green', 'Purple');
      break;
    default:
      console.log('Інше');
  }
}

// ```
// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".
// ```
function task51(continent) {
  const isContinent = continent;
  switch (isContinent) {
    case 'Africa':
      console.log('Africa');
      break;
    case 'Europe':
      console.log('Europe');
      break;
    case 'Asia':
      console.log('Asia');
      break;
    case 'North America':
      console.log('North America');
      break;
    case 'South America':
      console.log('South America');
      break;
    case 'Antarctica':
      console.log('Antarctica');
      break;
    case 'Australia':
      console.log('Australia');
      break;
    default:
      console.log('Невідомий континент');
  }
}

// ---

// ## Task 1

// Яким буде результат виразів?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// ```js
// console.log(1 && 5); 5
// console.log(5 && 1); 1
// console.log(0 && 2); 0
// console.log(2 && 0); 2
// console.log('' && 'Mango'); ''
// console.log('Mango' && '');' Mango'
// console.log('Mango' && 'Poly'); 'Poly'
// console.log('Poly' && 'Mango'); 'Mango'
// ```

// ```js
// console.log(true || false); true
// console.log(false || true); true
// console.log(true || true); 1 true

// console.log(3 || false); 3
// console.log(false || 3); false
// console.log(3 || true); 3
// console.log(true || 3); true
// ```

// ```js
// console.log(!true); false
// console.log(!false); true
// console.log(!3); false
// console.log(!'Mango'); false
// console.log(!0); true
// console.log(!''); true

// const isOnline = true;
// const isNotOnline = !isOnline; false

// console.log(true && false); false
// console.log(false && true); false
// console.log(true && true);  2 true
// console.log(false && false);  1 false

// console.log(true || false); true
// console.log(false || true); true
// console.log(true || true); 2 true
// console.log(false || false); 2 false

// console.log(!true); false
// console.log(!false); true
// console.log(!!true); 1
// console.log(!!false); 0

// console.log(1 === 1 && 2 === 2); true
// console.log(1 === 2 && 2 === 2); false
// console.log(1 === 1 || 2 === 2); true
// console.log(1 === 2 || 2 === 2); true

// console.log(1 > 2 && 2 < 3); true
// console.log(1 < 2 && 2 < 3); true
// console.log(1 > 2 || 2 < 3); false
// console.log(1 < 2 || 2 < 3); fale

// console.log(0 && 3); false
// console.log(3 && 0); true
// console.log(0 || 3); false
// console.log(3 || 0); true

// console.log('' || 'apple'); 'apple'
// console.log('orange' || ''); ''
// console.log('' && 'banana'); ''
// console.log('grape' && ''); 'grape'

// console.log(0 || false); false
// console.log(false || 0); 0
// console.log(1 && 'cherry');  'cherry'
// console.log('banana' && 1); 1
// console.log(null && 'pear'); null
// console.log('peach' && undefined);'peach'
// console.log(undefined || 'plum'); undefined
// console.log('melon' || null); 'melon'
// console.log(undefined && false); false
// console.log(true || 'watermelon'); true
// console.log('watermelon' || true); 'watermelon'
// console.log(false && 'pineapple'); false
// console.log('pineapple' && false); false
// console.log(NaN || 'kiwi'); 'kiwi'
// console.log('kiwi' || NaN);  NaN
// console.log(NaN && 'mango'); NaN
// console.log('mango' && NaN); 'mango'
// console.log(Infinity || 'apricot'); apricot'
// console.log('apricot' || Infinity);  Infinity)
// console.log(Infinity && 'blueberry'); Infinity
// console.log('blueberry' && Infinity); 'blueberry'
// console.log(null || undefined);  undefined
// ```

// ---

// ## Codewars

// 1. [Kata](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
// 1. [Kata](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)
// 1. [Kata](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript)
