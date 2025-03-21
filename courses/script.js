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


//Логический оператор И - &&
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));
//Результат логических операций - какое-то логическое булевое значение

const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));
//В этом примере в первом выводе ничего не отобразится, а во втором получим false 
//При значении null или undefined будет false
//!!!5 сужностей в js которые всегда будут false: 
// 0, пустая строка не с пробелом внутри (''), null, undefined, NaN 
// Всё остальное всегда будет true!!!

const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries));

//Другой пример
//Задача: Мы с 2 друзьями пришли в заведение - все хотят съесть по гамборгеру и только я хочу картошку.
const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
    //Здесь можно написать просто fries или же fries === 1 - обе формы записи верные так как мы сравниваем с 1
    //Потому что не важно сколько у нас будет картошки (f>0) - они всё равно дадут логическую праваду, тк нам нужна только 1
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}
//!!!Как только логический оператор И натыкается на ложь - он сразу прекращает свою работу!!!
//Ему нет смысла проводить вычисления дальше

//Усложним задачу
//Наш друг дополнительно хочет колу, которой нет
const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 && cola === 1 && fries) {
    //Здесь можно написать просто fries или же fries === 1 - обе формы записи верные так как мы сравниваем с 1
    //Потому что не важно сколько у нас будет картошки (f>0) - они всё равно дадут логическую праваду, тк нам нужна только 1
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


//Самый сложный момент в логических операторах
const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);
//В этом случае в консоли получим значение 0
//Когда логические операторы работают со значениями, то они будут возвращать сами значения, с которыми работают!

if (hamburger === 3 && cola === 1 && fries) {
    //Здесь можно написать просто fries или же fries === 1 - обе формы записи верные так как мы сравниваем с 1
    //Потому что не важно сколько у нас будет картошки (f>0) - они всё равно дадут логическую праваду, тк нам нужна только 1
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


//Продолжение
const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);
//В этом случае в консоли получим значение 0
//Когда все значения аргументов правдивые, оператор вернёт последнее значение, на котором он сработал

if (hamburger === 3 && cola === 1 && fries) {
    //Здесь можно написать просто fries или же fries === 1 - обе формы записи верные так как мы сравниваем с 1
    //Потому что не важно сколько у нас будет картошки (f>0) - они всё равно дадут логическую праваду, тк нам нужна только 1
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


//Ещё больше примеров
const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
//Здесь получаем 0 в консоль, потому что логический оператор запнулся на нём
console.log(1 && 5);
//Здесь сравниваются 2 правдивые части. Мы получим true, но в консоли получим 5 - последние значение, которое было в выражении
console.log(null && 5);
//Сравниваем "не правду" (null - ниего) и 5. В консоли получим null - первое не правдивое выражение
console.log(0 && 'любая строка');
//Здесь мы тоже получим 0, потому что оператор запнулся на первом не правдивом значении
//Когда идёт работа оператора "И", то при положительном исходе он говорит "Всё в порядке, об аргумента правдивы"
//И сделать он это может не только отдав true, но и отдав какое-то значение, которое в логическом контексте true

//Оператор И - запинается на лжи; ИЛИ - запинается на правде.

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}


//Логический оператор ИЛИ - ||
//Оператор И - запинается на лжи; ИЛИ - запинается на правде.
//Задача: Мы встречаемся с друзьями в заведении пообщаться, а еда отходит на второй план.
//Чтобы официально посидеть в заведении нужно чтобы было хоть что-то. (Или то, или то, или то.)
const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим.');
}
//!!!Как только оператор ИЛИ находит правду, то он переастаёт работать, потому что  как только он находит правду дальше ему нет смысла выполнять операции!!!
//Когда правда будет найдена, то значение будет возвращено
//!!!Если всё не правда, то возвращается последнее ложное значение!!!
//Пример:
const hamburger = 0;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим.');
}

console.log(hamburger || cola || fries);
//В консоли получим 0 - последнее ложное значение
//Чтобы в этом убедиться изменим занчение в fries = null
const hamburger = 0;
const fries = null;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим.');
}

console.log(hamburger || cola || fries);
//Получаем null
//Такие манипуляции удобны когда у нас есть разные данные и нам необходио найти, что хотя бы одни из них содержат информацию

//Например: Нам необходимо как можно скорее сдать 4 отчёта от разных людей.
let johnReport, alexReport, samReport, mariaReport = 'done';
//В логическом ключе: здесь будет правда, потому что в этой переменной хоть что-то есть
//В данном случае это строка
//Напишем функционал которой будет сообщать о том, что уже хоть что-то сделано

console.log(johnReport || alexReport || samReport || mariaReport);
//Получим done

//Комбинации операторов
//Задача: Мы идём в заведение с друзьями и нам необходимо чтобы было: 
// или 3 гамбургера и 2 колы,
// или 3 картошки фри и 1 порция нагетсов.
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим.');
}
//Получим Все довольны!

//Чтобы понимать как эти операции будут выполнены и что мы получим 
//Необходимо обратиться к таблице приоритетов операторов

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
//Получим Все довольны! 2: потому что выполнилось одно из условий и логический оператор ИЛИ вернул первую правду
console.log(hamburger === 3 && cola === 2);
//Получим false


//Оператор НЕ - !
let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);
//Этот оператор работает то, что сначала превращает аргумент, к кор применён в лог-й тип данных
//В данном случае 0-не правда станет правдой

console.log(Nan || 2 || undefined);
console.log(1 && 2 && 3);
console.log(1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
} else {
    console.log('Empty');
}