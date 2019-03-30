/* Keeping Up with the JavaScripts

Homework Assignment #5: Switch Statements


Details:
 
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers  

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")



Requirements:

1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs 

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"]; 

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

For example if someone calls:

timeAdder(20,"hours",4,"hours")

You could return: [1,"day"] rather than [24,"hours"]

But if they called

timeAdder(20,"hours",5,"hours")

You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.


*/

function timeAdder(value1,label1,value2,label2){
  const labels = ["seconds","minutes","hours","days","second","minute","hour","day"];

  if ((typeof(value1) != "number") || (typeof(value2) != "number")){
  console.log("Invalid inputs - values must be Integers");
  return false;
  }
  if ((value1 < 0) || (value2 < 0)){
  console.log("Invalid inputs - values must be positive Integers");
  return false;
  }

  let addedSeconds = 0;
  let value1Seconds = 0;
  let value2Seconds = 0;
  value1Seconds = convertToSeconds(value1,label1);
  value2Seconds = convertToSeconds(value2,label2);
  if(value1Seconds && value2Seconds){
    addedSeconds = value1Seconds + value2Seconds;
  }
  else{
    console.log("Invalid inputs");
    return false;
  }
  let value3 = addedSeconds;
  let label3 = "seconds";
  if((value3 % 60) === 0){
    value3 /= 60;
    label3 = "minutes";
  }
  if((value3 % 60) === 0){
    value3 /= 60;
    label3 = "hours";
  }
  if((value3 % 24) === 0){
    value3 /= 24;
    label3 = "days";
  }
/*
  if(value3 === 1){
    label3 = label3[0:len(label3)-2];
  }
*/
  return [value3,label3];
}
function convertToSeconds(value,label){

  switch(label){
    case("second"):
      if(value >1){
      console.log("plurality mismatch");
      return false;
      }
    case("seconds"):
    if(value === 1){
      console.log("plurality mismatch");
      return false;
      }
      return value;
      break;
    case("minute"):
    if(value >1){
      console.log("plurality mismatch");
      return false;
      }
    case("minutes"):
    if(value === 1){
      console.log("plurality mismatch");
      return false;
      }
      return value * 60;
      break;
    case("hour"):
    if(value >1){
      console.log("plurality mismatch");
      return false;
      }
    case("hours"):
    if(value=== 1){
      console.log("plurality mismatch");
      return false;
      }
      return value * 3600;
      break;
    case("day"):
    if(value >1){
      console.log("plurality mismatch");
      return false;
      }
    case("days"):
    if(value === 1){
      console.log("plurality mismatch");
      return false;
      }
      return value * 86400;
      break;
    default:
      console.log("Invalid Label");
      return false;
  }
}



console.log(timeAdder(10,"seconds",5,"minutes"));
console.log(timeAdder(10,"minutes",5,"minutes"));
console.log(timeAdder(10,"days",5,"hours"));
console.log(timeAdder(10,"hours",5,"minutes"));
console.log(timeAdder(10,"second",5,"minutes"));
