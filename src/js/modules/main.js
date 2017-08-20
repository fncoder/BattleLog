import Dashboard from './dashboard.js'

const theme = document.querySelector('.theme');
const menu = document.querySelector('.theme-options__start');

menu.addEventListener('click', ()=>{
  theme.style.visibility = 'hidden';
  theme.style.opacity = '0';
  
  let dash = new Dashboard();
  dash.init()
})
