//Aca va el owl carrousel en el bloque de codigo lu $(document).ready(function(){}
$(document).ready(function () {

    for (let i = 0; i < productos.length; i++) {
        $('#productos').append(
            '<div class="col">' +
            '<div class=" card sc-product-item">' +
            '<img class="img-fluid" data-name="product_image" src="img/' + productos[i]['Imagen'] + '" >' +
            '<div class="card-body">' +
            '<h3 data-name= "product_name" class="card-title">' + productos[i]['Nombre'] + '</h3>' +
            '<p data-name="product_desc" class="card-text">' + productos[i]['Descripcion'] + '</p>' +
            '<input name= "product_price" value="' + productos[i]['Precio'] + '" type= "hidden">' +
            '<input name= "product_id" value"' + productos[i] + '" type= "hidden">' +
            '<div>$' + productos[i]['Precio'] + '</div>' +
            '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
            '</div>' +
            '</div>'
        )
    }
    $('#smartcart').smartCart({
        lang: {
            cartTitle: "Carrito de Compras",
            checkout: 'Checkout',
            clear: 'Borrar',
            subtotal: 'Total:',
            cartRemove: '×',
            cartEmpty: '¡El carrito está vacío!<br />Elegí tus productos'
        }

    });
});




























