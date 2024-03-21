const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click', e => {
    if (e.target.id === 'nav') {
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
    }
})

class Producto {
    constructor(id, nombre, imagen, tiempo, gramos) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.tiempo = tiempo;
        this.gramos = gramos;
    }

}

const productos = [
    new Producto(1, "Alcancia", "./img/alcancia.jpg", 0.5, 6),
    new Producto(2, "Cartas Caja UNO", "./img/cajauno.jpg", 0.7, 6),
    new Producto(3, "Porta Cepillos Dentales", "./img/portacepillos.jpg", 0.5, 6),
    new Producto(4, "Soporte Celular", "./img/soportecelular.jpg", 0.5, 6),
    new Producto(5, "Logo Formula 1", "./img/formula1.jpg", 0.5, 6)
];

const DATOS = { precioKG: 25000, precioKWh: 25, consumo: 150, desgaste: 4500, margen: 0.3, ganancia: 3 }

function calcularPrecioProducto(productoId) {
    const producto = productos.find(producto => producto.id === productoId);
    const datos = DATOS;

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

const contenedorProductos = document.getElementById('productos');

function renderizarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');

        const precioFinal = calcularPrecioProducto(producto.id);
        const precioFinalRedondeado = Math.ceil(precioFinal / 10) * 10;

        div.innerHTML = `
        <div id="product">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${precioFinalRedondeado}</p>
        <button class="btn-agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
        </div>
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
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = itemsCarrito.find(item => item.id === idProducto);

    if (productoEnCarrito) {
        // Aumentar la cantidad del producto existente
        productoEnCarrito.cantidad++;
    } else {
        // Agregar el producto con cantidad 1
        const producto = productos.find(p => p.id === idProducto);
        if (producto) {
            itemsCarrito.push({ ...producto, cantidad: 1 });

        }
    }
    localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
}

renderizarProductos();