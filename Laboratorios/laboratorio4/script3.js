let articulo_input = document.getElementById('articulo-input')
let lista = document.getElementById('lista')
let last_id = 1

function createArticulo(){

    //indexof devuelve un true o un false, devuelve un numer
    if(articulo_input.value.indexOf('de') !== -1){
        console.log("de")
        color = "yellow"
    } else {
        color = "white"
    }
    let element = `<div class="articulo" style="background-color:${color}" id="${last_id}">
        <div>${articulo_input.value}</div>
    </div>`
    return element
}

function agregar(){
    lista.innerHTML += createArticulo()
    articulo_input.value = ""
    last_id += 1
}


