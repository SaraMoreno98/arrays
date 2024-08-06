//GUARDAR PUNTOS INICIALES
let puntosJugador = 0
let puntosMaquina = 0

function jugar(eleccionJugador){
    const opcionesMaquina = ['piedra', 'papel', 'tijera']

    const eleccionesMaquina = opcionesMaquina[Math.floor(Math.random() * 3)]
        /*let aleatorio = Math.random() * 3
        aleatorio = Math.floor(aleatorio)
        let eleccionesMaquina = opcionesMaquina[aleatorio]*/
    
    let resultado = ""    

    //EMPATE
    if(eleccionJugador == eleccionesMaquina){
        resultado = "Empate!"
    }
    //GANA EL JUGADOR
    else if(
        (eleccionJugador == 'piedra' && eleccionesMaquina == 'tijeras') ||
        (eleccionJugador == 'papel' && eleccionesMaquina == 'piedra') ||
        (eleccionJugador == 'tijera' && eleccionesMaquina == 'papel')
    ){
      resultado = "Ganaste!"
      puntosJugador++   
    }
    //GANA LA MAQUINA
    else{
        resultado = "Perdiste!"
        puntosMaquina ++
    }

    const emojis = {
        piedra: '🗿',
        papel: '🧻',
        tijera: '✂'
    }

    document.getElementById('result').innerHTML = `Tu elección: ${emojis[eleccionJugador]} vs Computadora: ${emojis[eleccionesMaquina]} ${resultado}`

    document.getElementById('score').textContent = `Jugador: ${puntosJugador} | Computadora: ${puntosMaquina}`
}