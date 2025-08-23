// Navbar toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("bmiWeight").value;
  let height = document.getElementById("bmiHeight").value / 100;
  if (weight && height) {
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
  }
}

// Age Calculator
function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  if (!isNaN(dob)) {
    let diff = Date.now() - dob.getTime();
    let age = new Date(diff).getUTCFullYear() - 1970;
    document.getElementById("ageResult").innerText = "Your Age: " + age + " years";
  }
}

// EMI Calculator
function calculateEMI() {
  let principal = parseFloat(document.getElementById("loanAmount").value);
  let rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  let tenure = parseFloat(document.getElementById("loanTenure").value);

  if (principal && rate && tenure) {
    let emi = (principal * rate * Math.pow(1 + rate, tenure)) /
              (Math.pow(1 + rate, tenure) - 1);
    document.getElementById("emiResult").innerText = "Your EMI: ₹" + emi.toFixed(2);
  }
}

// Percentage Calculator
function calculatePercentage() {
  let part = document.getElementById("part").value;
  let total = document.getElementById("total").value;
  if (part && total) {
    let percentage = (part / total) * 100;
    document.getElementById("percentageResult").innerText = "Percentage: " + percentage.toFixed(2) + "%";
  }
}
