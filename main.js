function Usuario (nombreUsuario, apellidoUsuario, edadUsuario,){
    this.nombreUsuario = nombreUsuario;
    this.apellidoUsuario = apellidoUsuario;
    this.edadUsuario = edadUsuario;
}

let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");
let edadUsuario = parseInt(prompt("Ingrese su edad: "));

const usuario = new Usuario (nombreUsuario, apellidoUsuario, edadUsuario,);
console.log("Nuevo Usuario: ");
console.log(usuario);

alert ("Hola " + nombreUsuario + ", bienvenido a Remes!");

class Producto {
    constructor(nombreProducto, precioProducto, colorProducto,cantidadProducto){
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.colorProducto = colorProducto;
        this.cantidadProducto = cantidadProducto;
    }
    sumaIva(){
        this.precioProducto = this.precioProducto * 1.21;
    }
    vender(){
        if(this.cantidadProducto > 0){
            this.cantidadProducto --;
        }else{
            console.log("no hay más stock!");
        }
    }
}
const termo = new Producto ("Termo", 9500, "gris", 100);
const taza = new Producto ("Taza", 2500, "negra", 150);
const remera = new Producto ("Remera", 3000, "blanca", 200);
const bodyBebe = new Producto ("Body de bebé", 1500, "blanco", 90);
const mate = new Producto ("Mate", 1500, "negro", 1);

const arrayProductos = [];
arrayProductos.push(termo);
arrayProductos.push(taza);
arrayProductos.push(remera);
arrayProductos.push(bodyBebe);
arrayProductos.push(mate);
//console.log(arrayProductos);

for (const producto of arrayProductos){
    producto.sumaIva();
}

for(let producto of arrayProductos){
    console.log(producto);
}

const buscarProducto = arrayProductos.find(producto => producto.nombreProducto == "Taza");
console.log("Uso el método find para encontrar un producto: ");
console.log(buscarProducto);

const arrayProductosMenosCienUnidades = arrayProductos.filter(producto => producto.cantidadProducto <= 100);
console.log("Uso el método filter para buscar los productos que tengan una cantidad menor o igual a 150 :");
console.log (arrayProductosMenosCienUnidades);

function eliminoMate (arrayProductos){
    let hayMate = arrayProductos.includes(mate);
    if (hayMate) {
        let indiceMate = arrayProductos.indexOf(mate);
        arrayProductos.splice(indiceMate,1);
    }else{
        console.log("No hay Mate");
    }
}
eliminoMate(arrayProductos);
console.log(arrayProductos);

alert("Tenés un 15% de descuento y 3 cuotas sin interés!");

const opcionProducto = parseInt(prompt("Ingrese número de una opción: \n 1) Termo \n 2) Taza \n 3) Remera \n 4) Body de bebé \n 5) Salir"));

while(opcionProducto == "1" || opcionProducto == "2" || opcionProducto == "3" || opcionProducto == "4"){
    const cantidadDeProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));
    const precioFinalTermo = termo.precioProducto * cantidadDeProductos;
    const precioFinalTaza = taza.precioProducto * cantidadDeProductos;
    const precioFinalRemera = remera.precioProducto * cantidadDeProductos;
    const precioFinalBodyBebe = bodyBebe.precioProducto * cantidadDeProductos;

    if(opcionProducto == "1") {
        alert("El precio individual del Termo con Iva incluido es de $ " + (termo.precioProducto) + " el precio total de los productos es de $ " + precioFinalTermo);
        alert("El precio con descuento es de $ " + (precioFinalTermo - (precioFinalTermo * 15 / 100)) + " y las cuotas son de $ " + ((precioFinalTermo - (precioFinalTermo * 15 / 100)) / 3).toFixed(2));
    }else if(opcionProducto == "2"){
        alert("El precio individual de la Taza con Iva incluido es de $ " + (taza.precioProducto) + " el precio total de los productos es de $ " + precioFinalTaza); 
        alert("El precio con descuento es de $ " + (precioFinalTaza - (precioFinalTaza * 15 / 100)) + " y las cuotas son de $ " + ((precioFinalTaza - (precioFinalTaza * 15 / 100)) / 3).toFixed(2));
    }else if(opcionProducto == "3"){
        alert("El precio individual de la Remera con Iva es de $ " + (remera.precioProducto) + " el precio total de los productos es de $ " + precioFinalRemera); 
        alert("El precio con descuento es de $ " + (precioFinalRemera - (precioFinalRemera * 15 / 100)) + " y las cuotas son de $ " + ((precioFinalRemera - (precioFinalRemera * 15 / 100)) / 3).toFixed(2));
    }else if(opcionProducto == "4"){
        alert("El precio individual del body de bebé con Iva incluido es de $ " + (bodyBebe.precioProducto) + " el precio total de los productos es de $ " + precioFinalBodyBebe);
        alert("El precio con descuento es de $ " + (precioFinalBodyBebe - (precioFinalBodyBebe * 15 / 100)) + " y las cuotas son de $ " + ((precioFinalBodyBebe - (precioFinalBodyBebe * 15 / 100)) / 3).toFixed(2));
    }else if(opcionProducto == "5"){
        alert("Muchas gracias por visitar nuestra página!");
    }
    break;
}
if(opcionProducto == "5"){
    alert("Muchas gracias por visitar nuestra página!");
}
else{
    alert("Lo siento, no es una opción válida");
}









