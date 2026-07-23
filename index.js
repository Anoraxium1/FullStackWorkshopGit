function multiplyNumbs(x, y, z){
    return "new number is " + (x*y*z);
}

const multiplyNumbsExpression = function(x, y, z) {   //function expression
    return "new number is " + (x*y*z);
}

const multiplyNumbsArrow = (x, y, z) => {
        return "new number is " + (x*y*z);

}

// Call and print the first function
console.log(multiplyNumbs(2, 3, 4)); 


// Call and print the second function
console.log(multiplyNumbsExpression(5, 5, 2)); 

//Call and print Arrow
console.log(multiplyNumbsArrow(6,7,3))