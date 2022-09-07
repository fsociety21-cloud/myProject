"use strict";

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
  count : 0 ,
  movies : {} ,
  actors : [] ,
  genres : [] ,
  privat : true,

  start: function () {
    personalMovieDB.count = +prompt("How many films have you seen yet?");
  
    while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films have you seen yet?");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < personalMovieDB.count; i++) {
      const lastMovie = prompt( `${i+1} One of the last film which did you see?` ),
            rateLastMovie = +prompt( `${i+1} How would you rate first movie?` );
    
      if (lastMovie != null && lastMovie != "" && rateLastMovie != null && rateLastMovie != "" && lastMovie.length < 50 ) {
        personalMovieDB.movies[lastMovie] = rateLastMovie;
        console.log("Done!");
      } else {
        console.log("Error!");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка") ;
    }
  },

  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("Nothing...");
    }
  },

  writeYourGenres: function () {

    for(let i = 0; i < personalMovieDB.count; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
      if (genre !== null || genre !== "" ) {
        personalMovieDB.genres[i] = genre;
      } else {
        console.log("Empty field. Return. Error!!!");
        i--;
      }
    }

    // Альтернативный вариант 
    // for(let i = 0; i < 1; i++) {
    //   let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

    //   if (genres !== null || genres !== "" ) {
    //     personalMovieDB.genres = genres.split(", ");
    //     personalMovieDB.genres.sort();
    //   } else {
    //     console.log("Empty field. Return. Error!!!");
    //     i--;
    //   }
    // }

    personalMovieDB.genres.forEach( function(element, item) {
      console.log(`Любимый жанр ${item+1} - это ${element}`);
    });
  }, 

  toggleVisibleMyDB: function () {
    return personalMovieDB.privat === true ? personalMovieDB.privat = false : personalMovieDB.privat = true;
  }

};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

