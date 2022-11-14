function btnEqualPress() {
    var equation = document.getElementById("screen").value;
    var total = 0;
    var numbers = [];
    if (equation.split("+").length > 1) {

        numbers = equation.split("+");

        for (var i = 0; i < numbers.length; i++) {
            total += Number(numbers[i]);

        }
    }
    else if (equation.split("-").length > 1) {
        numbers = equation.split("-");
        total = Number(numbers[0]);
        for (var i = 1; i <= numbers.length; i++) {
            total -= Number(numbers[i]);

        }
    }
    else if (equation.split("*").length > 1) {
        numbers = equation.split("*");
        total = 1;
        for (var i = 0; i < numbers.length; i++) {
            total *= Number(numbers[i]);
        }
    }
    else {
        numbers = equation.split("/");
        total = Number(numbers[0]);
        for (var i = 1; i < numbers.length; i++) {
            total /= Number(numbers[i]);
            console.log(total)
        }
    }
    document.getElementById("screen").value = total;
}

function numberAdded(clicked_id) {
    var numberToScreen = clicked_id.slice(-1);

    switch (clicked_id) {
        case ("button_dot"):
            numberToScreen = ".";
            break;
        case ("button_add"):
            numberToScreen = "+";
            break;
        case ("button_subs"):
            numberToScreen = "-";
            break;
        case ("button_mul"):
            numberToScreen = "*";
            break;
        case ("button_div"):
            numberToScreen = "/";
            break;
    }
    var item = document.getElementById("screen").value;
    item += numberToScreen;
    document.getElementById("screen").value = item;
}

function clearScreen() {
    document.getElementById("screen").value = "";

}