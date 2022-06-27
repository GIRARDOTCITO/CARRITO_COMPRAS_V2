//Juan Sebastian Girardot Antonio
class CompraTienda {
    //propiedades :: Atributos
    #nombreCliente;
    #productoCompra;
    #cantidadCompra;
    #precioCompra;
    //metodo constructor El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
    constructor() {
      //this se refiere al objeto global, ya sea en modo estricto o no. Nota: Puedes obtener el objeto global usando la propieda global globalThis 
    this.#nombreCliente = "";
    this.#productoCompra = "";
    this.#cantidadCompra = 0;
    this.#precioCompra = 0;
    }
    calculaValorCompra() {
    return this.#cantidadCompra * this.#precioCompra;
    }
    capturaDato(mensaje){
    let valor = prompt(mensaje);
    return valor;
    }
    get getNombreCliente() {
      //Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada
    return this.#nombreCliente;
    }
    set setNombreCliente(value) {
      //Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción. Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set .
    this.#nombreCliente = value;
    }
    get getProductoCompra() {
    return this.#productoCompra;
    }
    set setProductoCompra(value) {
    this.#productoCompra = value;
    }
    get getCantidadCompra() {
    return this.#cantidadCompra;
    }
      set setCantidadCompra(value) {
    this.#cantidadCompra = value;
    }
    get getPrecioCompra() {
    return this.#precioCompra;
    }
    set setPrecioCompra(value) {
    this.#precioCompra = value;
    }
    }
    class CarritoTienda{
    #productos = []; //array
    constructor(){
    this.#productos = [];
    }
    nuevoProducto(nombre){
    let producto = new CompraTienda();
    producto.setNombreCliente = nombre;
    producto.setProductoCompra = producto.capturaDato('Digite el producto a comprar ==> ');
      do{
    producto.setCantidadCompra = producto.capturaDato('Digite numero de unidades ==> ');
      }while(isNaN(producto.getCantidadCompra) || producto.getCantidadCompra < 1)
      do{
    producto.setPrecioCompra = producto.capturaDato('Digite precio del Producto ==> ');
      }while(isNaN(producto.getPrecioCompra) || producto.getPrecioCompra<1)
    this.#productos.push(producto);
    return producto;
    }
    get carritoCompra(){
    return this.#productos;
    }
    get numeroProductos(){
    return this.#productos.length;
    }
      }
    function capturaNombreCliente(){
    let nombre = prompt('Nombre del Cliente');
    return nombre;
    }
    let sw = true; 
    let respuesta = true;
    let nombre = '';
    do{
    do{
    nombre = capturaNombreCliente();
    if (nombre === ""){
    sw = true;
    } else {
    sw = false;
    }
    } while (sw);
    let canasta = new CarritoTienda();
    do{
    canasta.nuevoProducto(nombre);
    respuesta = confirm('¿Desea un nuevo producto?');
    }while(respuesta);
    console.log(canasta.numeroProductos);
    console.log(canasta.carritoCompra);
    console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getNombreCliente);
    let i=0;
    let compra = 0;
    canasta.carritoCompra.forEach(producto => {
    i++;
      //toFixed() devuelve una representación de cadena de numObj que no usa notación exponencial y tiene exactamente dígitos dígitos después del decimal.
      console.log('------------------------------------------------------------------')
      console.log('| Numero:',i +". " + '| Nombre: ',producto.getProductoCompra + " " + '| Unidades: ',producto.getCantidadCompra +
      " " + '| Precio Unitario: $',producto.getPrecioCompra + " " + '| Total:   $',(producto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '|');
      });
     console.log('------------------------------------------------------------------')
      console.log("Valor de total de la Compra ==> ",' |','$ '+ (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), '|');
    respuesta = confirm('¿Existe un nuevo Cliente?');
    }while (respuesta);
    //segun el codigo, hay una clase al inicio que se llama "compratienda". esta clase contiene, #nombreCliente;#productoCompra;#cantidadCompra;#precioCompra;, la cual nos indica algunas variables para que el usuario digite tanto valores como letras, y que se identifique cada uno de acuerdo a su funcionalidad. Cabe resaltar que se inicializan cada una de estas variables, para que funcione, y damos las operaciones. Luego se crea otra clase llamada "carritoTienda", cual contiene tanto los valores del usuario, como tambien las operaciones que se necesitan para calcular el valor que se requiere. El usuario digita el nombre de lo que desea comprar, la cantidad, el precio, y el programa dara su resultado. Hay un bucle el cual repite el proceso, de lo contrario sale de su labor. Cabre resaltar, que el usuario digita un valor y aparece una pregunta la cual es "desea comprar algo mas", si se responde que si o que no entonces si decimos que si nos preguntara lo mismo, y luego de decir varias veces que si y luego darle en cancelar, observaremos que cada uno de los valores que digitamos aparecen en una lista.
    
//--------------------------------COMPRATIENDA DOS--------------------------------

    // //la clase encapsula datos y funciones que manipulan informacion y son una mejora sintactica sobre la herencia basada en prototipos de js
// class CompraTienda {
//     //propiedades :: Atributos son una variable que existe en una clase mientras que en un atributo siempre contendra valores de tipo string.
//     #nombreCliente;
//     #productoCompra;
//     #cantidadCompra;
//     #precioCompra;
// //metodo constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
// constructor() {
//     this.#nombreCliente = "";
//     this.#productoCompra = "";
//     this.#cantidadCompra = 0;
//     this.#precioCompra = 0;
// }
// calculaValorCompra() {
//     //return funciona para la ejecucion de la funcion y especifica un valor para ser devuelto a quien llama a la funcion.
//   return this.#cantidadCompra * this.#precioCompra;
// }
// capturaDato(mensaje){
//     let valor = prompt(mensaje);
//     return valor;
// }
// get getNombreCliente() {
//     return this.#nombreCliente;
// }
// set setNombreCliente(value) {
//     this.#nombreCliente = value;
// }
// get getProductoCompra() {
//     return this.#productoCompra;
// }
// set setProductoCompra(value) {
//     this.#productoCompra = value;
// }
// get getCantidadCompra() {
//     return this.#cantidadCompra;
// }
//     set setCantidadCompra(value) {
//     this.#cantidadCompra = value;
// }
// get getPrecioCompra() {
//     return this.#precioCompra;
// }
// set setPrecioCompra(value) {
//     this.#precioCompra = value;
// }
// }
// class CarritoTienda{
//     #productos = [];
//     constructor(){
//         this.#productos = [];
// }
// nuevoProducto(nombre){
//     let producto = new CompraTienda();
//     producto.setNombreCliente = nombre;
//     console.log('|camisa|pantalon|medias|')
//     console.log('|  C   |   P    |  M   |')
//     console.log('| 35000| 60000  | 5000 |')
//     do{
//         producto.setProductoCompra = producto.capturaDato('Digite el codigo de la comprar => ');

//     }while(producto.getProductoCompra !='c' && producto.getProductoCompra!="p" && producto.getProductoCompra !="m" &&producto.getProductoCompra !="C" && producto.getProductoCompra !="P" && producto.getProductoCompra !="M")
    
//     producto.setCantidadCompra = producto.capturaDato('Digite numero de unidades => ');   
//     this.#productos.push(producto);
//     switch (producto.getProductoCompra) {
//         case 'c':
//             case 'C':
//             console.log("su total es de:",35000*producto.getCantidadCompra)
//         break;
//         case 'p':
//             case 'P':
//          console.log("su total es de:",60000*producto.getCantidadCompra)
//         break;
//         case 'm':
//             case 'M':
//          console.log("su total es de:",5000*producto.getCantidadCompra)
//          break;
//         default:
//             valid=confirm('el codigo esta en error puede digitar de nuevo el codigo?');
//         break; 
//     }
//     return producto; 
// }
// get carritoCompra(){
//     return this.#productos;
// }
// get numeroProductos(){
//     return this.#productos.length;
// }
// }
//     function capturaNombreCliente(){
// let nombre = prompt('Nombre del Cliente');
// return nombre;  
// }
//     let sw = true;
//     let respuesta = true;
//     let nombre = '';
//     //do...while crea un bucle que ejecuta una sentencia especificada,hasta que la condicion de comprobacion se evalua como falsa
// do{
//     do{
//         nombre = capturaNombreCliente();
//         if (nombre === ""){
//             sw = true;
//         } else {
//             sw = false;
//         }
//     } while (sw);
//     let canasta = new CarritoTienda();
//     do{
//         canasta.nuevoProducto(nombre);
//         respuesta = confirm('¿Desea un nuevo producto?');
//     }while(respuesta);
//     let i=0;
//     let compra = 0;
//           respuesta = confirm('¿Existe un nuevo Cliente?');
// }while (respuesta);



























































































































































































































































