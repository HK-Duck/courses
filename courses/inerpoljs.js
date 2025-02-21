"use strict"
//Интерполяция
const category = 'toys';

console.log('https://someurl.com/' + category);
//Старый стандарт
console.log('https://someurl.com/' + category + '/' + '4');
//Разрастание строки в старом стандарте. Не красиво и не удоблно
//конкатинация строк - берём кусочек строки и приклеиваем к нему значение переменной (ещё один кусочек строки)
console.log(`https://someurl.com/${category}/5`);
//В приёме интерполяции используются бэктики(косые ковычки), затем знак $ и {}, в который указывается название переменной
//Пример:
const user = 'Helena';

alert(`Привет, ${user}`);