'use strict';

const user = {
    name:"Kathy",
    lastName:"Cangahuamin",
    age:23,
   
    Products:['Pera','Manzana','Sandia','Naranja'],
    Precio:[2.4,1.25,4,0.9],
    state:true,
    sendBuy (){
        return `Has comprado ${this.Products[0]}`
    },
    sendNotification: ()=>{
        return `Tu compra ${this.Products[3]}`
    }
}

console.log(user.sendBuy());

