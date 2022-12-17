
let navigation = document.querySelector('.navigation')
var waypoint = new Waypoint({
    element: document.querySelector('.navigation'),
    handler: function() {
      navigation.classList.toggle('display-flex')
    },
    offset:'-10%'
  })
 