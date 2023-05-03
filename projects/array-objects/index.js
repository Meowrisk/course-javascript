/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами.
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el)); // выведет каждый элемент массива
 */

function forEach(array, fn) {
  for (const [ix, el] of array.entries()) {
    fn(el, ix, array);
  }
}
forEach([1, 2, 3], (el) => console.log(el));

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами.
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const newArray = map([1, 2, 3], (el) => el ** 2);
   console.log(newArray); // выведет [1, 4, 9]
 */

function map(array, fn) {
  const newArray = [];

  for (const [ix, el] of array.entries()) {
    newArray.push(fn(el, ix, array));
  }

  return newArray;
}

map([1, 2, 3], (el) => console.log(el ** 2));

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами.
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const sum = reduce([1, 2, 3], (all, current) => all + current);
   console.log(sum); // выведет 6
 */
function reduce(array, fn, initial) {
  let startIndex = 0;
  let all = initial;

  if (initial === undefined) {
    startIndex = 1;
    all = array[0];
  }

  for (let i = startIndex; i < array.length; i++) {
    all = fn(all, array[i], i, array);
  }
  return all;
}

reduce([1, 2, 3], (all, current) => all + current);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   const keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
   console.log(keys) // выведет ['NAME', 'LASTNAME']
 */
const person = {
  name: 'Сергей',
  lastName: 'Петров',
};

function upperProps(object) {
  return Object.keys(object).map((key) => key.toUpperCase());
}

upperProps(person);

export { forEach, map, reduce, upperProps };
