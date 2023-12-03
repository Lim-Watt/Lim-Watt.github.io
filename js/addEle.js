var cardinfoBox = document.getElementsByClassName('card-info')[0].children[0];
console.log(cardinfoBox);
var newheadBox = document.createElement('div');
newheadBox.classList.add('newheadBox');
cardinfoBox.classList.add('centerBox');
cardinfoBox.insertBefore(newheadBox,cardinfoBox.childNodes[0]);

var cardinfoBox2 = document.getElementsByClassName('card-info2')[0].children[0];
console.log(cardinfoBox2);
var newheadBox2 = document.createElement('div');
newheadBox2.classList.add('newheadBox2');
cardinfoBox2.classList.add('centerBox');
cardinfoBox2.insertBefore(newheadBox2,cardinfoBox2.childNodes[0]);
