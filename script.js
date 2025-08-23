function calculateBMI(event){
  event.preventDefault();
  let w = parseFloat(document.getElementById('weight').value);
  let h = parseFloat(document.getElementById('height').value)/100;
  let bmi = (w/(h*h)).toFixed(2);
  let status = "";
  if(bmi < 18.5) status="Underweight";
  else if(bmi < 24.9) status="Normal";
  else if(bmi < 29.9) status="Overweight";
  else status="Obese";
  document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${status})`;
}

function calculateAge(event){
  event.preventDefault();
  let dob = new Date(document.getElementById('dob').value);
  let today = new Date();
  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  if(ageMonths < 0){ ageYears--; ageMonths += 12; }
  document.getElementById('ageResult').innerText = `You are ${ageYears} years and ${ageMonths} months old.`;
}