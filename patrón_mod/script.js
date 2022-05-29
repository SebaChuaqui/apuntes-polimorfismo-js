(function () {
    var interna = "Variable dentro de la IIFE";
    console.log(interna);
})();
console.log(interna);

var lenguaje= "Ruby";
(function(){
var lenguaje= "JavaScript";
console.log(lenguaje + " es un lenguaje de programación");
})();
console.log(lenguaje);

const saludos = "Hola";
(function(){
    saludos = "¿Como estas?";
    console.log(saludos + " eso fue un saludo ");
}());

