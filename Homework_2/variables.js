/*
Homework Assigment #2
define use cases for var,let,const

var
"var" can be used to declare variables with global or function scope.
Care must be taken if "var" is used within a block as it will have full function scope.

let
"let" is used to declare varialbes with block scope. When used outside a function or block it is equvalent to "var".
"let" is probably the better choice in general since it can be used in place of "var" but provides more control over scope.

const
"const" is used to declare varialbe with block scope but that cannot be changed after declaration.
When Arrays are declared  with const it is the Array "container" that is not changable, not the array contents.
"const" should be used when a variable is not going to change throughout the program. It provides protection against inadvertant
alteration of globally defined items.


extra credit explain "hoisting"
Hoisting is a term used to decribe how javascrpt preprocess variable declarations. They are essentially done in two parts.
First the declaration itself, then the assignment, if present. The declaration is implemented at the "top" of its scope,
as if the declaration statement were "hoisted" to the top of the function or block in which it occurs. It is important to understand
that while the declarsion is "hoisted", the assigment is not. This can lead to confusion since a variable will be intially defined
but but not initialized until the assigment statement is executed.

Unexpected consequences of hoisting may be avoided by always declaing variable at the top of their scope.

*
/* code examples */
/*
var is used to declare a varialbe with "function" scope" or gobal scope if used outside of a function
*/
// code example for var
console.log("\n*** example for var ***\n")
var globalVariable = "I am global";
var booleanVariable = true;

testfunction = function(){
     // create a varialbe within this function
     var functionVariable = "I have only Function scope";
     // change the global and funcion scope variables
     console.log("globalVariable in function: ", globalVariable);
     console.log("functionVariable in function: ", functionVariable)
     globalVariable = "I have been changed in the function";
     functionVariable = "I also have been changed in the function";
     console.log("globalVariable in function: ", globalVariable);
     console.log("functionVariable in function: ", functionVariable)
     // demonstrate change of global boolean variable within the function
     console.log("change global booleanVariable in the function");
     console.log("booleanVariable: ",booleanVariable);
     booleanVariable =  !booleanVariable;
     console.log("booleanVariable: ",booleanVariable);
};


// show content of globals at start
console.log("globalVariable before function: ", globalVariable);
// demonstrate change of global variable
console.log("change global booleanVariable outside the function");
console.log("booleanVariable: ",booleanVariable);
booleanVariable =  !booleanVariable;
console.log("booleanVariable: ",booleanVariable);

//call the Function
testfunction();
console.log("globalVariable after function: ", globalVariable);
// demonstrate change of global variable persists after functin call
console.log("global booleanVariable after the function", booleanVariable);

// Show udefined state the varialble declared in the function
console.log("try to access varialbe declared in function: ", typeof(functionVariable));
/*
let is used to declare a variable with "block" scope
when used outside a function or block -- let is equvalent to variable
*/
// code example for let
console.log("\n*** example for let ***\n")

// use let just like var for a global
let letVariable = "I'm a global let";
letBoolean = true;
console.log("initial global variables: ",letVariable,"  ",letBoolean);

if (letBoolean) {
  // if we use var here, it becomes global -- this is why we use let ;-)
  var varBoolean = true;
  let localBoolean = true;
  letVariable = "I'm global but changed";

}

console.log("global variable after block",letVariable);
console.log("outisde the block - access var declared variable: ", varBoolean);
/// this will resutl in an error
console.log("try to access let declared variable outside block");
console.log("outisde the block - access let declared valriable: ", typeof(localBoolean));



/*
const is used to declare a variable that cannot be altered once declared.
Note that when declaring an array as "const" the "container" is what is constant, not the contents.
The Array cannot be reassigned entirely, but it's elements can be altered.
*/
// code example for const
console.log("\n*** example for const ***\n")
// create some regular and const variables
const constVariable = "I'm a const";
let regularVariable = "I'm not a const";
const constArray = [1,2,3,4,5];
let regularArray = [1,2,3,4,5];
console.log(constVariable);
console.log(regularVariable);
// change the regular variable
regularVariable = "I'm still not a const";
console.log(regularVariable);
// modify en element of the regular array
console.log("original regular array: ",regularArray);
regularArray[2] = 99;
console.log("modified regular Array element: ",regularArray);
// reassign original Array
regularArray = [9,8,7,6];
console.log("replace regular Array: ",regularArray);// show that we can modify an element of a const Array
// modify an element of the const array
console.log("original const Array: ",constArray);
constArray[2]= 99;
console.log("modified const Array element : ",constArray);
//  cannot reassign const Array
console.log("try to replace constArray - this will error");
constArray = [9,8,7,6];
