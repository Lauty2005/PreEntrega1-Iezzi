const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarCarrito() {
    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="../${item.imagen}" alt="${item.nombre}">
          <h3>${item.nombre}</h3> 
          <p id="cantidad"> x ${item.cantidad}</p>  
          <p> $${item.precioFinalRedondeado * item.cantidad}</p>`
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            eliminarDelCarrito(item.id);
            window.location.href = window.location.href
        });
        li.appendChild(btnEliminar);
        contenedorElementosCarrito.appendChild(li);
        precioTotal += item.precioFinalRedondeado * item.cantidad;
    })
    totalSpan.textContent = precioTotal;
}

function eliminarDelCarrito(idProducto) {
    // Eliminar el producto del carrito (logica de almacenamiento)
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if (indice !== -1) {
        const cantidadActual = elementosCarrito[indice].cantidad;
        // Si la cantidad es mayor a 1
        if (cantidadActual > 1) {
            // Disminuir la cantidad en 1
            elementosCarrito[indice].cantidad--;
            // Actualizar el local storage
            localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
            // Actualizar la visualización del carrito
            renderizarCarrito();
        } else {
            elementosCarrito.splice(indice, 1);
            localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
        }
    }
}

function realizarCompra() {
    // Completar la compra (logica de pago)
    alert(`Compra Finalizada $${totalSpan.textContent}`);
    // Mostrar mensaje de compra exitosa
    // Vaciar el carrito (logica de almacenamiento)
    elementosCarrito.length = 0;
    localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
}

renderizarCarrito();