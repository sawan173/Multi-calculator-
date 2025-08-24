
// reveal on scroll
const io=new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const show=(el,txt)=>{el.textContent=txt;el.classList.add('show')};

// calculators (each page only uses what it needs)
function calcPercentage(){const p=parseFloat(part.value),t=parseFloat(total.value); if(t>0) show(percentageResult,((p/t)*100).toFixed(2)+' %')}
function calcBMI(){const w=parseFloat(weight.value),h=parseFloat(height.value)/100; if(w>0&&h>0){const bmi=(w/(h*h)).toFixed(2); let c=''; if(bmi<18.5) c='(Underweight)'; else if(bmi<24.9)c='(Normal)'; else if(bmi<29.9)c='(Overweight)'; else c='(Obese)'; show(bmiResult,'BMI: '+bmi+' '+c);}}
function calcEMI(){const P=parseFloat(loan.value),R=parseFloat(rate.value)/1200,N=parseFloat(tenure.value); if(P>0&&R>0&&N>0){const emi=(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1); show(emiResult,'Monthly EMI: '+emi.toFixed(2));}}
function calcAge(){const d=new Date(dob.value); if(!isNaN(d)){const diff=new Date(Date.now()-d.getTime()); const y=diff.getUTCFullYear()-1970; show(ageResult,'Age: '+y+' years');}}
function calcDiscount(){const price=parseFloat(priceInput.value),d=parseFloat(disc.value); if(price>0&&d>=0){const final=price-price*(d/100); show(discountResult,'Final Price: '+final.toFixed(2));}}
function calcGST(){const a=parseFloat(amount.value),r=parseFloat(gstrate.value); if(a>0&&r>=0){const gst=a*(r/100),total=a+gst; show(gstResult,'GST: '+gst.toFixed(2)+' | Total: '+total.toFixed(2));}}
function convertUnit(){const cmv=parseFloat(cm.value); if(cmv>=0) show(unitResult,(cmv/100).toFixed(4)+' meters')}
function calcCGPA(){const m1=parseFloat(m1i.value)||0,m2=parseFloat(m2i.value)||0,m3=parseFloat(m3i.value)||0; const cgpa=(((m1+m2+m3)/3)/9.5).toFixed(2); show(cgpaResult,'CGPA: '+cgpa)}
