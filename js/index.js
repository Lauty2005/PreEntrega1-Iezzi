/*const IMP = "Impresiones 3D.LY";

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
}*/

const productos = [
    { id: 1, nombre: "azucar", precio: 200 },
    { id: 2, nombre: "arroz", precio: 100 },
    { id: 3, nombre: "dulce de leche", precio: 140 },
    { id: 4, nombre: "cereales", precio: 40 },
];

const contenedorProductos = document.getElementById('productos');

function renderizarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button class="btn-agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
      `;
        div.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                gravity: "top",
                position: "right",
                offset: {
                    y: 70,
                },
                style: {
                  background: "#032859",
                },
              }).showToast();
        })
        contenedorProductos.appendChild(div);
    })
}

function agregarAlCarrito(idProducto) {
    // Agregar el producto al carrito (logica de almacenamiento)
    const producto = productos.find(p => p.id === idProducto);
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = itemsCarrito.find(p => p.id === idProducto);

    if (productoEnCarrito) {
        // Aumentar la cantidad del producto existente
        productoEnCarrito.cantidad++;
    } else {
        // Agregar el producto con cantidad 1
        producto.cantidad = 1;
    }

    itemsCarrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
}

renderizarProductos();