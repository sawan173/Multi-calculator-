// Dark Mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = toggleBtn.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
// Load theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Percentage
function calculatePercentage() {
  let v = parseFloat(document.getElementById('percentValue').value);
  let p = parseFloat(document.getElementById('percentOf').value);
  document.getElementById('percentResult').innerText = (v * p / 100).toFixed(2);
}
// BMI
function calculateBMI() {
  let w = parseFloat(document.getElementById('bmiWeight').value);
  let h = parseFloat(document.getElementById('bmiHeight').value) / 100;
  let bmi = (w / (h*h)).toFixed(2);
  let cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  document.getElementById('bmiResult').innerText = `BMI: ${bmi} (${cat})`;
}
// EMI
function calculateEMI() {
  let p = parseFloat(document.getElementById('loanAmount').value);
  let r = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  let n = parseFloat(document.getElementById('loanTenure').value);
  let emi = (p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  document.getElementById('emiResult').innerText = `EMI: ₹${emi.toFixed(2)}`;
}
// Age
function calculateAge() {
  let dob = new Date(document.getElementById('dob').value);
  let diff = Date.now() - dob.getTime();
  let age = new Date(diff);
  let years = age.getUTCFullYear() - 1970;
  document.getElementById('ageResult').innerText = `${years} years`;
}
// Discount
function calculateDiscount() {
  let price = parseFloat(document.getElementById('originalPrice').value);
  let disc = parseFloat(document.getElementById('discountPercent').value);
  let discountAmount = price * disc / 100;
  let finalPrice = price - discountAmount;
  document.getElementById('discountResult').innerText = `Discount: ₹${discountAmount.toFixed(2)}, Final: ₹${finalPrice.toFixed(2)}`;
}
// GST
function addGST() {
  let amt = parseFloat(document.getElementById('gstAmount').value);
  let rate = parseFloat(document.getElementById('gstRate').value);
  let gst = amt * rate / 100;
  let total = amt + gst;
  document.getElementById('gstResult').innerText = `GST: ₹${gst.toFixed(2)}, Total: ₹${total.toFixed(2)}`;
}
function removeGST() {
  let amt = parseFloat(document.getElementById('gstAmount').value);
  let rate = parseFloat(document.getElementById('gstRate').value);
  let base = amt / (1 + rate/100);
  let gst = amt - base;
  document.getElementById('gstResult').innerText = `Base: ₹${base.toFixed(2)}, GST: ₹${gst.toFixed(2)}`;
}
// Unit Converter
function convertUnit() {
  let type = document.getElementById('unitType').value;
  let val = parseFloat(document.getElementById('unitInput').value);
  let res = "";
  if(type === "length") res = `${val} m = ${val*100} cm`;
  else if(type === "weight") res = `${val} kg = ${val*1000} g`;
  else if(type === "temp") res = `${val} °C = ${(val*9/5+32).toFixed(2)} °F`;
  document.getElementById('unitResult').innerText = res;
}
// CGPA
function calculateCGPA() {
  let marks = document.getElementById('marksInput').value.split(',').map(Number);
  let total = marks.reduce((a,b)=>a+b,0);
  let cgpa = (total/marks.length)/9.5;
  document.getElementById('cgpaResult').innerText = `CGPA: ${cgpa.toFixed(2)}`;
}
