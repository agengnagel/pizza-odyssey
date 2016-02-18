'use strict';

function Pizza3001(locationName, storeData) {
  this.locationName= locationName;
  this.openhours=['8:00am', '9:00am','10:00am', '11:00am','12:00pm', '1:00pm','12:00pm', '1:00pm','2:00pm', '3:00pm','4:00pm', '5:00pm','6:00pm', '7:00pm','8:00pm', '9:00pm','10:00pm', '11:00pm','12:00am', '1:00am','2:00am'];
  this.storeData= storeData;
  this.hourlyPizzas = [];
  this.hourlyDeliveries= [];
};

var ballardData = [[0,4,0,4],[0,7,0,4],[2,15,1,4], [15,35,3,8], [12,31,5,12] [5,20,6,11]];
var firsthillData = [[1,3,1,7],[ 5,9,2,8],[2,13,1,6], [18,32,3,9], [1,3,5,12] [8,20,6,16]];
var firsthill= new Pizza3001 ('First Hill', firsthillData);

Pizza3001.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Pizza3001.prototype.makeRandoms= function (){
  for (var i=0; i<this.storeData.length; i++) {
    for (var j=0; j<3; j++) {
      var tempPizza= this.generateRandom ([i][0], [i][1])
      this.hourlyPizzas.push(tempPizza);
      var tempDeliver= this.generateRandom ([i][2],[i][3]);
      this.hourlyDeliveries.push(tempDeliver);
    }
  }
};

var ballard = new Pizza3001 ('Ballard', ballardData);
ballard.makeRandoms();


Pizza3001.prototype.render= function(){
  this.makeRandoms();
  var shopTable = document.createElement('pizzatable');
  var trHeader1= document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trHeader1.appendChild(tdEl);

  shopTable.appendChild(trHeader1);

//second header
  var trHeader2 = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = 'Time';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'Pizzas';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'Deliveries';
  trHeader2.appendChild(tdEl);

  shopTable.appendChild(trHeader2);

  for (var i = 0; i < this.openhours.length; i++) {

    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = this.openhours[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.makeRandoms[i];
    trEl.appendChild(tdEl);

    shopTable.appendChild(trEl);
  }

  document.body.appendChild(shopTable);
}

ballard.render();
firsthill.render();
