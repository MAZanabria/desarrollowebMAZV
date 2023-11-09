let imagen = document.getElementById('imagen')
let tamanio_index = document.getElementById('tamanio')

let imagenes = ['imagen 1.jpg']
let index = 0
imagen.src = `imagenes/${imagenes[index]}`

function reducir(){
    imagen.width -= parseInt(tamanio_index.value)
    imagen.height -= parseInt(tamanio_index.value) 
}

function agrandar(){
    imagen.width += parseInt(tamanio_index.value)
    imagen.height += parseInt(tamanio_index.value)
    
}