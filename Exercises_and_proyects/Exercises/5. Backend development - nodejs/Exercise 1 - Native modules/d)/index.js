var shero = require("superheroes");
var svillains = require("supervillains");

var heroName = shero.random();
var villainName = svillains.random();

console.log("The hero " + heroName);
console.log("Battle of the century the mighty " + heroName + " versus " + villainName);