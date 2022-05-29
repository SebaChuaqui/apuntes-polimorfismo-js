const miEspacio = (() => {
    let miVariablePrivada, miMetodoPrivado;
    miVariablePrivada = 0;
    miMetodoPrivado = (valor1) => {
        console.log(valor1);
    };
    return {
        // Una variable pública
        miVariablePublica: "hola",
        // Una función pública que utiliza los elementos privados
        miFuncionPublica: (valor2) => {
            miVariablePrivada++;
            miMetodoPrivado(valor2);
            console.log(miVariablePrivada);
        }
    }
})();

miEspacio.miFuncionPublica("saludos");
