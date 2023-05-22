
'use strict';

const tienda = {
    nombre:"Viveres Don Gatip",
    sucursal:3,
    direccion:{
        city:"Conocoto",
        telephone:"1800 Don Gato"
    },
    Productos:['Lacteos','Carnes','Frutas','Bebidas'],
    state:true,
    compra (){
        return `Estud compro ${this.Productos[1]}`
    },
    comprobante: ()=>{
        return `Su recibo ${this.Productos[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(tienda))
console.log("Obtener los valores:",Object.values(tienda))
console.log("Obtener las claves y valores en un array:",Object.entries(tienda))