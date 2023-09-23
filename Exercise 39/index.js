"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
let function1 = city_country("Karachi", "Pakistan");
let function2 = city_country("Toronto", "Canada");
let function3 = city_country("Rio de Janeiro", "Brazil");
console.log(function1);
console.log(function2);
console.log(function3);
