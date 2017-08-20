import Dashboard from './dashboard.js'

const theme = document.querySelector('.theme');
const menu = document.querySelector('.theme-options__start');

menu.addEventListener('click', ()=>{
  theme.style.visibility = 'hidden';
  theme.style.opacity = '0';
<<<<<<< HEAD

=======
  
>>>>>>> 04d1bdda4b2e59b0b3a5e1b92ca2bb527f15fd70
  let dash = new Dashboard();
  dash.init()
})
