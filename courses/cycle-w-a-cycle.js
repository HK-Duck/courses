'use strict'
//Цикл а цикле
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

//Распространённая задача: при помощи символа астериеса '*' нарисовать треугольник
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n'
}
console.log(result);

//Как из какого-то внутреннего вложенного цикла сразу остановить, либо перейти к следующей интерации большого\глпаного цикла 
//Цикл и метка
first: for (let i = 0; i < 3; i++) {
        console.log(`First level: ${i}`);
        for (let j = 0; j < 3; j++) {
            console.log(`Second level: ${j}`);
            for (let k = 0; k < 3; k++) {
                // Если k строго ровна 2, то внутренний цикл прекращается и по метке first начинается следующая итерация главного цикла
                if (k === 2) continue first;
                console.log(`Third level: ${k}`);
            }
        }
    }
    //Это так же работает и с break
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}