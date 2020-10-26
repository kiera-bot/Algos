//algorithm practice in js


//Print each array value and the sum so far
function printSumAndValue(input)
{
  var sum = 0
  for (var x = 0; x < input.length; x++)
  {
    sum += input[x];
    console.log('Value: ' + input[x]);
    console.log ('Sum so far: '+ sum);
  }
}

printSumAndValue([6,3,5,1,2,4]);


// Multiply each value in the array by its array position
function multiplyArrayValue(input)
{
  var multipliedarray = [];
  var multiply = 0;
  for (var x = 0; x < input.length; x++)
  {
    multiply = (x * input[x]);
    multipliedarray.push(multiply);
  }
  console.log(multipliedarray);
}
multiplyArrayValue([6,3,5,1,2,4]);



//Selection sort works by iterating through the list, finding the minimum value, 
//and moving it to the beginning of the list. Then, ignoring the first position, 
//which is now sorted, iterate through the list again to find the next minimum 
//value and move it to index 1. This continues until all values are sorted.
var selectionSort = function(input){
  for(var i = 0; i < input.length; i++){
    var min = i;
    for(var j = i+1; j < input.length; j++){
      if(input[j] < input[min]){
       min = j;
      }
    }
    var swapper = input[i];
    input[i] = input[min];
    input[min] = swapper;
  }
  return input;
};
console.log(selectionSort([5,4,3,2,10]));




//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function array1to255()
{
  var arr=[]
  for (var i = 1; i <= 255; i++)
  {
    arr.push(i);
  }
    console.log(arr);
}
array1to255();


//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumEvens1000()
{
    var sum = 0;
    for (var i = 0; i <=1000; i+=2)
    {
        sum += i;
    }
    console.log("Sum = " + sum)
}
sumEvens1000();



//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdds5000()
{
    var sum = 0;
    for (var i = 1; i <=5000; i+=2)
    {
      sum += i;
    }
    console.log("Sum = " + sum)
}
sumOdds5000();



//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(input_array)
{
  var sum = 0;
  for (var i = 0; i <input_array.length; i++)
  {
    sum += input_array[i]; 
  }
  return sum;
}

test = sumArray([1,2,5]);
console.log(test);




//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxArray(input_array) {
  max = 0;
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] > max) 
    {
      max = input_array[i];
    }
  }
  return max;
}
max = maxArray([2,5,7]);
console.log(max);



//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function averageArray(input_array)
{
  sum = 0;
  for(var i = 0; i < input_array.length; i++)
  {
    sum += input_array[i];
  }
  console.log(sum / input_array.length);
}

averageArray([2,5,7]);


//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd()
{
  var odd_array = [];
  for(var i = 1; i <= 50; i+=2)
  {
    odd_array.push(i);
  }
  console.log(odd_array);
}

arrayOdd();



//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(Y,input_array)
{
  var number = 0;
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] > Y)
    {
      number = number + 1;
    }
  }
  return number;
}
test = greaterThanY(3, [1,3,5,7])
console.log(test);



//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
 function squareArray(input_array) 
 {
  var square = 0;
  var squared_array = [];
  for (var i = 0; i < input_array.length; i++) 
  {
    square = (input_array[i] * input_array[i]);
    squared_array.push(square);
  }
  
  return squared_array;
}

test = squareArray([1, 5, 10, -2]);
console.log(test); 


//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(input_array)
{
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] < 0)
    {
      input_array[i] = 0;
    }
  }
  return input_array;
}
 test = negatives([1, 5, 10, -2]);
 console.log(test);



//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(input_array){
  [input_array[0],input_array[input_array.length -1]] = [input_array[input_array.length -1], input_array[0]];
  return input_array;
}
console.log(swap([1,5,10,-2]));




//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numberString(input_array)
{
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] < 0)
    {
      input_array[i] = 'Dojo';
    }
  }
  return input_array;
}
 test = numberString([-3, -2, 2]);
 console.log(test); 


// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(input_array)
{
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] > 0)
    {
      input_array[i] = 'big';
    }
  }
  return input_array;
}
 test = makeItBig([-1,3,5,-5]);
 console.log(test); 



 // Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(input_array) 
{
  var max = 0;
  var min = 0;
  for (var i = 0; i < input_array.length; i++) 
  {
    if (input_array[i] > max) 
    {
      max = input_array[i];
    }
    if (input_array[i] < min) 
    {
      min = input_array[i];
    }  
  }
  console.log(min);
  return max;
}

test = lowHigh([1,5,10,-2]);
console.log(test);



// Print out all odd numbers from 1 to 20
function printOdds()
{
  for(var i=1;i<=20;i+=2)
  {
    console.log(i);
  }
}
printOdds();



// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printReturn(input_array)
{
  odd = 0;
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] % 2 != 0)
    {
      odd = input_array[i];
      break;
    }
  }
  console.log(input_array[input_array.length -2]);
  return odd;
}
test = printReturn([6,3,4,-2,7])
console.log(test);



// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
 function double(input_array)
 {
  var multiply = 0;
  var output = [];
  for (var i = 0; i < input_array.length; i++)
  {
    multiply = (input_array[i] * 2);
    output.push(multiply);
  }
  return output;
}

test = double([1, 2, 3]);
console.log(test);


// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(input_array) 
{
  var number = 0;
  for (var i = 0; i < input_array.length; i++) 
  {
    if (input_array[i] > 0) 
    {
      number = number + 1;
    }
  }
  input_array.pop();
  input_array.push(number);
  return input_array;
}
test = countPositives([-1,1,1,1])
console.log(test);



// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
 function incSeconds(arr)
 {
   for (var i = 0; i < arr.length; i ++)
   {
     if (arr[i] % 2 != 0)
     {
       arr[i] = (arr[i] + 1);
     }
   }
   console.log(arr);
 }

 test = incSeconds([1, 2, 3, 4, 5, 6]);



// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function lengths(input_array)
{
  for (var i=input_array.length-1;i>0;i--)
  {
    input_array[i] = input_array[i-1].length;
  }
  return input_array;
}

var test = ["hello","dojo","awesome"];
console.log(lengths(test));




// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(input_array) 
{
  var add = 0;
  var output = [];
  for (var i = 0; i < input_array.length; i++) 
  {
    add = (input_array[i] +7);
    output.push(add);
  } 
  return output;
}

test = addSeven([1, 2, 3]);
console.log(test);


// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(input_array)
{
  input_array.reverse();
  return input_array;
}
test = reverse([1, 2, 3])
console.log(test)



// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function allNegatives(input_array)
{
  var negative = 0;
  var output = [];
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] > 0)
    {
     negative = (input_array[i] * -1);
     output.push(negative)
    }
    else
    {
      output.push(input_array[i]);
    }
  }
  return output;
}
 test = allNegatives([1, 5, 10, -2]);
 console.log(test);


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(input_array)
{
  var eat = 0;
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array[i] == 'food')
    {
      console.log('yummy')
      eat = eat + 1;
    }
  }
  if (eat == 0) 
  {
    console.log("I'm hungry");
  }
}
 hungry([1, 'food', 'food', -2, 'squirrel']);
 hungry([1, 'chair', 'boat', -2, 'squirrel']);



// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scale(arr, num)
{
  for (var i = 0; i < arr.length; i++) 
  {
      arr[i] = (arr[i] * num);
  }
  return arr;
}
test = scale([1,2,3], 3);
console.log(test);




//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondLast(input_array)
{
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array.length <= 1)
    {
      return 'null';
    }
    else;
    {
    return input_array[input_array.length -2];
    }
  }
}
test = secondLast(['dude']);
console.log(test);
test2 = secondLast([42, true, 4, "Liam", 7]);
console.log(test2);



//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthLast(input_array,number)
{
  for (var i = 0; i < input_array.length; i++) 
  {
    if (input_array.length <= 1)
    {
      return 'null';
    }
    else;
    {
      return input_array[input_array.length -number];
    }
  }
}
test = nthLast([5,2,3,6,4,9,7],3);
console.log(test);



//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondHighest(input_array)
{
  for (var i = 0; i < input_array.length; i++)
  {
    if (input_array.length <= 1)
    {
      return 'null';
    }
    else;
    {
      input_array.sort(function(a, b){return a-b});  
      console.log(input_array);
      return input_array[input_array.length -2];
    }
  }
}
test = secondHighest([42,1,4,3.14,7]);
console.log(test);




//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function duplicate(input_array)
{
  var duper = []
  for (var i = 0; i < input_array.length; i++)
  {
    duper.push(input_array[i]);
    duper.push(input_array[i]);
  }
  input_array = duper;
  return input_array
}

test = duplicate([4, "Ulysses", 42, false]);
console.log(test);


