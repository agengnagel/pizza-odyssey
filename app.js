'use strict';

function Pizza3001(locationName, storeData) {
  this.locationName= locationName;
  this.storeData= storeData;
  this.hourlyPizzas = [];
  this.hourlyDeliveries= [];
  this.makeRandoms();
}

function generateRandom (min, max) {
  return Math.floor((Math.random() * (max - min) + 1)) + min;
}

Pizza3001.prototype.makeRandoms= function (){
  for (var i=0; i<this.storeData.length; i++) {
    for (var j=0; j<3; j++) {
      var tempPizza= generateRandom ([i][0], [i][1])
      this.hourlyPizzas.push(tempPizza);
      var tempDeliver= generateRandom ([i][2],[i][3]);
      this.hourlyDeliveries.push(tempDeliver);
    }
  }
};

var ballardData = [[0,4,0,4],[0,7,0,4],[2,15,1,4], [15,35,3,8], [12,31,5,12] [5,20,6,11]];

var firsthillData = [[1,3,1,7],[ 5,9,2,8],[2,13,1,6], [18,32,3,9], [1,3,5,12] [8,20,6,16]];

var ballard = new Pizza3001 ('ballard', ballardData);
var firsthill= new Pizza3001 ('firsthill', firsthillData);

var pizzatable = document.getElementById('pizzatable');
var tableHead = ['Hours'];

var rowOne = createTableRow(ballard.hourlyPizzas);
var rowTwo= createTableRow (ballard.hourlyDeliveries);

function createTableRow (infoArray) {
  var newTR = document.createElement('tr');
  for(var i=0; i<infoArray.length; i++){
    var newTD = document.createElement('td');
    newTD.textContent = infoArray[i];
    newTR.appendChild(newTD);
  }
  return newTR;
}
var headerRow = createTableRow(tableHead);
var ballardRow = createTableRow(ballard.hourlyPizzas);


pizzatable.appendChild(headerRow);
pizzatable.appendChild(rowOne);
pizzatable.appendChild(rowTwo);
