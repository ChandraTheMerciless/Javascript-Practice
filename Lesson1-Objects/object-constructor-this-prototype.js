'use strict';
//Creating objects by defining an Object Constructor!
console.log("Data from object-constructor-this.js file");

//This creates a prototype for us to build our objects off of.
//We can make as many objects as we want to without updating this prototype,
//as the prototype itself will remained untouched
function Alien(name, species, hobby, friends, greeting) {
  //the this keyword is defined by the current object being defined
  this.name = name;
  this.species = species;
  this.hobby = hobby;
  this.friends = friends;
  this.sayGreeting = function (greeting) {
    this.greeting = greeting;
    console.log(greeting);
  };
};

var spock = new Alien("Spock", "Vulcan", "Playing the flute", ["Kirk", "Bones", "Uhura", "Chekhov", "Scotty"]);
var newton = new Alien("Thomas Jerome Newton", "Unknown", "Watching TV", ["Mary-Lou"]);

console.log(spock);
console.log(newton);

spock.sayGreeting("Hello, human.");

//We can also alter the original constructor's prototype to give it new properties
Alien.prototype.defense = function(def){
    console.log("Take that! I have " + def);
};

spock.defense("Vulcan neck pinch");
newton.defense("Angst");