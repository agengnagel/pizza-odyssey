'use strict';


function generateRandom (min, max) {
  return Math.floor((Math.random() * (max - min) + 1)) + min;
}

function pizzaAndDeliveries(time) {
  var pizzas = 0
  var deliveries = 0

  if (time >= 8 && time < 11) {
    pizzas= generateRandom (0,4);
    deliveries= generateRandom(0,4);
  }
else if (time >= 11 && time <14) {
  pizzas= generateRandom (0,7);
  deliveries= generateRandom(0,4);
}
else if (time >= 14 && time <17) {
  pizzas= generateRandom (2,15);
  deliveries= generateRandom(1,4);
}
else if (time >= 17 && time <20) {
  pizzas= generateRandom (15,35);
  deliveries= generateRandom(3,8);
}
else if (time >= 20 && time <23) {
  pizzas= generateRandom (12,31);
  deliveries= generateRandom(5,12);
}
else if (time >= 23 && time <= 2) {
  pizzas= generateRandom (5,20);
  deliveries= generateRandom(6,11);
}
  return[pizzas,deliveries];
}

function putstuffinarray() {
  var allthestuff = [];
  for (var i=8; i<=23; i++){
    var PandD= pizzaAndDeliveries(i)

    allthestuff.push(i +':00'+ PandD[0] + ' pizzas ' + PandD[1] + ' deliveries ')
    for (var j=0; j<=2; j++){
      allthestuff.push(j +':00'+ PandD[0] + ' pizzas ' + PandD[1] + ' deliveries ')
    }
    return allthestuff;
  }
}

var thingstobelisted = putstuffinarray()
var placeformylist= document.getElementById('ballard')
function listify(placeformylist, thingstobelisted) {
  for (var i=0; i<thingstobelisted.length; i++)
    var liEl = document.createElement('li');
  liEl.textContent = listed[i];
  placeformylist.appendChild(liEl);
}
