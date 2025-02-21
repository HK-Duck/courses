"use strict"

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +" - object");
//result - Nan, потому что мы вторую строку преобразовали в число
console.log(4 + +"5");
//result - 9, потому что мы строку 5 преобразовали в число
// знак + перед типом данный строка преобразовывает их в число
// +"5" - так плюс называется унарным, тк исп 1 аргмент для своей работы

//Инкремент и декремент
let incr = 10,
    derc = 10;

incr++;
//оператор инкремента, те увеличение на единицу
decr--;
//оператор декремента, те уменьшение на единицу
//постфиксная форма записи

console.log(incr);
//result - 11
console.log(decr);
//result - 9

let incr = 10,
    decr = 10;

++incr;
--decr;
//префиксная форма записи
console.log(incr);
console.log(decr);

let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(incr++);
console.log(decr--);
//постфиксная форма сначала возвращает старое значение, а после этого увеличиывет или уменьшает 
//сразу при использовании команды!Т.е. мы просим показать и тут же изменить
console.log(++incr);
console.log(--decr);
//с исп префиксной формы мы сразу видим изменения в переменных - 11 и 9

console.log(5%2);
//result - 1, оператор % возвращает остаток от деления двух чисел
//взяли 5, разделили на 2 на столько на сколько возможно, и в остатке получили 1

// = - команда присваивания
// == - команда сравнения
console.log(2*4 == 8);
//result - true
//в примере идёт сравнение по значению, не по типу данных
console.log(2*4 == '8');
//получим тот же результат

//=== - строгое равенство, исп для сравнения ещё и по типу данных
console.log(2*4 === '8');
//result - false
console.log(2*4 === 8);
//result - true

//&& - логический оператор "И", два амперсанта
//оператор "и" работает, когда у нас 2 либо более подобных являются правдивыми выражениями
//Например: и это правда, и это правда
//|| - логический оператор "ИЛИ", две вертикальные черты
//оператор или работает когда хотя бы один - правда
//Например: или это правда, или это правда...

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);
//в рил проекте здесь (isChecked) мы можем проверить, что какая-то галочка\чек-бокс отмечен(а)
//а здесь (isClose), что какое-то модельное окно\рекламный блок у нас закрыт
//если оба верны, то мы будем что-то делать
//result - true

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
//result - false

const isChecked = true,
      isClose = false;

console.log(isChecked || isClose);
//result - true, те у нас на сайте отмечена галочка или модельное окно закрыто; одно из условий выполняется

const isChecked = true,
isClose = true;

console.log(isChecked || isClose);
//result - true

const isChecked = false,
isClose = false;

console.log(isChecked || isClose);
//result - false
//эти два оператоа часто используются на практике

//! - оператор отрицания, обращает значение в обратное (была правда, стала ложь)
const isChecked = false,
isClose = false;

console.log(isChecked || !isClose);
//result - true

//Порядок выполнения операторов
console.log(2 + 2 * 2 === 8);
//result - false
//Здесь сначала выполняется умножение, а далее сложение: 6 не равно 8
//Таблица операторов - инф о том, какие операторы будут вып сначала, а какие после

console.log(2 + 2 * 2 != 8);
//такой оператор "!=" переводиться как не равен
//result - true: потому что 6 не равно 8

console.log(2 + 2 * 2 !== '6');
//строгое сравнение по типу
//result - true