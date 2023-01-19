console.log("JavaScript Functions \n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: Odds Only Checker \n==========\n");

function printOdds(count) {
    for (let num = 1; num <= count; num++) {
        if (num % 2 != 0) {
            console.log(num);
        }
    }
}
printOdds(101);

// Exercise 2 Section
console.log("EXERCISE 2: Driving Age Checker\n==========\n");
function checkAge(name, age) {
    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry, ${name}, but you need to wait until you're 16.`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

console.log("Mount Rushmore Presidents");
checkAge("Washington", 1);
checkAge("Jefferson", 3);
checkAge("Lincoln", 16);
checkAge("Roosevelt", 26);


console.log("EXERCISE 3: Quadrent Indicator \n==========\n");
function quadrentScaner(x, y) {
    if (x == 0 && y == 0) {
        return "This point is on the origin of the plane."
    } else if (x != 0 && y == 0) {
        return "This point is on the Y-axis only."
    } else if (x == 0 && y != 0) {
        return "This point is on the X-axis only."
    } else if (x > 0 && y > 0) {
        return "This point is in quadrent one."
    } else if (x < 0 && y > 0) {
        return "This point is in quadrent two."
    } else if (x < 0 && y < 0) {
        return "This point is in quadrent three."
    } else if (x > 0 && y < 0) {
        return "This point is in quadrent four."
    } else {
        return "This point is unspecified."
    }

}

// Logging the numbers

console.log(quadrentScaner(0, 0));
console.log(quadrentScaner(-4, 3));
console.log(quadrentScaner(4, -3));
console.log(quadrentScaner(0, 7));
console.log(quadrentScaner(-5, 5));
console.log(quadrentScaner(8, 9));
console.log(quadrentScaner(2, 0));


console.log("EXERCISE 4: Triangle Indicator \n==========\n");
function triangleType(side1, side2, side3) {
    let validTriangle = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        validTriangle = true;
    }
    if (validTriangle) {
        if (side1 == side2 && side2 == side3) {
            console.log(
                `The Sides ${side1}, ${side2}, ${side3} make up an equaleteral triangle.`
            );
        }else if (side1 == side2 || side2 == side3) {
            console.log(
                `The Sides ${side1}, ${side2}, ${side3} make up an isosceles triangle.`
            );
        }else if (side1 != side2 && side2 != side3 && side3 != side1) {
            console.log(
                `The Sides ${side1}, ${side2}, ${side3} make up an scalene triangle.`
            );
        }
    }
    if (validTriangle == false) {
        console.log("That is not a valid triangle.");
    }
}
typeOfTriangle(4,4,4); //equilateral
typeOfTriangle(3,3,2); //isosceles
typeOfTriangle(7,8,9) //scalene 
typeOfTriangle(0,0,0); //not a triangle

// Exercise 5 made bonus according to classmates. 