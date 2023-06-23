//ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.//
class Animal {
  hacerSonido() {}
}

class Perro extends Animal {
  hacerSonido() {
    return "Guau";
  }
}

class Gato extends Animal {
  hacerSonido() {
    return "Miau";
  }
}

const perro = new Perro();
console.log(perro.hacerSonido());
const gato = new Gato();
console.log(gato.hacerSonido());