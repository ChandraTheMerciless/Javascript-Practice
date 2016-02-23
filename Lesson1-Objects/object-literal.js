//Object literals, also JSON objects!

//empty object literal
var emptyObject = {};

//quotes around parameter name are optional if parameter name isn't a reserved word. So:
var quotyObj = {
  "name": "Deadpool",
  "career": "Mercenary",
  "favorite-food": "Chimichanga"
};

var nonQuotyObj = {
  name: "Tony Stark",
  career: "Avenger",
  hobby: "Building iron suits"
};

//object literals can also be nested! With arrays!
var dog = {
  name: "Momo",
  favFoods: [
    {
      name: "apples",
      type: "all kinds"
    },
    {
      name: "cheese",
      type: "brie"
    }
  ]
}

//and also, they can be arrays of objects!
var avengers = [
  {
    name: "Thor",
    power: "Hammer and God Mode"
  },
  {
    name: "Black Widow",
    power: "Awesome martial arts"
  },
  {
    name: "Captain America",
    power: "Super strength"
  }
]