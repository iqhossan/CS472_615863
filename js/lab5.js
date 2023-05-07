"use restrict"

/*1. Define a function max() that takes two numbers as arguments and returns the largest of them. 
Use the if-thenelse construct available in Javascript. */
function max(x , y){
    if(x>y) return x;
    else return y;
}

console.log("01. Result:" + max(141,32));
document.getElementById("demo1").innerHTML = max(141,32);

/*2. Define a function maxOfThree() that takes three numbers as arguments and 
returns the largest of them.*/

function maxOfThree(x,y,z){
    let max;
    if(x>y)  max = x;
    else max = y;

    if (max>z) return max;
    else return z;
 }

 console.log("02. Result:" + maxOfThree(141,323,932));
 document.getElementById("demo2").innerHTML = maxOfThree(141,323,932);


 /*3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */

function isVowel(char){

    let vowel = ["a","e","i","o","u"];
    return vowel.includes(char.toLowerCase());
}

console.log("03. Result:" + isVowel("U"));
document.getElementById("demo3").innerHTML = isVowel("u");

/*4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop) */

function sum(items){
    let sum = 0;
    for(let item of items){
        sum +=item;
    } 

    // let i = 0;
    // do{
    //     sum += items[i];
    //     i++;
    // }while(i<items.length); 

    return sum;
}
console.log("04. Result:" + sum([1,2,3,4]));

function multiply(items){
    let sum = 1; 
    let i = 0;
    do{
        sum *= items[i];
        i++;
    }while(i<items.length); 

    return sum;
}

console.log("04. Result:" + multiply([1,2,3,4]));
document.getElementById("demo4").innerHTML = "sum: "+ sum([1,2,3,4]) +", multiply:"+ multiply([1,2,3,4]);

/*5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
return the string "ratset gaj".*/

function reverse(str){ 
    let rev = ""; 
    for(let i =str.length-1; i>-1;i--){
        rev += str[i]; 
    }
   return rev;
}
let str = "jag testar";
console.log("05. Result:" + reverse(str));
document.getElementById("demo5").innerHTML = reverse(str);


 
/*6. Write a function findLongestWord() that takes an array of words 
and returns the length of the longest one.*/

function findLongestWord(words){
    let max = 0;
    for(let word of words){
        if(word.length>max){
            max = word.length;
        } 
    }
    return max;
}

let words = ["hello", "world", "find Longest Word", "programming"];
console.log("06. Result:" + findLongestWord(words));
document.getElementById("demo6").innerHTML = findLongestWord(words);

/*7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
containing only those words that were longer than i characters.*/
function filterLongWords(data,i){
     return data.filter(element => element.length>i);
}
words = ["hello", "world", "find Longest Word", "programming"];
let result = filterLongWords(words,5);
console.log("07. Result:" + result);
document.getElementById("demo7").innerHTML = filterLongWords(words,5);


/*8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
returns the sum of the squares of each number in the input array. 
E.g. computeSumOfSquares([1,2,3]) should be
computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
NOT use any explicit looping construct; instead use functional programming style/approach.*/

function computeSumOfSquares(numbers){
    return numbers.reduce((a,b)=>a + b ** 2,0);
}
console.log("08. Result:" + computeSumOfSquares([1,2,3]));
document.getElementById("demo8").innerHTML = computeSumOfSquares([1,2,3]);


/*9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
and prints only the numbers which are odd.*/

function printOddNumbersOnly(numbers){
return numbers.filter(element=>element%2 != 0);
}
console.log("09. Result:" + printOddNumbersOnly([1,2,3,4]));
document.getElementById("demo9").innerHTML = printOddNumbersOnly([1,2,3,4]);


/*10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/

function computeSumOfSquaresOfEvensOnly(numbers){
    return numbers.filter(element=>element%2==0).reduce((a,b)=>a+b**2,0);
}
console.log("10. Result:"+computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
document.getElementById("demo10").innerHTML = computeSumOfSquaresOfEvensOnly([1,2,3,4,5]);


/*11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. 
i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.*/

function sumByReduce(items){
    return items.reduce((a,b)=>a+b,0);
}
console.log("11. Result:" + sumByReduce([1,2,3,4]));
 

function multiplyByReduce(items){ 
    return items.reduce((a,b)=>a*b,1); 
}
console.log("11. Result:" + multiplyByReduce([1,2,3,4]));
document.getElementById("demo11").innerHTML = "sumByReduce: "+sumByReduce([1,2,3,4]) +" multiplyByReduce: "+ multiplyByReduce([1,2,3,4]);


/*12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out 
the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), 
prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), 
prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", 
as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).*/

function printFibo(n,a,b){
    let arr = [];
    arr[0] = a;
    arr[1] = b; 
    if(n==1) return arr[0].toString();
    else if(n==2) return arr.toString();
    else{
        for(let i=2;i<n;i++){
            arr[i] = arr[i-1] + arr[i-2]; 
        }
    }
    return arr.toString();
}

console.log('12. prints-out: "'+printFibo(n=10, a=0, b=1)+'"');
document.getElementById("demo12").innerHTML = printFibo(n=10, a=0, b=1);
