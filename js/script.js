"use strict";

const numberOfFilms = +prompt("How many films have you seen yet?", "5"),
      personalMovieDB = {

    count : numberOfFilms ,
    movies : {} ,
    actors : [] ,
    genres : [] ,
    privat : false

};

const firstMovie = prompt("One of the last film which did you see?", "Logan"),
      secondMovie = prompt("One of the last film which did you see?", "Lucie"),
      rateFirstMovie = prompt("How would you rate first movie?", "1"),
      rateSecondMovie = prompt("How would you rate second movie?", "1");

  personalMovieDB.movies[firstMovie] = rateFirstMovie;
  personalMovieDB.movies[secondMovie] = rateSecondMovie;
  
  console.log(personalMovieDB);


