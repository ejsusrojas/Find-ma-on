const productos = [
    { nombre: "Computadora", precio: 5200},
    { nombre: "Auriculares", precio: 765},
    { nombre: "Monitor", precio: 2000},
    { nombre: "Teclado", precio: 950},
    { nombre: "Raton", precio: 400},
    
];

const buscarProdcto = (nombreProducto) => {
    return productos.find(producto => producto.nombre === nombreProducto);
};

const productoEncontrado = buscarProdcto("Teclado");
console.log("Producto encontrado:", productoEncontrado);

const totalCompra = producto.reduce((total, producto) => total + producto.precio, 0);

console.log("Total de la compra:", totalCompra);