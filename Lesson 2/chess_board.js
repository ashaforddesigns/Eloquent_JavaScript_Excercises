// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height

//loop the line first then loop the full board

let firstLine = "";
let binding = 7

for (let i = 1; i <= binding; i++) {
    if (i % 2 === 1) { // if odd
        firstLine = firstLine + " ";
    } else if (i % 2 === 0) { // if even
        firstLine = firstLine + "#";
    }
}

let secondLine = "";

for (let i = 1; i <= binding; i++) {
    if (i % 2 === 1) { // if odd
        secondLine = secondLine + "#";
    } else if (i % 2 === 0) { // if even
        secondLine = secondLine + " ";
    }
}
if (binding % 2 === 0){ // even binding
    for (let i = 1; i <= binding/2 ; i++){
        console.log(firstLine)
        console.log(secondLine) 
    }
}
if (binding % 2 === 1){ //odd binding
    for (let i = 1; i <= (binding/2) + 1 ; i++){
        console.log(firstLine)
        console.log(secondLine) 
    }
}



