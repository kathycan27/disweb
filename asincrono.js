"use strict";

function solicitar(tipo) {
    console.log(`¡Claro pasa ${tipo}!`)
}

console.log("hoola puedo pasar ")
const data = setTimeout(()=>solicitar("como te llamas"),2000)
console.log("Mi nombre es kathy")