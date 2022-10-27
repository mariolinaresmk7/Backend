const fs = require("fs");
class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }
  async readFile(archivo) {
    try {
      const data = await fs.readFileSync(archivo);
      return JSON.parse(data);
    } catch (error) {
      console.log(`Error leyendo el archivo: ${error.message}`);
    }
  }
  async writeFile(archivo, contenido) {
    try {
      await fs.writeFileSync(archivo, JSON.stringify(contenido, null, 2));
    } catch (error) {
      console.log(`Error escribiendo el archivo: ${error.message}`);
    }
  }
	async save(producto) {
		try {
				if (this.archivo) {
						if (this.readFile(this.archivo)) {
								console.log(`Leyendo archivo`);
								const data = await this.readFile(this.archivo);
								if (data.length === 0) {
										producto = { id: 1, ...producto };
								} else {
										let ultimoId = data[data.length - 1].id;
										producto = { id: ultimoId + 1, ...producto };
								}
								console.log(`Agregando producto`);
								data.push(producto);
								this.writeFile(this.archivo, data);
								console.log(
										`Se agrego el nuevo producto: ${producto.id}`
								);
								return producto.id;
						}
				} 
		} catch (error) {
				console.log(`Error: ${error.message}`);
		}
}

async getById(id) {
		try {
				if (this.archivo) {
						const data = await this.readFile(this.archivo);
						const dataId = data.filter(item => item.id === id);
						if (dataId.length === 0) {
								throw new Error(
										"No se encontro un producto con el id solicitado"
								);
						} else {
								console.log(`Producto con id ${id} encontrado:\n`, dataId);
								return dataId;
						}
				}
		} catch (error) {
				console.log(`Error buscando producto con el id: ${error.message}`);
		}
}

async getAll() {
		try {
				if (this.archivo) {
						console.log(`Leyendo archivo...`);
						const data = await this.readFile(this.archivo);
						if (data.length !== 0) {
								console.log(`Archivo con contenido:`);
								console.log(data);
								return data;
						} else {
								throw new Error(`El archivo ${this.archivo} esta vacio`);
						}
				}
		} catch (error) {
				console.log(
						`Error obteniendo todos los productos: ${error.message}`
				);
		}
}

async deleteAll() {
		try {
				let nuevoArray = [];
				console.log(`Borrando`);
				await this.writeFile(this.archivo, nuevoArray);
				console.log(
						`Se borraron todos los datos`
				);
		} catch (error) {
				console.log(
						`Ocurrio un error eliminando los datos: ${error.message}`
				);
		}
}
}
module.exports = Contenedor;
