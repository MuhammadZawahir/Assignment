"use strict";
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks
    };
}
let album1 = make_album("Imran Khan", "Unforgettable");
let album2 = make_album("Kanye West", "College Dropout", 21);
let album3 = make_album("Abrar ul Haq", "Billo de ghar");
console.log(album1);
console.log(album2);
console.log(album3);
