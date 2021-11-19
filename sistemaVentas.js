// ------- SISTEMA DE VENTAS --------

class Producto {
  static contadorProductos = 0;
  constructor(_idProducto, _nombre, _precio) {
    this._idProducto = _idProducto;
    this._nombre = _nombre;
    this._precio = _precio;
    Producto.contadorProductos++;
  }
  get idProducto() {
    return this._idProducto;
  }
  set idProducto(_idProducto) {
    this._idProducto = _idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(_nombre) {
    this._nombre = _nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(_precio) {
    this._precio = _precio;
  }
  toString() {
    return ` Id Producto: ${this._idProducto} \n Nombre: ${this._nombre} \n precio: $ ${this._precio} \n`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this.productos = [];
    this._idOrden = ++Orden.contadorOrdenes;

  }
  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this.productos.length < Orden.MAX_PRODUCTOS) {
      this.productos.push(producto);
    } else {
      console.log("No se pueden agregar más productos");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this.productos) {
      totalVenta += producto._precio;
    }
    return totalVenta;
  }
  mostrarOrden() {
    let mostrarProductos = "";

    for (let producto of this.productos) {
      mostrarProductos += producto.toString() + "\n";
    }

    return `   ORDEN Nº ${ this._idOrden}
               \n${mostrarProductos} \n --------------------- \n |Total a pagar: ${this.calcularTotal()}| \n --------------------- `;
  }
}

// Create products

let producto1 = new Producto(1201, "tomate", 400);
let producto2 = new Producto(132, "cebolla", 1000);
let producto3 = new Producto(1403, "papa", 800);

// Show products
console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());

// Account Total products created

console.log(Producto.contadorProductos);

// Create orden
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);


let orden2 = new Orden();
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);

// subtotal value of products in an order
console.log(orden1.calcularTotal());
console.log(orden2.calcularTotal());

// show the receipt of the order placed
console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());
