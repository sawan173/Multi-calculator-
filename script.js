document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.calc-card').forEach(card => card.classList.remove('active'));
    document.getElementById(item.dataset.target).classList.add('active');
  });
});

function calculatePercentage() {
  let value = parseFloat(document.getElementById("percentValue").value);
  let total = parseFloat(document.getElementById("percentTotal").value);
  if(total > 0) {
    document.getElementById("percentResult").innerText = (value/total*100).toFixed(2) + "%";
  }
}

function calculateBMI() {
  let w = parseFloat(document.getElementById("bmiWeight").value);
  let h = parseFloat(document.getElementById("bmiHeight").value)/100;
  if(w > 0 && h > 0) {
    let bmi = w/(h*h);
    document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2);
  }
}

function calculateEMI() {
  let p = parseFloat(document.getElementById("emiLoan").value);
  let r = parseFloat(document.getElementById("emiRate").value)/12/100;
  let n = parseFloat(document.getElementById("emiTime").value);
  if(p && r && n) {
    let emi = (p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    document.getElementById("emiResult").innerText = "EMI: " + emi.toFixed(2);
  }
}

function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  if(dob) {
    let diff = Date.now() - dob.getTime();
    let age = new Date(diff).getUTCFullYear() - 1970;
    document.getElementById("ageResult").innerText = "Age: " + age + " years";
  }
}

function calculateDiscount() {
  let price = parseFloat(document.getElementById("discPrice").value);
  let percent = parseFloat(document.getElementById("discPercent").value);
  if(price && percent) {
    let final = price - (price*percent/100);
    document.getElementById("discountResult").innerText = "Final Price: " + final.toFixed(2);
  }
}

function calculateGST() {
  let amt = parseFloat(document.getElementById("gstAmount").value);
  let gst = parseFloat(document.getElementById("gstRate").value);
  if(amt && gst) {
    let total = amt + (amt*gst/100);
    document.getElementById("gstResult").innerText = "Total with GST: " + total.toFixed(2);
  }
}

function convertUnit() {
  let km = parseFloat(document.getElementById("kmValue").value);
  if(km) {
    let miles = km*0.621371;
    document.getElementById("unitResult").innerText = km + " km = " + miles.toFixed(2) + " miles";
  }
}

function calculateCGPA() {
  let marks = parseFloat(document.getElementById("cgpaMarks").value);
  if(marks) {
    let cgpa = (marks/10).toFixed(2);
    document.getElementById("cgpaResult").innerText = "CGPA: " + cgpa;
  }
}
