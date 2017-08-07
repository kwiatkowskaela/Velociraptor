// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var partOftext = text.slice(0, 72.5);
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var partOftextCharsAfter = partOftext.replace('Velociraptor', dinosaurUpperCased);

console.log(partOftextCharsAfter);

/*
// wersja mini

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var result = text.replace('Velociraptor', 'Triceratops'.toUpperCase()).slice(0, 72.5);

console.log(result);*/
