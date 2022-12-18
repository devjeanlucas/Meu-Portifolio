
//barra de navegação surgindo
let navigation = document.querySelector('.navigation')
var waypoint = new Waypoint({
    element: document.querySelector('.navigation'),
    handler: function() {
      navigation.classList.toggle('display-flex')
    },
    offset:'-10%'
  })
 
//lista automatica das skills
let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function () { 
  nextImage()
 }, 3000)

 function nextImage () {
  count++
  if (count>3) {
    count = 1;
  }
  document.getElementById("slide"+count).checked = true;
 }