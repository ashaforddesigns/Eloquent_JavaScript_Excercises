//You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

//Your function will need a loop that looks at every character in the string. It can run an index from zero to one below its length (< string.length). If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop has finished, the counter can be returned.



function countsBs(str){
    let i = 0;
    let counter = 0;
    while (i < (str.length)){
        if (str[i] === "B"){ // only adds to the counter IF a capital B is found
            counter++
        }
        i++ // to iterate through the string
    }
    return counter // needs to return OUTSIDE of the loop
}
console.log(countsBs("JOB"))



function countChar(str, char){
    let i = 0;
    let counter = 0;
    while (i < (str.length)){
        if (str[i] === char){ 
            counter++
        }
        i++ // to iterate through the string
    }
    return counter // needs to return OUTSIDE of the loop
}
console.log(countChar("Mississippi", "s"))