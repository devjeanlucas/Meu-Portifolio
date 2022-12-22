
//barra de navegação surgindo
let navigation = document.querySelector('.navigation')
var waypoint = new Waypoint({
    element: document.querySelector('.navigation'),
    handler: function() {
      navigation.classList.toggle('display-flex')
    },
    offset:'-5%'
  })
 
//lista automatica das skills
let count = 1;
//document.getElementById("slide1").checked = false;

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

 //waypoint da lista de projetos

let p1 = document.querySelector('#p1')
var waypoint = new Waypoint({
    element: document.querySelector('#p1'),
    handler: function() {
      p1.classList.toggle('opacity-right')
    },
    offset:'50%'
})
let p2 = document.querySelector('#p2')
var waypoint = new Waypoint({
    element: document.querySelector('#p2'),
    handler: function() {
      p2.classList.toggle('opacity-left')
    },
    offset:'50%'
})
let p3 = document.querySelector('#p3')
var waypoint = new Waypoint({
    element: document.querySelector('#p3'),
    handler: function() {
      p3.classList.toggle('opacity-right')
    },
    offset:'50%'
})
let p4 = document.querySelector('#p4')
var waypoint = new Waypoint({
    element: document.querySelector('#p4'),
    handler: function() {
      p4.classList.toggle('opacity-left')
    },
    offset:'50%'
})

//Overlay
var btn_to_overlays = document.querySelectorAll('.tog')
for (var c =0; c < btn_to_overlays.length; c++){
    btn_to_overlays[c].addEventListener('click', function() {
      var over = document.querySelector('.overlay')
      var form = document.querySelector('.formulario')

      over.classList.toggle('display-block')
      form.classList.toggle('display-block')
    })
}
let form = document.querySelector('.formulario')
form.addEventListener('submit', e => {
  e.preventDefault()
})