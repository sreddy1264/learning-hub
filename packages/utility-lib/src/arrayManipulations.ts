// To add two numbers
function SumOfNumber(num1: number, num2: number): number {
    return num1 + num2;
};

// To find even number
function isEvenNumber(num: number): boolean {
    return num % 2 === 0;   
};

// To find even numbers from an array
function getEvenNumbers(NumList: Array<number>): Array<number> {
    return NumList.filter((num: number) => num % 2 === 0) 
};

// To reverse a string
function reverseString(str: string): string {
    return str.split("").reverse().join("");

};

// To find if a string is palindrome
function isPolindrome (str: string) {
    const regEx = /[A-Za-z0-9]/g;
    const lowerCaseConversion = str.toLowerCase().replace(regEx, "");
    const reverseString = str.split("").reverse().join("");
  
    return lowerCaseConversion === reverseString;
};

// find max number
function MaxNumber (numList: Array<number>) {
    return Math.max(...numList);
};

// Factorial of a given number
function factorial (num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};
// Check if a given number is a prime number
function isPrimaryNumber (num: number) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
};

// return Fibonacci sequence up to a given number of term
function fibonacciSequence(numTerm: number) {
    if (numTerm <= 0) return [];
    if (numTerm === 1) return [0];
    let sequence = [0,1];
    while(sequence.length < numTerm) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
    return sequence;
};



export {
    SumOfNumber,
    isEvenNumber,
    getEvenNumbers,
    reverseString,
    isPolindrome,
    factorial,
    MaxNumber,
    isPrimaryNumber,
};