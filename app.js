class Producto {
    constructor(nombre, precio, color, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.id = id;
    }
}

let arregloProductos = [];

do {
    var continuar = prompt("INGRESE LA ID DEL PRODUCTO O FIN PARA TERMINAR");
    if (continuar === "fin") {
        break;
    } else {
        let nombreProducto = prompt("ingrese nombre del producto");
        let precioProducto = prompt("ingrese precio del producto");
        let colorProducto = prompt("ingrese color del producto ENTRE ROJO AZUL Y AMARILLO PARA EL EFECTO");
        idProducto = continuar;
        arregloProductos.push(new Producto(nombreProducto, precioProducto, colorProducto, idProducto));
    }
} while (continuar != "fin")

console.log(arregloProductos);

for (let articulo of arregloProductos) {
    let caja = document.createElement("div");
    caja.innerHTML = `<h4>Nombre: ${articulo.nombre}</h4> <h4>Precio: ${articulo.precio}</h4> <h4 class="${articulo.color}">Color: ${articulo.color}</h4>`
    document.body.appendChild(caja);
}