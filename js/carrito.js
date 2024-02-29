/*const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

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
});*/

const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarCarrito() {
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
    })
    totalSpan.textContent = precioTotal;
}

function eliminarDelCarrito(idProducto) {
    // Eliminar el producto del carrito (logica de almacenamiento)
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if (indice !== -1) {
        elementosCarrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
    }
}

function realizarCompra() {
    // Completar la compra (logica de pago)
    alert(`compra finalizada $${totalSpan.textContent}`);
    // Mostrar mensaje de compra exitosa
    // Vaciar el carrito (logica de almacenamiento)
    elementosCarrito.length = 0;
    localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
}

renderizarCarrito();