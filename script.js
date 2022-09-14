//This keeps the last value to remain in display until another button is pressed
function equivalentCheck() {
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('screenDisplay').value =0;
    }
}

//NUMBER DISPLAY | The += sign makes more than one number to display together, as againt the equals sign only
function input(x) { 

    equivalentCheck();

    let y = parseFloat(document.getElementById('screenDisplay').value);

    if (document.getElementById('decimalVar').value == 0) {
        x += y * 10; //Multiplies the text input by 10 then adds the value of x.

        document.getElementById('screenDisplay').value = x; // Return x to the text output.
    }
    else { //If decimal is true
        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if (decimalCount == 1) {
            x *= 1/10; //Using math to place the decimal point
            y += x;
            document.getElementById('screenDisplay').value = y;
        }
        else {
            document.getElementById('screenDisplay').value += x;
        }

        decimalCount++;

        document.getElementById('decimalVar').value = decimalCount;
    }

    // I believe these are the extra codes
    if (document.getElementById('screenDisplay').value == 0) {
        document.getElementById('screenDisplay').value = x;
    }
    else {
        document.getElementById('screenDisplay').value = x; //This line is the same as the else statement below
    }
}

//This checks the input before an operator was used
function operandCheck() {
    if(document.getElementById('operand').value == "") {
        
        document.getElementById('operand').value = document.getElementById('screenDisplay').value; //Previously Result
        // document.getElementById('screenDisplay').value = 0; //This is temporary
        document.getElementById('equivalent').value = 1;

    } 
    
    else {
        operatorCheck();
    }
}

function operatorCheck() {
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('screenDisplay').value); 

    switch (parseInt(document.getElementById('operation').value)) {

        case 1: //Divide
            a /= b;
            break;

        case 2: //Times
            a *= b;
            break;

        case 3: //Minus
            a -= b;
            break;

        case 4: //Plus
            a += b;
    }

    document.getElementById('operand').value = a;
    document.getElementById('screenDisplay').value = a; 
    document.getElementById('equivalent').value = 1;
}

// OPERATORS
function operator(x) {
    switch (x) {
        case 1:
            document.getElementById('operation').value = 1; //Divide
            break;
        case 2:
            document.getElementById('operation').value = 2; //Times
            break;
        case 3:
            document.getElementById('operation').value = 3; //Minus
            break; 
        case 4:
            document.getElementById('operation').value = 4; //Plus
            break; 
        default:
    }

    operandCheck();
}

// CLEAR ALL (C)
function clearAll() {
    document.getElementById('screenDisplay').value = 0;   
    document.getElementById('operand').value = ""; 
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
}

// EQUALS

function equals() {
    operator(parseInt(document.getElementById('operation').value));
    document.getElementById('screenDisplay').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
}

// DECIMAL POINT
function decimalPoint() {
    if (document.getElementById('decimalVar').value == 1) { // This function prevents multiple decimal points
        document.getElementById('decimalVar').value = 1;
    }

    if (parseInt(document.getElementById('operation').value)) { // If this is an empty string, it will return false
        document.getElementById('screenDisplay').value = 0;
    }
}

// PLUSMINUS
function plusminus() {
    let x = parseFloat(document.getElementById('screenDisplay').value);

    x *= -1;

    document.getElementById('screenDisplay').value = x;
}

// PERCENT
function percent() {
    let x = parseFloat(document.getElementById('screenDisplay').value);

    x *= 0.01;

    document.getElementById('screenDisplay').value = x;
}

// SQUARE
function square() {
    let x = parseFloat(document.getElementById('screenDisplay').value);

    x *= x;

    document.getElementById('screenDisplay').value = x;
}