// main.js - hamburger toggle
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if(btn && nav){
    btn.addEventListener('click', function(){ nav.classList.toggle('open'); });
  }
  var btn2 = document.getElementById('navToggle2');
  var nav2 = document.getElementById('mainNav2');
  if(btn2 && nav2){
    btn2.addEventListener('click', function(){ nav2.classList.toggle('open'); });
  }
});