const AYG = "Impresiones 3D.LY";
alert(AYG);

let name = prompt("Ingrese su nombre");
let surname = prompt("Ingrese su apellido");

class Producto {
    constructor(id, nombre, description, imagen, tiempo, gramos) {
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.imagen = imagen;
        this.tiempo = tiempo;
        this.gramos = gramos;
    }

}

const PRODUCTOS = [
    new Producto("1", "Soporte celular", "Dos tamaños disponibles, Movil o Tablet", "url", 0.6, 5),
    new Producto("2", "Posa vaso", "Diseño de Harry Potter", "url", 1.2, 10),
    new Producto("3", "Cortante", "Diseño de números", "url", 1.8, 15)
];

const DATOS = { precioKG: 25000, precioKWh: 25, consumo: 150, desgaste: 4500, margen: 0.3, ganancia: 3 }

function calcularPrecioProducto(productoId) {
    const producto = PRODUCTOS.find(producto => producto.id === productoId);
    const datos = DATOS;

    if (!producto) {
        return "Producto no encontrado";
    }

    // Calcular el precio del material
    const precioMaterial = producto.gramos * datos.precioKG / 1000;

    // Calcular el precio de la luz
    const precioLuz = ((datos.precioKWh * datos.consumo) / 1000) * producto.tiempo;

    // Calcular el desgaste de la máquina
    const desgasteMaquina = (datos.desgaste / datos.precioKG) * producto.tiempo;

    // Calcular el margen de error
    const margenError = (precioMaterial + precioLuz + desgasteMaquina) * datos.margen;

    // Calcular el precio final del producto
    const precioFinal = (precioMaterial + precioLuz + desgasteMaquina + margenError) * datos.ganancia;

    return precioFinal;
}

// Pedir al usuario que ingrese el ID del producto
const productoId = prompt("Productos disponibles: 1. Soporte celular, 2. Posa vaso, 3. Cortantes. Ingrese el ID del producto: ");

// Usar un switch para seleccionar el producto
switch (productoId) {
    case "1":
        const precioProducto1 = calcularPrecioProducto(productoId);
        alert(`El precio del producto Soporte celular es $${precioProducto1}`);
        console.log(`El precio del producto Soporte celular es $${precioProducto1}`);
        break;
    case "2":
        const precioProducto2 = calcularPrecioProducto(productoId);
        alert(`El precio del producto Posa vaso es $${precioProducto2}`);
        console.log(`El precio del producto Posa vaso es $${precioProducto2}`);
        break;
    case "3":
        const precioProducto3 = calcularPrecioProducto(productoId);
        alert(`El precio del producto Cortantes es $${precioProducto3}`);
        console.log(`El precio del producto Cortantes es $${precioProducto3}`);
        break;
    default:
        console.log("Producto no encontrado");
        break;
}