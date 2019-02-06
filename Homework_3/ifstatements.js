/*

Homework Assignment #3: Statements and Operators

Details:
Let's look at a popular logical argument (a syllogism)

All men are mortal
 Socrates is a man.
 Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.

Extra Credit:

Got the hang of creating a logical argument? Want to try another one? Try this one as well:

This cake is either vanilla or chocolate.
 This cake is not chocolate.
 Therefore, this cake is vanilla.

*/
console.log("\n*** if statement example ***\n")
// create a list of men
const allMen = [ "Plato","Socrates","Eumenides","Euripedes","Harvey"];
// initialize tests
let isMortal = false;
let isMan = false;
// here's our man
let name = "Socrates";
// I may be jumping ahead a bit, but see if our man is in the list
index = 0;
while(index < allMen.length) {
  // if our man in the list set the test value
  if ( name === allMen[index]){
    isMan = true;
    console.log("Socrates is a Man");
  };
  index++;
}
// if he was in the list then that can be used to set the next test value
if(isMan){
  isMortal = true;
  console.log("All men are Mortal");
}
// check both test vales -- if true then report
if (isMan && isMortal){
  console.log("Therefore ", name, " is Mortal");
}


// extra Credit
console.log("\n*** extra credit ***\n")
let cake = "vanilla";
const cakeType = ["vanilla","chocolate"];
// verify that it is either chocolate or vanilla
if( cake === cakeType[0] || cake === cakeType[1]){
   console.log("ths cake is either vanilla or chocolate");
   // now see if it is not chocolate
   if (cake != cakeType[1] ){
     console.log("this cake is", cakeType[0]);
   }
}
else {
  console.log("not a valid cake");
}
