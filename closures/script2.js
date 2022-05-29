let a = 1;
function global() {
console.log(a);
function interno(){
console.log(a);
}
interno();
}
