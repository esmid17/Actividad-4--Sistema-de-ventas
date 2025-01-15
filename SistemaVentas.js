//Sistema ventas

class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this.stock = stock;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        //Validar que el precio no sea negativo
        if (precio < 0){
            console.error('El precio no puede ser negativo')
        }else{
            this._precio = precio;
        }
    }

    get categoria(){
        return this.categoria;
    }

    set categoria(categoria){
        this._categoria = categoria;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        //Verificar si no hemos superado el máximo de productos existentes
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //Otra sintaxis
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else {
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    calcularTotal(){
        let totalVenta = 0;

        for(const producto of this._productos){
            totalVenta += producto._precio; //totalVenta = totalVenta + producto._precio
        }

        return totalVenta;
    }

    calcularImpuestos() {
        const total = this.calcularTotal();
        const impuesto = total * 0.15;
        return total + impuesto;
    }

    listarProductosDescendente() {
        this._productos = this._productos.slice().sort((a, b) => b.precio - a.precio);
    }

    mostrarProductosOrdenados() {
        this.listarProductosDescendente();
        return this._productos.map(producto => producto.toString()).join('\n');
    }

    mostrarOrden(){
        let productosOrden = '';

        for(const producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

//Probando
let producto1 = new Producto('Laptop', 989, 'Electrónica');
let producto2 = new Producto('Silla', 30, 'Hogar');
let producto3 = new Producto('Teclado', 150, 'Oficina');
let producto4 = new Producto('Platos', 10, 'Hogar');
let producto5 = new Producto('Borrador', 150, 'Escolar');

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto5);
orden2.mostrarOrden();

console.log(orden1.mostrarProductosOrdenados());
console.log(orden2.mostrarProductosOrdenados());


//Ejercicio RETO

/*
1.- Stock Disminuya
2.- Descuento por categoría:
    Crear una nueva propiedad Categoria en la clase producto.
    Los productos de la categoría electrónica deben tener un descuento del 10% al calcular el total de la venta.
3.- Aplicación de impuestos:
    Implementar un método calcularImpuestos() en la clase orden para que agregue un impuesto (por ej. 16%) al
    total calculado.
4.- Listar los productos de forma descendente
5.- Restricción adicional:
    Aseguremos que los precios no pueden ser negativos al establecerlos en la clase Producto
*/







//Modificador denominado static se utiliza para acceder directamente a través de la clase

//Los métodos o propiedades estáticas (static) no requiere que se creen una instancia de la clase para ser utilizados

/*
class Calculadora {
    //Método static
    static sumar(a, b){
        return a + b;
    }
}

//El acceso al método estática directamente de la clase es así
console.log(Calculadora.sumar(5, 3));

//No se puede acceder desde una instancia de esta forma
const calc = new Calculadora();
//console.log(calc.sumar(5, 3));

//El modificador static en JS es una herramienta clave para definir funciones y propiedades compartidas sin necesidad
//de crear algún tipo de instancia de clase
*/