function Persona(info){
    this.nombre = info.nombrePersona;
    this.apellido = info.apellidoPersona;
    this.mail = info.mailPersona;
}

const info = {
    nombrePersona: prompt("Ingrese su nombre"),
    apellidoPersona: prompt("Ingrese su apellido"),
    mailPersona: prompt("Ingrese su email"),
}

const persona1 = new Persona(info)

alert(`Bienvenido ${persona1.nombre} ${persona1.apellido}`);
// Funciona correctamente, puedo ingresa nombre apellido y mail y muestro el nombre y apellido con mensaje bienvenida

const carrito = [
    {id: 1 ,producto: "Vinilo Wu Tang Clan", album: "36th Chambers", precio: 6000 },
    {id: 2 ,producto: "Vinilo Nas", album: "Illmatic", precio: 6100 },
    {id: 3 ,producto: "Vinilo Snopp Dogg", album: "Doggystyle", precio: 7000 },
    {id: 4 ,producto: "Vinilo 2 Pac", album: "All Eyez On Me", precio: 6500 },
    {id: 5 ,producto: "Vinilo 50 Cent", album: "Get Rich Or Die Tryin", precio: 6200 },
];

let dinero = parseInt(prompt("Ingrese el dinero que tiene disponible para gastar"));
const productosEnRango = carrito.filter((producto) => producto.precio <= dinero);

if (productosEnRango.length > 0) {
    mostrarProductos(productosEnRango);
    elegirProducto(productosEnRango);
} 
else {
    alert("No se encontraron productos dentro del rango de precio ingresado.");
}

function mostrarProductos(productos) {
    let mensaje = "Estos son los productos que puede elegir con su dinero, recuerde el ID del producto que va a seleccionar:\n";
    productos.forEach(producto => {
        mensaje += `ID: ${producto.id}, ${producto.producto} - ${producto.album}\n`;
    });
    alert(mensaje);
}

function elegirProducto(productos) {
    const seleccion = prompt("Ingrese el ID del producto que desea seleccionar:");
    const productoSeleccionado = productos.find(producto => producto.id === parseInt(seleccion));
    
    if (productoSeleccionado) {
        let mensaje = "Usted eligió:\n";
        mensaje += `Producto: ${productoSeleccionado.producto}\n`;
        mensaje += `Album: ${productoSeleccionado.album}\n`;
        mensaje += `El precio del producto es $${productoSeleccionado.precio}`;
        alert(mensaje);
        alert(`Esperemos que disfrute de su selección, le enviaremos a su mail ${persona1.mail} la info correspondiente.`);
    } else {
        alert("Producto no encontrado.");
    }
}