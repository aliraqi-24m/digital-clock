var title = document.getElementById('title');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
// ////////////////////

setInterval(()=>{
if (hours !== new Date().getHours()) {
  if (new Date().getHours() < 10) { 
    hours.innerHTML = "0" + new Date().getHours();
  }else {
    hours.innerHTML = new Date().getHours();
  }
}
},10);
////////////////////
setInterval(()=>{
if (minutes !== new Date().getMinutes()) {
  if (new Date().getMinutes() < 10) { 
    minutes.innerHTML = "0" + new Date().getMinutes();
  }else {
    minutes.innerHTML = new Date().getMinutes();
  }
}
},10);
////////////////////
setInterval(()=>{
if (seconds !== new Date().getSeconds()) {
  if (new Date().getSeconds() < 10) { 
    seconds.innerHTML = "0" + new Date().getSeconds();
  }else {
    seconds.innerHTML = new Date().getSeconds();
  }
}
},10);
/////////////////////////////////////////
setInterval(()=>{
  if (window.navigator.onLine == true) {
    title.style.color = "#1bc91b";
  
  }else if (window.navigator.onLine == false) {
    title.style.color = "#777";
  }
},0);
////////////////////
function Reload() {
  document.location.assign(window.location.pathname);
}