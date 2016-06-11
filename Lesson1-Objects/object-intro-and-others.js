//Javascript has 6 primitive data types that all objects can hold as parameters. The six types are in this object literal as follows:
var dataTypes = {
    null: null, //declared, and assigned null value, or empty
    boolean: true, //true or false
    undefined: undefined, //declared, but not defined with a value
    number: 6, //number value, can do math on it
    string: "string", //string in quotations
    object: {}, //can hold multiple parameters and data types, including other objects
};

//There are also arrays and functions, which Javascript treats as regular objects

//Here are some arrays. Arrays inherit from the Array prototype, so they have native functions that you can use on them:
var array = [
    "Leeroy Jenkins",
    6,
    function doTheThing(argument){
        console.log("I'm in an array!")
        console.log(argument);
    },
    {},
    "etc"
];

//To access an item in an array, do you can use this structure:
array[2]; //console logging this would print the entire function as it's written

//You can also call a function in an array like this:
array[2]("Batman"); //The () at the end called this array value as a function, indexed at 2, since the first array index always starts at 0

//You can pass pretty much any kind of object as an argument in a function
array[2](array); //Prints the array

//Here are some functions. Functions are cool because you can declare and define them at any point in your code, and so long as they're scoped where they're called, you can access them:

callTheThing(logTheThing); // this calls callTheThing, which then works with logTheThing, even though they're defined below

//Passing a function as an argument is a good way to avoid writing anonymous functions, so you probably wouldn't use this method in this context. When making asyncronous calls with anonymous functions to handle success and error handling, that's a good time to use this method to keep your code clean and readable
function callTheThing(funcArg){ //calls function below and prints its console.log
    funcArg();
};

function logTheThing(){
    console.log("I'm in the console.log!");
};

//You can also declare, and define it with an anonymous function, but then you can't call that function in your code before where you wrote it:
//anonymousFunc(); //console will show TypeError. I have this commented out because this will stop the rest of the code from running 
var anonymousFunc = function(){
    console.log("I'm anonymously in the console");
};
anonymousFunc(); //console will call variable and run function