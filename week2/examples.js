//BASICS/////////////////////////////////////////////////////////////////////
var myStr = "Hello world"; // this is a string
var answer = 42; // a number
var isNYU = true; // boolean

//ARRAYS/////////////////////////////////////////////////////////////////////
var favPies = ['blueberry','cherry','apple','grape']; // an array. yes, grape pie is a thing.
favPies.push('pumpkin');

//OBJECTS/////////////////////////////////////////////////////////////////////
// an object
var contactInfo = {
    name : 'Tony Pony',
    address : '123 Street',
    zip : 10003,
    favPies : ['coconut custard','lemon']
};

// array of objects
var grades = [
  {name:'Dan', pass: true},
  {name:'Robbie', pass: false}, 
  {name:'Jenny', pass: true},
  {name:'Shelly', pass: true}
];


//CONDITIONS////////////////////////////////////////////////////////////////////
//example 1 --------------------------------------------------------------------
if (1 == 1) {
    console.log("they match!");
}var isSnowing = true;

//example 2 ----------------------------------------------------------------
var isSummer = true;

if (isSnowing == true) { console.log("Get the sleds"); }

// multiple conditions using the && (and) operator
if (isSnowing && isSummer) {
    console.log("Why is it snowing?");
}

// negate condition with !
if ( !isSummer ) {
    console.log("I miss Summer");
}

// the OR operator
var hasInternet = true;
var hasHeat = false;
if ( hasHeat || hasInternet ) {
    console.log("Have at least 1 essential item.");
}


//if(condition) / else if(condition) / else/////////////////////////////////////////////

var age = 25;
var isCitizen = true;

if (age > 18 && isCitizen == true) {
    console.log("You can vote.");

} else if ( isCitizen == false) {
    console.log("You must be a US citizen to vote in the US elections.")    

} else {
    console.log("You must be at least 18 to vote in the US.");
}


//FUNCTIONS
var sayHello = function() {
    console.log("Hello");
};
sayHello();

//passing data into functions -------------------------------
var saySomething = function(words) {
    console.log(words);
};
saySomething('JavaScript functions are friendly.');

//pass object into function ----------------------------------
var printObject = function(myObj) {
    console.log("Let's look inside the object...");
    for (p in myObj) {
        console.log(p + " = " + myObj[p]);
    }
};

var movie = {
    title : 'The Explorers',
    year: 1985,
    director : 'Joe Dante',
    cast : ['Ethan Hawke','River Phoenix','Bobby Fite'],
    description: "This adventurous space tale stars Ethan Hawke and young star River Phoenix as misfit best friends whose dreams of space travel become a reality when they create an interplanetary spacecraft in their homemade laboratory."
};

printObject(movie);

//return object from function ---------------------------------
var createMessage = function(recipient, message) {
    mailObj = {
        to : recipient,
        message : message,
        date : new Date(),
        hasSent : false
    };
    return mailObj; 
};

myMessage = createMessage('Red','Thanks for ITP.');
console.log(myMessage);

//CALLBACKS ////////////////////////////////////////////////////////////
//passing in functions to functions -------------------------
var say = function(word) {
  console.log(word);
}
var computerTalk = function(words, theFunction) {
  theFunction(words);
}
computerTalk("Hello", say);

//anonymous functions ---------------------------------
var bigCounting = function(number, myCallback) {
    for(i=0; i<number; i++){
        // do nothing - just wasting time
    }
    myCallback('All finished');
}

bigCounting(1000000, function(response){
    console.log('Finished counting.');
    console.log('response = ' + response);
});

//functions as classes -------------------------------
var ITPClass = function(name, instructor, day) {
    this.name = name;
    this.instructor = instructor;
    this.day = day;
    this.describe = function() {
        console.log(this.name + " is taught by " + this.instructor + " on " + this.day);
    }
}

var DWD = new ITPClass('Dynamic Web Development','John Schimmel','Friday');
DWD.describe();

// add a new method/function to ITPClass
ITPClass.prototype.hollar = function() {
    alert(this.name);
}
var POPUPBooks = new ITPClass('Pop Up Books','Marianne Petit','Monday');
POPUPBooks.hollar();
