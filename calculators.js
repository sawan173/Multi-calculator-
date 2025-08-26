/* ================================
   BMI Calculator
================================ */
function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value) / 100; // in meters
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        document.getElementById("bmiResult").innerHTML = "⚠️ Please enter valid values";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    document.getElementById("bmiResult").innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
}

/* ================================
   EMI Calculator
================================ */
function calculateEMI() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
    let time = parseFloat(document.getElementById("time").value) * 12;

    if (!principal || !rate || !time) {
        document.getElementById("emiResult").innerHTML = "⚠️ Please enter valid values";
        return;
    }

    let emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    document.getElementById("emiResult").innerHTML = `Monthly EMI: <b>₹${emi.toFixed(2)}</b>`;
}

/* ================================
   GST Calculator
================================ */
function calculateGST() {
    let amount = parseFloat(document.getElementById("gstAmount").value);
    let rate = parseFloat(document.getElementById("gstRate").value);

    if (!amount || !rate) {
        document.getElementById("gstResult").innerHTML = "⚠️ Please enter valid values";
        return;
    }

    let gst = (amount * rate) / 100;
    let total = amount + gst;

    document.getElementById("gstResult").innerHTML = `GST: <b>₹${gst.toFixed(2)}</b> <br> Total: <b>₹${total.toFixed(2)}</b>`;
}

/* ================================
   SIP Calculator
================================ */
function calculateSIP() {
    let monthly = parseFloat(document.getElementById("sipMonthly").value);
    let rate = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
    let years = parseFloat(document.getElementById("sipYears").value);
    let months = years * 12;

    if (!monthly || !rate || !years) {
        document.getElementById("sipResult").innerHTML = "⚠️ Please enter valid values";
        return;
    }

    let futureValue = monthly * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    document.getElementById("sipResult").innerHTML = `Future Value: <b>₹${futureValue.toFixed(2)}</b>`;
}

/* ================================
   Currency Converter
   (Simple Example with fixed rates)
================================ */
function convertCurrency() {
    let amount = parseFloat(document.getElementById("currencyAmount").value);
    let rate = parseFloat(document.getElementById("currencyRate").value);

    if (!amount || !rate) {
        document.getElementById("currencyResult").innerHTML = "⚠️ Please enter valid values";
        return;
    }

    let converted = amount * rate;
    document.getElementById("currencyResult").innerHTML = `Converted Amount: <b>${converted.toFixed(2)}</b>`;
}
