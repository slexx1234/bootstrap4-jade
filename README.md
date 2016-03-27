bootstrap4-jade
========================================

Это библитека [bootstrap 4](https://github.com/twbs/bootstrap/tree/v4-dev) примесей для шаблонизатора [jade](http://jade-lang.com/).

### Установка

* Установка через [bower](http://bower.io/): `bower install bootstrap4-jade`
* Установка через [npm](https://www.npmjs.com/): `npm install bootstrap4-jade`
* Вы всегда можете скачать [последнюю версию](https://github.com/Alex5646/bootstrap4-jade/archive/master.zip).

### Бастрое начало
Подключаем библиотеку `bower_components/bootstrap4-jade/src/_mixins.jade`.
Потом необходимо подключить bootstrap 4.

```jade
+css('Путь к стилям')
+js('Путь к скриптам')
```
Хочу обратить внимание что не нужно писать расширения файла.

Вы можете подключить bootstrap через CDN:

```jade
+bootstrap-css-cdn
+bootstrap-js-cdn
//- Возможно нам ещё понадобятся иконки
+font-awesome-cdn
```
Миксин `bootstrap-js-cdn`, подключит нам bootstrap и две зависимости jquery и tether.

### Hello World!

```jade
doctype html
html(lang="en")
    +head
        +bootstrap-css-cdn
    body
        h1 Hello, world!
        
        +jquery-cdn
        +tether-cdn
        +bootstrap-js-cdn
```

На выходе мы получим:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/tether/1.2.0/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
  </body>
</html>
```
Довольно сильно сокращает код, не так ли? И это ещё не всё...

#### На последок
Я только начал заниматься разработкой этой библиотеки, и её пока не стоит использовать.
Но всё же можно, к каждому миксину достаточно комментариев. Вскрывайте, читайте, пользуйтесь.
А попозже я напишу документацию к коду.

Скачиваем библиотеку и смотрим примеры страниц. 
* Исходники в папке documentation/src/templates/
* Html в documentation/templates/
