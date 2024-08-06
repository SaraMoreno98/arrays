//declaración de arrys
/*let frutas = [
    'manzana',
    'peras',
    'naranja'
]

frutas[0] = 'sandía'
frutas[3] = 'melocotón'

frutas.push('fresas')
console.log(frutas.length)

console.log (frutas[0])
console.table (frutas)*/


//bucles
/*for (indice de inicio, condicion, incremento){
    código a ejecutar
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let index = 0; index <= 10; index+=2) {
    console.log(index)
}

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}

frutas.forEach((fruta, indice, array) => {
    console.log(`${indice}: ${fruta}`)
    console.log(array)
});*/


//random
/*let aleatorio = Math.random()*10
//Quita decimales
aleatorio = Math.floor(aleatorio)
console.log(aleatorio)

let numeros = [34, 56, 89, 23, 12, 87, 68, 8, 21, 26]

console.log(`El número ganador es: ${numeros[aleatorio]}`)*/


//suerte
let aleatorio_suerte = Math.random()*9
aleatorio_suerte = Math.floor(aleatorio_suerte)
console.log(aleatorio_suerte)
let mensaje = ""

const suerte = [
    'La felicidad llega cuando menos la esperas',
    'Un gran cambio está por venir, abraza la oportunidad',
    'El éxito te espera al final del camino',
    'Escucha a tu corazón, te guiara hacia la respuesta correcta',
    'La paciencia es una virtud que te llevará lejos',
    'Hoy es el día perfecto para comenzar algo nuevo',
    'La amabilidad siempre encuentra su camino de regreso',
    'El esfuerzo de hoy será la recompensa de mañana',
    'Una aventura inesperada está en tu futuro cercano',
    'Los buenos amigos son el verdadero tesoro de la vida'
]
console.table(suerte)

console.log(`Hulitas ${suerte[aleatorio_suerte]}`)

function clic_suerte(){
    mensaje = `${suerte[aleatorio_suerte]}`
    document.getElementById('super_frase').textContent = mensaje
}