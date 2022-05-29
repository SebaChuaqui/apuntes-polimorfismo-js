const moduloPrueba = (() => {
    let contador = 0;
    return {
        incrementaContador: () => {
            return contador++;
        },
        reseteoContador: () => {
            console.log(`valor del contador antes de reiniciar:
    ${contador}`);
            contador = 0;
        }
    };
})();

moduloPrueba.incrementaContador();
moduloPrueba.incrementaContador();
moduloPrueba.incrementaContador();
moduloPrueba.reseteoContador();
