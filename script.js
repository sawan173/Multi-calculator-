
// Theme toggle + persistence
const root = document.documentElement;
const toggle = () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark':'light');
};
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if(saved === 'dark'){ root.classList.add('dark'); }
  const btn = document.getElementById('themeToggle');
  if(btn) btn.addEventListener('click', toggle);
});

// Helpers
function copyToClipboard(text){
  if(navigator.clipboard){ navigator.clipboard.writeText(text); alert('Copied!'); }
  else{
    const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); document.body.removeChild(ta); alert('Copied!');
  }
}
async function shareText(text){
  try{
    if(navigator.share){ await navigator.share({text}); }
    else{ copyToClipboard(text); }
  }catch(e){ console.log(e); }
}
