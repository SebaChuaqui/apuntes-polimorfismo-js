class Pelicula {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

class Largometraje extends Pelicula {
    constructor(name, runTime) {
        super(name);
        this._runTime = runTime;
    }
    getRuntime() {
        return this._runTime;
    }
    setRuntime(runTime) {
        this._runTime = runTime;
    }
}

class Cortometraje extends Pelicula {
    constructor(name, runTime) {
        super(name);
        this._runTime = runTime;
    }
    getRuntime() {
        return this._runTime;
    }
    setRuntime(runTime) {
        this._runTime = runTime;
    }
}

class MyApp {
    play(Pelicula) {
        const result = `la película ${Pelicula.getName()} se está
    reproduciendo...tiene una duración de ${Pelicula.getRuntime()}`;
        return result;
    }
}

const largometraje = new Largometraje('Sin City', '105min');
const cortometraje = new Cortometraje('Hulk vs Wolverine', '20min');

const myApp1 = new MyApp();
const playing = myApp1.play(largometraje);
console.log(playing);

const playing2 = myApp1.play(cortometraje);
console.log(playing2);



