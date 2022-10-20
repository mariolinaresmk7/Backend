class Usuario {
  constructor(nombre, apellido, mascota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascota = [mascota];
    this.libros = [];
  }

  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }
  addMascotas(mascota) {
    this.mascota.push(mascota);
  }
  countMascotas() {
    console.log(`Cantidad de Mascotas: ${this.mascota.length}`);
  }
  addBooks(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBooksName() {
    this.titulos = [];
    this.libros.map((elem) => {
      console.log(elem.nombre);
      this.titulos.push(elem.nombre);
    });
  }
}

const usario = new Usuario("Mario", "Linares", "cuco");
console.log(usario);
usario.getFullName();
usario.addMascotas("uma");
usario.countMascotas();
usario.addBooks("Padre Rico, Padre Pobre", "Robert Kiyosaki");
usario.addBooks("El programador pragmatico", "Thomas, David/Hunt, Andrew");
usario.getBooksName();
console.log(usario);
