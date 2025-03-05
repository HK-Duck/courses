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

  const vehicleBodyWidth = 5000; //правильное название переменных в большом коде
  const vehicleBodyLength = 4000; //слово обозначающее название переменных одного объекта должно быть одним и тем же 
  //const vehicleBodyWidth = 5000;
  //const carBodyLength = 4000; - не правильный вариант названия переменных одного объекта

  ////какой-то большой кусок кода

  console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);
  //при использовании таких названий переменных выполняемые с ними действия будут понятны даже
  //если функция будет находится спустя 100-и строк кода


  // snake_case - один из вариантов названияя файлов и папок в js, но не переменных
  // UPPER_SNAKE_CASE - чаще всего обзначаются переменне, которые хотят видеть в виде констант: их нельзя изменять
  // Kebab-case 
  // PascalCase - названия классов в js


  const COLOR_RED = '#F00'; //значение этой переменной ни в коем случае нельзя изменять
  let COLOR_BLUE = '#F00'; //значение этой переменной ни в коем случае нельзя изменять

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/'; // смысл тот же, руками не трогать
  // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
  const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df'; // смысл тот же, руками не трогать

  //НАЗЫВАЙ ПЕРЕМЕННЫЕ ПРАВИЛЬНО И ОСОЗНАННО


  //Типы данных в JS
  //Простые типы (примитивы):
  //Числа 1,2,3 - есть ограничение по использованию до 2^53
  //Строки 'string', 'name'
  //Логический тип (boolean): true/false
  //null - не существует
  //undefined - существует, но значения нет (пустой холодильник)
  //Symbol 
  //BigInt - большиче числа; для работы с числами большими чем 2^53


  //Объекты (комплексные):
  //Специальные объекты: и Обычные объекты:
  //Массивы [] - частный случай объекта
  //Функции function
  //Объект Даты
  //Регулярные выражения
  //Ошибки

  let nuMber = 4.6;

  console.log(-4 / 0); //- Infinity(+-)
  console.log('string' * 9); //- NaN(Not and Number)

  const persone = "Alex";

  const bool = true;

  console.log(something);
  null //выводится сообщение о том, что переменная не существует

  let und; //создали пустую коробку
  console.log(und); //получаем значение undefiend 


  const obj = {
      nAme: 'John', //свойства объекта, то как мы можем описать эту структуру
      age: 25, //свойства в виде ключ: значение
      isMarried: false //в свойствах могут быть любые типы данных
  };

  //console.log(obj.nAme); Взаимодействовать с объектом можно через . или []
  console.log(obj["nAme"]);


  //            0            1        2       3        4    5
  let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
      []
  ];
  console.log(arr[1]);
  //в массиве парой ключ: значение являютсе порядковый номер: значение
  // 0: plum.png - поэтому массивы частный случай объекта



  //Разница между Массивами и Объектами 

  const aRr = ['a', 'b', 'c']; //массив - перечень информации по порядку, порядок имеет роль
  const arrObj = {
      a: a,
      '1': b,
      2: c
  }

  console.log(aRr[1]);
  console.log(arrObj[1]);
  //через [] обращаться надёжнее, тк через . если название ключа начинается с цифры, то бдет ошибка.

  //const oBj = {a: 1, b: 2}; //объект, структура хранения данных в парном формате ключ: значение
  const oBj = {
      Anna: 500,
      'Alice': 800
  };

  //['Anna', 500, 'Alice', 800]


  //Ниже моё решене задания из курса: 
  //1. Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
  //2. Создайте объект под названием storeDescription
  //3. Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
  //4. Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
  //5. Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.
  //6. Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым
  const storeName = 'FoBo';

  const storeDescription = {
      budget: 10000,
      employees: ['Anna', 'Jeck', 'Sophie'],
      products: {
          'been': 150,
          'flo': 230

      },
      open: true
  }

  alert('Hello');
  //предупреждение пользователя через застиленное модельное окно в браузере

  const result = confirm("Are you here?");
  //в браузере отобразится модельное окно с вариантами ответа типа "да\нет(отмена\ок)"
  //выбранный юзером  вариант ответа будет записан в переменную и его можно получить через console.log в девтулс в консоли

  const answer = promt("Вам есть 18?", "");
  //модельное окно, в котором пользователь может указать свой ответ\вторые кавычки обязательны! (ответ юзера так же можно посмотреть в консоли в девтулс)
  //вся информация от пользователя будет приходить в виде строк
  console.log(typeof(answer));
  //typeof - оператор для определения типа данных в переменной
  //prompt - задать вопрос юзеру
  //+promt - преобразование полученный данных от юзера из строки в число

  const answers = [];

  answers[0] = prompt('Как ваше имя?', '');
  answers[1] = prompt('Как ваша фамилия?', '');
  answers[2] = prompt('Сколько вам лет?', '');
  //юзеру по порядку будут заданы вопрпосы, а полученные ответы будут записаны в массив согласно нумерации
  document.write(answers);
  //тестовая команда для проверки записи данных в массив (в рил проектах не используется)
  //может вводиться в консоли в среде разработки и в консоли в браузере
  //полностью замещает весь контент на странице
  //команды promt, alert, confirm блокируют построение страницы до того как они будут выполнены, т.е. мы что-то вводим и после этого начинает формироваться страница
  console.log(typeof(answers));
  //узнаём тип данных в переменной answers
  //Массив не отдельный тип данных! Это частный случай объекта
  //promt, alert, confirm - существуют только внутри браузера и только там тестируются 

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