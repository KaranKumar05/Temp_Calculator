function Celsius() {
    event.preventDefault();
    let input_Temp = document.getElementById("input_temp").value;
    input_Temp = Number(input_Temp);
    result = (input_Temp * 9 / 5) + 32;
    document.getElementById("answer").textContent = "Temp in (°F): " + result.toFixed(2) + "°F";

    if (input_Temp <= 20) {
        document.getElementById("message").textContent = "It's cold outside, so it's necessary to bring a jacket.";
    } else if (input_Temp <= 25) {
        document.getElementById("message").textContent = "If you're riding a bike, then carry a jacket.";
    } else if (input_Temp <= 30) {
        document.getElementById("message").textContent = "The temperature is normal, so a jacket is not needed.";
    } else {
        document.getElementById("message").textContent = "It's hot outside on this sunny day.";
    }
}
function Fahrenheit() {
    event.preventDefault();
    let input_Temp = document.getElementById("input_temp").value;
    input_Temp = Number(input_Temp);
    result = (input_Temp - 32) * 5 / 9;
    document.getElementById("answer").textContent = "Temp in (°C): " + result.toFixed(2) + "°C";
    if (input_Temp <= 68) {
        document.getElementById("message").textContent = "It's cold outside, so it's necessary to bring a jacket.";
    } else if (input_Temp <= 77) {
        document.getElementById("message").textContent = "If you're riding a bike, then carry a jacket.";
    } else if (input_Temp <= 86) {
        document.getElementById("message").textContent = "The temperature is normal, so a jacket is not needed.";
    } else {
        document.getElementById("message").textContent = "It's hot outside on this sunny day.";
    }
}