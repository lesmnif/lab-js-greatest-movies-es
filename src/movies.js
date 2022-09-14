const movies = require('./data.js');

console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  return rawList
    .filter((director, index) => rawList.indexOf(director) === index)
    .sort();
}
console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSpilberg = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  return moviesSpilberg.filter((movie) => movie.genre.includes('Drama'));
}
console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return (
    moviesArray.reduce((totalSum, currentValue) => {
      return totalSum + currentValue.score;
    }, 0) / moviesArray.length
  ).toFixed(2);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  return (
    dramaMovies.reduce((totalSum, currentValue) => {
      return totalSum + currentValue.score;
    }, 0) / dramaMovies.length
  ).toFixed(2);
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.sort((movieA, movieB) => {
    return movieA.year - movieB.year;
  });
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
    .slice(0, 20);
}

console.log('this is my order', orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const newMovieObject = { ...movie };
    newMovieObject.duration = `${
      newMovieObject.duration[0] * 60 +
      parseInt(
        newMovieObject.duration[3] + newMovieObject.duration[4]
      )
    } mins`;
    return newMovieObject;
  });
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const yearsScores = {};
  moviesArray.forEach((movie) => {
    return !yearsScores[movie.year]
      ? (yearsScores[movie.year] = [movie.score])
      : yearsScores[movie.year].push(movie.score);
  });
  const keys = Object.keys(yearsScores);
  let higherAverage = 0;
  let finalResult = ``;
  keys.forEach((key, index) => {
    const average =
      yearsScores[key].reduce((totalSum, currentValue) => {
        return totalSum + currentValue;
      }) / yearsScores[key].length;
    average > higherAverage &&
      ((higherAverage = average),
      (finalResult = `The best year was ${key} with an average score of ${higherAverage}`));
  });
  return finalResult;
}

console.log(bestYearAvg(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
