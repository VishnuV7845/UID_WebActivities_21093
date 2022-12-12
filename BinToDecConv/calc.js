document.getElementById("button").addEventListener("click", function (e) {
    // Take user's input
    let input = document.getElementById("input").value;
    // Evaluate 
    // 1. If it's less than 8 characters long
    // 2. If it's only 0s and 1s

    // Create an array to check if the numbers are only 0s and 1s
    let array = input.split("");

    // Function to check each element of the array
    function is1Or0(element) {
        return (element === "1" || element === "0");
    }

    // Result of is 1 or 0 function
    const isCorrect = array.every(is1Or0);

    // If input is correct -> proceed
    // else add information about it
    if (isCorrect === true && input.length <= 8 && input !== "") {
        bin2Dec(input);
    } else {

        document.getElementById("alert").innerHTML = "Incorrect input";
        setTimeout(function () {
            document.getElementById("alert").innerHTML = "";
        }, 3000);
    }

    function bin2Dec(array) {
        let decimal;
        let firstElement = array[array.length - 1];
        let secondElement = array[array.length - 2];
        let thirdElement = array[array.length - 3];
        let fourthElement = array[array.length - 4];
        let fifthElement = array[array.length - 5];
        let sixthElement = array[array.length - 6];
        let seventhElement = array[array.length - 7];
        let eighthElement = array[array.length - 8];

        switch (array.length) {
            case 8:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4 + fourthElement * 8 + fifthElement * 16 + sixthElement * 32 + seventhElement * 64 + eighthElement * 128;
                break;
            case 7:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4 + fourthElement * 8 + fifthElement * 16 + sixthElement * 32 + seventhElement * 64;
                break;
            case 6:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4 + fourthElement * 8 + fifthElement * 16 + sixthElement * 32;
                break;
            case 5:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4 + fourthElement * 8 + fifthElement * 16;
                break;
            case 4:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4 + fourthElement * 8;
                break;
            case 3:
                decimal = firstElement * 1 + secondElement * 2 + thirdElement * 4;
                break;
            case 2:
                decimal = firstElement * 1 + secondElement * 2;
                break;
            case 1:
                decimal = firstElement * 1;
                break;
        }
        document.getElementById("output").innerHTML = decimal;
    }
    e.preventDefault();
});