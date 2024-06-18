"use strict";
//эта деректива говорит что мы работаем в современном режиме

a = 15;
console.log(a);

let number = 5;
const LeftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 10;

console.log(obj);
// прямых констант в js не бывает

// старое объявление переменных и его проблемы
console.log(name);
var name = 'Ivan'; 
// в своём коде его нельзя использовать
name = 'Alex';

{
    let result = 50;
}

console.log(result);
//новый стандарт не поддерживается в старых версиях браузера, проверить это можно на сайте caniuse.com
