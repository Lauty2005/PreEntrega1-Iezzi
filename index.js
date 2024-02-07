const AYG = "Impresiones 3D.LY";
alert(AYG);

let name = prompt("Ingrese su nombre");
let surname = prompt("Ingrese su apellido");

const PRODUCTOS = [
    { id: "1", nombre: "Soporte celular", tiempo: 0.6, gramos: 5 },
    { id: "2", nombre: "Posa vaso", tiempo: 1.2, gramos: 10 },
    { id: "3", nombre: "Cortantes", tiempo: 1.8, gramos: 15 }
];

function calcularPrecioProducto(productoId) {
    const producto = PRODUCTOS.find(producto => producto.id === productoId);

    if (!producto) {
        return "Producto no encontrado";
    }

    // Calcular el precio del material
    const precioMaterial = producto.gramos * 20000 / 1000;

    // Calcular el precio de la luz
    const precioLuz = ((23 * 150) / 1000) * producto.tiempo;

    // Calcular el desgaste de la máquina
    const desgasteMaquina = (4320 / 20000) * producto.tiempo;

    // Calcular el margen de error
    const margenError = (precioMaterial + precioLuz + desgasteMaquina) * 0.3;

    // Calcular el precio final del producto
    const precioFinal = (precioMaterial + precioLuz + desgasteMaquina + margenError) * 3;

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