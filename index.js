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
]

const elementosCarrito = [];
const contenedorProductos = document.getElementById('productos');
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarProductos() {

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button class="btn-agregar-carrito" data-id="${producto.id}">agregar carrito</button> 
        `;
        div.addEventListener('click', () => agregarAlCarrito(idProducto));
        contenedorProductos.appendChild(div);
    })
}

//agregar al carrito el producto

function agregarAlCarrito(idProducto) {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    itemsCarrito.push(idProducto);
    localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
    renderizarCarrito();

    const itemExistente = elementosCarrito.find(item => item.id === idProducto);
    if (itemExistente) {
        itemExistente.cantidad++
    } else {
        const producto = productos.find(p => p.id === idProducto);
        if (producto) {
            elementosCarrito.push({ ...producto, cantidad: 1 });

        }
    }
    renderizarCarrito();
}




//eliminar el producto

function eliminarDelCarrito(idProducto) {
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if (indice !== -1) {
        elementosCarrito.splice(indice, 1);
        actualizarCarritoEnLocalStorage();
        renderizarCarrito();
    }

    // Recalcular el total
    let precioTotal = 0;
    elementosCarrito.forEach(item => {
        precioTotal += item.precio * item.cantidad;
    });

    // Actualizar el total en la interfaz
    totalSpan.textContent = precioTotal;
}

function renderizarCarrito() {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${item.nombre}</h3> 
            <p id="cantidad"> x ${item.cantidad}</p>  
            <p> $${item.precio * item.cantidad}</p>`
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'eliminar';
        btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id))
        li.appendChild(btnEliminar);
        contenedorElementosCarrito.appendChild(li);
        precioTotal += item.precio * item.cantidad;
        btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id));
    })
    totalSpan.textContent = precioTotal;
}

function realizarCompra() {
    alert(`compra finalizada $${totalSpan.textContent}`);
    elementosCarrito.length = 0;
    renderizarCarrito();
}

document.getElementById('btn-comprar').addEventListener('click', realizarCompra);

contenedorProductos.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('btn-agregar-carrito')) {
        const idProducto = parseInt(evento.target.getAttribute('data-id'));
        agregarAlCarrito(idProducto);
    }
});

function actualizarCarritoEnLocalStorage() {
    // Convertir el array de elementos a JSON
    const carritoJSON = JSON.stringify(elementosCarrito);

    // Guardar el JSON en el localStorage
    localStorage.setItem('carrito', carritoJSON);
}

// Renderizar productos al cargar la página
window.addEventListener('load', () => {
    renderizarProductos();
    renderizarCarrito();
});