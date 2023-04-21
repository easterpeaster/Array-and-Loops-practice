/*******************************Only Odds ***************************************/

console.log("---------------------Only Odds-------------------------------------")

const arr1 = [2,4,6,8,11,20,15,22];
const onlyOdds = [];
const arr2 = [1,2,3,4,5,6,7,8,9,10];
const onlyOdds2 = [];
const arr3 = [70,42,55,81,21,91,34];
const onlyOdds3 = [];
const arr4 = [2,4,6,8,10,11,12];
const onlyOdds4 = [];

for(let i=0; i < arr1.length; i++) {
    const remainder = arr1[i] % 2;
    if(remainder===1) {
        onlyOdds.push(arr1[i]);
    }
}
console.log(onlyOdds);

for(let i=0; i < arr2.length; i++) {
    const remainder = arr2[i] % 2;
    if(remainder===1) {
        onlyOdds2.push(arr2[i]);
    }
}
console.log(onlyOdds2);

for(let i=0; i < arr3.length; i++) {
    const remainder = arr3[i] % 2;
    if(remainder===1) {
        onlyOdds3.push(arr3[i]);
    }
}
console.log(onlyOdds3);

for(let i=0; i < arr4.length; i++) {
    const remainder = arr4[i] % 2;
    if(remainder===1) {
        onlyOdds4.push(arr4[i]);
    }
}
console.log(onlyOdds4);


/************************Vowel versus Consonant ************************/
console.log("--------------------------Vowel Versus Consonant----------------------")

let inputString = "hello";
const vowels = ["a", "e", "i", "o", "u"];
let consonantCount = 0;
let vowelCount = 0;

for(let i=0; i < inputString.length; i++){
    let currentLetter = inputString[i];
    if(currentLetter === vowels[0] || 
        currentLetter === vowels[1] ||
        currentLetter === vowels[2] ||
        currentLetter === vowels[3] ||
        currentLetter === vowels[4]) {
        vowelCount++;
    } else{
        consonantCount++;
    }
}
console.log(inputString + " has " + consonantCount + " consonants and "
+ vowelCount +" vowels");

inputString = "ukelele";
consonantCount = 0;
vowelCount = 0;

for(let i=0; i < inputString.length; i++){
    let currentLetter = inputString[i];
    if(currentLetter === vowels[0] || 
        currentLetter === vowels[1] ||
        currentLetter === vowels[2] ||
        currentLetter === vowels[3] ||
        currentLetter === vowels[4]) {
        vowelCount++;
    } else{
        consonantCount++;
    }
}
console.log(inputString + " has " + consonantCount + " consonants and "
+ vowelCount +" vowels");

inputString = "awesome";
consonantCount = 0;
vowelCount = 0;

for(let i=0; i < inputString.length; i++){
    let currentLetter = inputString[i];
    if(currentLetter === vowels[0] || 
        currentLetter === vowels[1] ||
        currentLetter === vowels[2] ||
        currentLetter === vowels[3] ||
        currentLetter === vowels[4]) {
        vowelCount++;
    } else{
        consonantCount++;
    }
}
console.log(inputString + " has " + consonantCount + " consonants and "
+ vowelCount +" vowels");

inputString = "onomonopia";
consonantCount = 0;
vowelCount = 0;

for(let i=0; i < inputString.length; i++){
    let currentLetter = inputString[i];
    if(currentLetter === vowels[0] || 
        currentLetter === vowels[1] ||
        currentLetter === vowels[2] ||
        currentLetter === vowels[3] ||
        currentLetter === vowels[4]) {
        vowelCount++;
    } else{
        consonantCount++;
    }
}
console.log(inputString + " has " + consonantCount + " consonants and "
+ vowelCount +" vowels");

inputString = "textbook";
consonantCount = 0;
vowelCount = 0;

for(let i=0; i < inputString.length; i++){
    let currentLetter = inputString[i];
    if(currentLetter === vowels[0] || 
        currentLetter === vowels[1] ||
        currentLetter === vowels[2] ||
        currentLetter === vowels[3] ||
        currentLetter === vowels[4]) {
        vowelCount++;
    } else{
        consonantCount++;
    }
}
console.log(inputString + " has " + consonantCount + " consonants and "
+ vowelCount +" vowels");


/***********************Reverse Array ********************************************/

console.log("--------------------------- Reverse Array ---------------------------")

let inputArrays = [1,2,3];
console.log('array:', inputArrays);
let reversedArray = [];

for(let i = inputArrays.length - 1; i >= 0; i--) {
    reversedArray.push(inputArrays[i]);
}
console.log('reverse array:', reversedArray);

inputArrays = [1,3,5,7,9,11];
console.log('array:', inputArrays);
reversedArray = [];

for(let i = inputArrays.length - 1; i >= 0; i--) {
    reversedArray.push(inputArrays[i]);
}
console.log('reverse array:', reversedArray);

inputArrays = [20,50,30,60,200];
console.log('array:', inputArrays);
reversedArray = [];

for(let i = inputArrays.length - 1; i > 0; i--) {
    reversedArray.push(inputArrays[i]);
}
console.log('reverse array:', reversedArray);

inputArrays = [1,-1,2,-3,5,-8,13];
console.log('array:', inputArrays);
reversedArray = [];

for(let i = inputArrays.length - 1; i > 0; i--) {
    reversedArray.push(inputArrays[i]);
}
console.log('reverse array:', reversedArray);


// const reverseArray = function(inputArray){
//     console.log('array:', inputArray);
//     const newArray = [];
    
//     for(let i = inputArray.length - 1; i >= 0; i--) {
//         newArray.push(inputArray[i]);
//     }
//     console.log('reverse array:', newArray);
// }
// reverseArray([1,2,3]);
// reverseArray([1,3,5,7,9,11]);
// reverseArray([20,50,30,60,200]);
// reverseArray([1,-1,2,-3,5,-8,13]);


/************************Fizz Buzz ************************/
console.log("-----------------------------Fuzz Buzz--------------------------------");

for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
 }
