function add_tarea(){
    //Leer txt del input
    let tarea = document.getElementById('txt_tarea').value
        tarea = tarea.trim()
    
    if (tarea != ""){
        //Crea un <li> vacio
        let itemLista = document.createElement('li')
        //Añadimos txt al <li>
        itemLista.innerHTML = `
            ${tarea}
            <button class="btn-eliminar">Eliminar</button>
        `
        //Añade a la lista <ul> un child (<li>)
        document.getElementById('lista').appendChild(itemLista)

        //Seleccionar el btn eliminar para añadirle un evento
        itemLista.querySelector('.btn-eliminar').addEventListener('click', function(){
            itemLista.remove()
        })
    }
}