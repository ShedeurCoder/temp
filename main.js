document.getElementById('inputs').onsubmit = function() {
 
    //create variables
    var to = document.getElementById("to"); 
    var from = document.getElementById("from");
    var tempinput = document.getElementById("temp").value;

    //do logic
    if (from.value == "c" && to.value == "fto") {
        var temp = tempinput;
        temp = (temp * (9 / 5)) + 32;
        document.getElementById("result").innerHTML = temp + "℉";
        return false;
    } else if (from.value == "f" && to.value == "cto") {
        var temp = tempinput;
        temp = (temp - 32) * (5 / 9);
        document.getElementById("result").innerHTML = temp + "℃";
        return false;
    } else if (from.value == "k" && to.value == "cto") {
        var temp = tempinput;
        temp = temp - 273.15;
        document.getElementById("result").innerHTML = temp + "℃";
        return false;
    } else if (from.value == "c" && to.value == "kto") {
        var temp = tempinput;
        temp = ((temp * 1) + (273.15 * 1));
        document.getElementById("result").innerHTML = temp + "K";
        return false
    } else if (from.value == "k" && to.value == "fto") {
        var temp = tempinput;
        temp = (temp - 273.15) * (9 / 5) + 32;
        document.getElementById("result").innerHTML = temp + "℉";
        return false;
    } else if (from.value == "f" && to.value == "kto") {
        var temp = tempinput;
        temp = (temp - 32) * (5 / 9) + 273.15;
        document.getElementById("result").innerHTML = temp + "K";
        return false;
    } else if ((from.value == "f" && to.value == "fto") || (from.value == "c" && to.value == "cto") || (from.value == "k" && to.value == "kto")) {
        alert("Please put two different types of temperature measurment to calculate.");
        return false;
    }


return false;
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("darkModeToggle");
    button.classList.toggle("currentlyDark");
}