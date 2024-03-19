const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarCarrito() {
    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="../img/large_display_41922fd7-8eb4-4887-8171-77aa0a15b487.jpg" alt="Avatar">
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