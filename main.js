// Toggle mobile nav
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('siteNav');
btn.addEventListener('click', () => {
  const exp = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!exp));
  nav.hidden = exp;
});

// BMI
function calcBMI() {
  const h = parseFloat(document.getElementById('heightCm').value);
  const w = parseFloat(document.getElementById('weightKg').value);
  if (!h || !w) return alert("Enter height and weight");
  const m = h / 100;
  const bmi = +(w / (m * m)).toFixed(1);
  const cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  document.getElementById('bmiResult').textContent = `BMI: ${bmi} (${cat})`;
}

// Age
function calcAge() {
  const dob = document.getElementById('dob').value;
  if (!dob) return alert("Select DOB");
  const birth = new Date(dob);
  const diff = Date.now() - birth.getTime();
  const age = new Date(diff).getUTCFullYear() - 1970;
  document.getElementById('ageResult').textContent = `Age: ${age} years`;
}

// EMI
function calcEMI() {
  const P = parseFloat(document.getElementById('loanAmount').value);
  const r = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const n = parseInt(document.getElementById('tenure').value);
  if (!P || !r || !n) return alert("Fill all loan details");
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById('emiResult').textContent = `EMI: ₹${emi.toFixed(2)}`;
}

// Percentage
function calcPercent() {
  const part = parseFloat(document.getElementById('part').value);
  const total = parseFloat(document.getElementById('total').value);
  if (!part || !total) return alert("Enter both values");
  const pct = ((part / total) * 100).toFixed(2);
  document.getElementById('percentResult').textContent = `${pct}%`;
}
