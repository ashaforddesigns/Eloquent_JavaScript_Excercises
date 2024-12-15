// Write a program that uses console.log to print all the numbers 1 - 100 with 2 exceptions. For numbers divisible by 3, print "Fizz"
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// Step 2: when you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5

for (let num = 1; num <= 100; num++){
    
    if (num % 3 === 0 && num % 5 === 0)
        console.log("FizzBuzz");
    else if (num % 5 === 0)
        console.log("Buzz");
    else if (num % 3 === 0)
        console.log("Fizz");
    else
        console.log(num)
}
