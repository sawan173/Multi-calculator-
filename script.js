function calcPercentage(){
  let part = document.getElementById('part').value;
  let total = document.getElementById('total').value;
  let result = (part/total)*100;
  document.getElementById('percentageResult').innerText = "Result: " + result.toFixed(2) + "%";
}
function calcBMI(){
  let w = document.getElementById('weight').value;
  let h = document.getElementById('height').value;
  let result = w/(h*h);
  document.getElementById('bmiResult').innerText = "BMI: " + result.toFixed(2);
}
function calcEMI(){
  let P = document.getElementById('loan').value;
  let R = document.getElementById('rate').value/100/12;
  let N = document.getElementById('time').value*12;
  let emi = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
  document.getElementById('emiResult').innerText = "EMI: " + emi.toFixed(2);
}
function calcAge(){
  let dob = new Date(document.getElementById('dob').value);
  let diff = Date.now() - dob.getTime();
  let age = new Date(diff).getUTCFullYear() - 1970;
  document.getElementById('ageResult').innerText = "Age: " + age + " years";
}
function calcDiscount(){
  let price = document.getElementById('price').value;
  let rate = document.getElementById('discountRate').value;
  let discount = price*(rate/100);
  let finalPrice = price - discount;
  document.getElementById('discountResult').innerText = "Final Price: " + finalPrice;
}
function calcGST(){
  let amount = document.getElementById('amount').value;
  let rate = document.getElementById('gstRate').value;
  let gst = amount*(rate/100);
  document.getElementById('gstResult').innerText = "Total with GST: " + (parseFloat(amount)+gst);
}
function convertUnit(){
  let cm = document.getElementById('cm').value;
  document.getElementById('unitResult').innerText = "Meters: " + (cm/100);
}
function calcCGPA(){
  let m1 = parseFloat(document.getElementById('marks1').value);
  let m2 = parseFloat(document.getElementById('marks2').value);
  let m3 = parseFloat(document.getElementById('marks3').value);
  let cgpa = ((m1+m2+m3)/3)/9.5;
  document.getElementById('cgpaResult').innerText = "CGPA: " + cgpa.toFixed(2);
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});