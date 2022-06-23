//////////////intervalos//////////////
var lista = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o"
  ];
  var indice1 = 0;
  var indice2 = 4;
  var lista2 = [];
  while (indice2 <= lista.length) {
    lista2 = lista.slice(indice1, indice2);
    console.log(lista2);
  
    indice1 = indice1 + 1;
    indice2 = indice2 + 1;
    lista2.splice(0, lista2.length);
  }

///////////////////Operadores////////////////////////////////
  
  function numeroAleatorioDecimales(min, max) {
    var numero2 = max - min;
    var num = Math.floor(Math.random() * (numero2 + 1) + min);
    console.log(num);
  }
  
  var x = numeroAleatorioDecimales(6, 10);
  var y = numeroAleatorioDecimales(6, 10);
  
  var resta = x - y;
  
  if (resta > 0 && resta < 0) {
    console.log("El resultado de la resta de 'y' de 'x' es igual a 0");
  } else if (resta < 0) {
    console.log("El numero 'x' es menor a 'y'\n");
  } else {
    console.log("El numero 'x' es mayor a 'y'\n");
  }
  


///////////////////////Listas/////////////////////////////////////
  

  
var autos=[{"id":1, "marca":"Chevrolet", "año":2010, "color":"negro"},
{"id":2, "marca":"Nissan", "año":2016, "color":"gris"},
{"id":3, "marca":"Nissan", "año":2020, "color":"azul"},
{"id":4, "marca":"Ford", "año":2015, "color":"blanco"},
{"id":5, "marca":"Hyundai", "año":2012, "color":"negro"},
{"id":6, "marca":"Chevrolet", "año":2015, "color":"gris"}]
 
var buscar="Nissan";
console.log("metodo find()");
var resultado=autos.find(auto=>auto.marca===buscar)

console.log(resultado);
console.log("\n");

autos.push({"id":7,"marca":"Nissan","año":2011,"color":"rojo"});
console.log("metodo filter: ")
var busqueda=autos.filter(auto=>auto.marca===buscar);
console.log(busqueda)