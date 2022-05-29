a = 1;
function mostrar(){
    a = 2;
    function ocultar(){
        a = 3;
        console.log(a);
    }
    console.log(a);
    ocultar();
}
mostrar();
console.log(a);
