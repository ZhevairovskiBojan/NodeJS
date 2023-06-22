// Domasna 2

// Zadaca1
// Da se dodade file Domasna.js, koj kje ima funkcija da promeni faregajt vo celzius i obrantno

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
module.exports = {
    fahrenheitToCelsius,
    celsiusToFahrenheit
  };

const domasna2 = require("./Domasna.js");

const celsius = domasna2.fahrenheitToCelsius(77);
console.log(celsius);

const fahrenheit = domasna2.celsiusToFahrenheit(32);
console.log(fahrenheit);





// //Zadaca2

// function calculateRectangleArea(length, width) {
//     const area = length * width;
//     return area;
// }

// function calculateRectanglePerimeter(length, width) {
//     const perimeter = 2 * (length + width);
//     return perimeter;
// }

// module.exports = {
// calculateRectangleArea,
// calculateRectanglePerimeter
// };

// const domasna = require("./Domasna.js");

// const rectangleArea = domasna.calculateRectangleArea(5, 8);
// console.log(rectangleArea);

// const rectanglePerimeter = domasna.calculateRectanglePerimeter(5, 8);
// console.log(rectanglePerimeter);





// Zadaca3

// function presmetajPloshtinaIPerimetar(a, b) {
//     const ploshtina = a * b;
//     const perimetar = 2 * (a + b);
  
//     return { ploshtina, perimetar };
//   }

// module.exports = {
//   presmetajPloshtinaIPerimetar
// };

// const domasna = require("./Domasna.js");

// const rezultat = presmetajPloshtinaIPerimetar(4, 6);
// console.log('Ploshtina:', rezultat.ploshtina);
// console.log('Perimetar:', rezultat.perimetar);





// //Zadaca4
// //Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen


// function proverkaBroj(suma) {
//     if (suma % 2 === 0) {
//       return "Brojot e paren";
//     } else {
//       return "Brojot e neparen";
//     }
//   }
 
// module.exports = {
//     proverkaBroj
// }

// const proverkaBroj = require("./Domasna.js");
// console.log(proverkaBroj(4));
// console.log(proverkaBroj(7));