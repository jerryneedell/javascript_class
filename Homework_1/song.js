/* Homework Assignemnt #1 for Keeping Up With the Javascripts - Part 1: ES6
create a file name song.js  containing variable that describe a favorite song. 
Use console.log() to print the information. 
*/

var songTitle = "Come Home Pretty Bird";

// basic info -- stageName may be different from actual name
var artist = {
firstName: "Emily",
lastName: "Smith",
stageName: "Emily Smith",
yearBorn: 1981,
};

// nuber of seconds fir the song to play
var durationInSeconds = 198;

//  The year the song was written
var songYear = 2008;

// genre - (e.g Folk, Classical, Rock...)
var genre = "Folk";

// add author info - may not be the artist
var author = {
firstName: "Emily",
lastName: "Smith",
};


// describe the album containing the song
var albumTitle = "Too Long Away";

// list the full album contents
albumSongs = {
1:"Sunset Hymn",
2:"Caledonia",
3:"Audience of Souls",
4:"As I was a Wand’ring",
5:"May Colven",
6:"Mermaid of Galloway",
7:"The Bleacher Lassie o’ Kelvinhough",
8:"Come Home Pretty Bird",
9:"Old Mortality",
10:"Winter Song" 
};


// add the year the album was published
var albumYear = 2008;
var recordLabel = "White Fall Records";
// add useful terms to decribe the type of song
var otherAttributes = [ "Scottish", "Female vocalist"];

// add list of instruments used on this song
var instrument = [ "voice", "guitar"];

// is this a solo performance?
var solo = true;


// song lyrics - one line per entry.
var lyrics = [
"Come home pretty bird",
"It’s past your time",
"And the world’s spinning cycle",
"Won’t unwind",
"Won’t leave you suspended",
"Hanging on a cloud",
"It will carry you along somehow",
"",
"Come home pretty bird",
"You’ve been too long away",
"And the brightness of your plumage",
"Won’t suit that winter grey",
"Come home to the summer",
"That’s where you belong",
"I missed your pretty song today",
"",
"Oh I missed your pretty song",
"I missed your pretty song",
"I missed your pretty song today",
"",
"They’ll be stuck there on the motorway",
"While the weather man says it’s snow",
"I’ll be out there, in the garden",
"Waiting for your sweet hello",
"",
"All the birthdays forgotten",
"And conversations missed",
"We grow tired and resentful",
"For those we might have kissed",
"All the people going home",
"And people being born",
"They carry you along somehow",
"",
"Oh they carry you along, they carry you along",
"They carry you along somehow",
"Oh they carry you along, carry you along",
"They carry you along somehow",
]



console.log(songTitle);
console.log(artist);
console.log(genre);
console.log(durationInSeconds);
console.log(author);
console.log(songYear);

console.log(albumTitle);
console.log(albumYear);
console.log(albumSongs);
console.log(recordLabel);
console.log(otherAttributes);
console.log(instrument);
console.log(solo);
console.log(lyrics);


