"use strict";

if (6 == 6) {
    console.log('True');
} else {
    console.log('false');
}

//
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

//тернарный оператор - потому что в его работе чуствуют 3 аргумента
const nUm = 50;
//условие        если верно            если не верно
(nUm === 50) ? console.log('Ok!'): console.log('Error');

//
const nuM = 50;
//констурция switch всегда идёт на строгое сравнение, в отличие от облычных условий
//Со строками работает так же '50'
switch (nuM) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}