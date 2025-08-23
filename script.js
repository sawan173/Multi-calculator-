window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value / 100;
  if (weight && height) {
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').innerText = "Your BMI: " + bmi;
  } else {
    document.getElementById('bmi-result').innerText = "Please enter valid values.";
  }
}

function calculateAge() {
  let dob = document.getElementById('dob').value;
  if (dob) {
    let birthDate = new Date(dob);
    let diff = Date.now() - birthDate.getTime();
    let age = new Date(diff).getUTCFullYear() - 1970;
    document.getElementById('age-result').innerText = "Your Age: " + age + " years";
  } else {
    document.getElementById('age-result').innerText = "Please select a date.";
  }
}

function calculateEMI() {
  let loan = document.getElementById('loan').value;
  let rate = document.getElementById('rate').value / 1200;
  let tenure = document.getElementById('tenure').value;
  if (loan && rate && tenure) {
    let emi = (loan * rate * Math.pow(1+rate, tenure)) / (Math.pow(1+rate, tenure) - 1);
    document.getElementById('emi-result').innerText = "Your EMI: ₹" + emi.toFixed(2);
  } else {
    document.getElementById('emi-result').innerText = "Please enter all values.";
  }
}

function calculatePercentage() {
  let part = document.getElementById('part').value;
  let total = document.getElementById('total').value;
  if (part && total) {
    let percent = (part / total * 100).toFixed(2);
    document.getElementById('percentage-result').innerText = "Result: " + percent + "%";
  } else {
    document.getElementById('percentage-result').innerText = "Please enter valid values.";
  }
}
