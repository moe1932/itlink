// mobile responsive
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})
// read more button
const readbutt = document.querySelector('#read1');
readbutt.addEventListener('hover',function(){
  readbutt.classList.toggle('is-active');
})