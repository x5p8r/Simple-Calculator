function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        if (expression) {
            document.getElementById("display").value = eval(expression);
        }
    } catch {
        document.getElementById("display").value = "خطأ";
    }
}
