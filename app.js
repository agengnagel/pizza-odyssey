'use strict';

function Pizza3001(locationName, storeData,totalPizzas) {
  this.locationName= locationName;
  this.openhours=['8:00am-11:00am','11:00am-2:00pm','2:00pm-5:00pm','5:00pm-8:00pm', '8:00pm-11:00pm','11:00pm-2:00am'];
  this.storeData= storeData;
  this.hourlyPizzas = [];
  this.hourlyDeliveries= [];
  this.totalPizzas= totalPizzas;
};

Pizza3001.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Pizza3001.prototype.makeRandoms= function (){
  for (var i=0; i<this.storeData.length; i++) {
    // for (var j=0; j<3; j++) {
    var tempPizza = this.generateRandom (this.storeData[i][0], this.storeData[i][1])
    this.hourlyPizzas.push(tempPizza);

    var tempDeliver= this.generateRandom (this.storeData[i][2],this.storeData[i][3]);
    this.hourlyDeliveries.push(tempDeliver);
  }
  // }
};

var total = 0;
Pizza3001.prototype.addPizzas= function (){
  for(var i = 0; i < this.hourlyPizzas.length; i++){
    total += [i];
    this.totalPizzas= total;
    return this.totalPizzas;
  }
};

Pizza3001.prototype.render= function(){
  this.makeRandoms();
  this.addPizzas();


  var shopTable = document.createElement('table');
  console.log('shoptable', shopTable);
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
    tdEl.textContent = this.hourlyPizzas[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyDeliveries[i];
    trEl.appendChild(tdEl);


    shopTable.appendChild(trEl);
  }

  document.body.appendChild(shopTable);
};

var ballard = new Pizza3001 ('Ballard', ballardData);
var firsthill= new Pizza3001 ('First Hill', firsthillData);
var intdist= new Pizza3001 ('International District', intdistData);
var slu= new Pizza3001 ('South Lake Union', sluData);
var georgetown= new Pizza3001 ('Georgetown', georgetownData);
var ravenna= new Pizza3001 ('Ravenna', ravennaData);


ballard.render();
firsthill.render();
intdist.render();
slu.render();
georgetown.render();
ravenna.render();
