function local() {
    let a = 2;
    function interna() {
        console.log(a);
    }
    console.log(a);
    interna();
}
local();
