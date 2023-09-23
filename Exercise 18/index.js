"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let places = ["Saudi Arabia", "Istanbul", "Brazil", "Spain", "Paris"];
//Step 1(orignal order)
console.log(places);
//Step 2(alphabetical order)
console.log([...places].sort());
//Step 3(orignal order again)
console.log(places);
//Step 4(Reverse alphabetical order)
console.log([...places].sort().reverse());
//Step 5 (Orignal order again)
console.log(places);
//Step 6 (Reverse order)
console.log(places.reverse());
console.log(places);
//Step 7 (Reverse again)
console.log(places.reverse());
console.log(places);
//Step 8 (alphabetical order)
console.log(places.sort());
console.log(places);
//Step 9 (reverse alphabetical order)
console.log(places.sort().reverse());
console.log(places);
