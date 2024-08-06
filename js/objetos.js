//Objetos: van con {}

/*let persona = {
    nombre: 'Pepe',
    edad: 24,
    ciudad: 'Granada'
}

console.log(persona.edad)

const alumnos = [
    {nombre: 'Jose', edad: 33, ciudad: 'Sevilla'},
    {nombre: 'Rosa', edad: 25, ciudad: 'Córdoba'},
    {nombre: 'Luisa', edad: 15, ciudad: 'Úbeda'},
    {nombre: 'Manolo', edad: 33, ciudad: 'Almería'}
]

console.table (alumnos)

alumnos.forEach(alumno => {
    console.log(alumno.nombre + " " + alumno.edad)
});*/


//Frases Autor
const frases = [
    {frase: 'El misterio de la vida no es un problema a resolver, sino una realidad a experimentar', autor:'Duna, Frank Herbert'},
    {frase: 'Estar solo no tiene nada que ver con cuantas personas hay alrededor', autor:'Revolutionary Road, Richard Yates'},
    {frase: 'Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra', autor:'Frankestein, Mary Shelley'},
    {frase: 'El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación', autor:'La compañía blanca, Arthur Conan Doyle'},
    {frase: 'Si buscas la perfección nunca estarás contento', autor:'Anna Karenina, Leo Tolstoy'},
    {frase: 'Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida', autor:'Viaje al centro de la tierra, Julio Verne'},
    {frase: 'No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir', autor:'El Juego del Ángel, Carlos Ruiz Zafón'},
    {frase: 'Tengo esperanza o podría no vivir', autor:'La isla del doctor Moreau, H.G. Wells'},
    {frase: 'Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación', autor:'El retrato de una dama, Henry James'},
    {frase: 'El sol es débil cuando se eleva primero, y cobra fuerza y coraje a medida que avanza el día', autor:'Vieja tienda de curiosidades, Charles Dickens'},
]
console.table (frases)

let aleatorio_frase = Math.random()*9
aleatorio_frase = Math.floor(aleatorio_frase)
console.log(aleatorio_frase)

let mensaje = ""
let mensaje2 = ""

function clic_cita() {
    mensaje = `${frases[aleatorio_frase].frase}`
    document.getElementById('super_cita').textContent = mensaje

    mensaje2 = `"${frases[aleatorio_frase].autor}"`
    document.getElementById('autor_cita').textContent = mensaje2
}