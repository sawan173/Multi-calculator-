// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark-mode');
}

// Simple example for calculators
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  if(weight && height){
    const bmi = weight / ((height/100) ** 2);
    document.getElementById('bmiResult').innerText = `Your BMI: ${bmi.toFixed(2)}`;
  } else {
    document.getElementById('bmiResult').innerText = 'Please enter valid values';
  }
}
