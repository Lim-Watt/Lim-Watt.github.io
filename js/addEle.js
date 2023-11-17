var cardinfoBox = document.getElementsByClassName('card-info')[0].children[0];
console.log(cardinfoBox);
var newheadBox = document.createElement('div');
newheadBox.classList.add('newheadBox');
cardinfoBox.classList.add('centerBox');
cardinfoBox.insertBefore(newheadBox,cardinfoBox.childNodes[0]);