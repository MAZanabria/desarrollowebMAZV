class Estudiante{
    constructor(id, nombre_apellidos, edad, calificiones){
        this.id = id;
        this.nombre_apellidos = nombre_apellidos;
        this.edad = edad;
        this.calificiones = calificiones;
    }
}

class Calificacion{
    constructor(materia, nota){
        this.materia = materia;
        this.nota = nota;
    }
}

function crearEstudiante(nro){
    nombre_apellidos = prompt(`Estudiate ${nro}: Nombre y apellidos`)
    edad = parseInt(prompt(`Estudiate ${nro}: Edad`))
    materia = prompt(`Estudiate ${nro}: Materia`)
    nota = parseInt(prompt(`Estudiate ${nro}: Nota`))
    calificacion = new Calificacion(materia, nota)
    estudiante = new Estudiante(nro, nombre_apellidos, edad, calificacion)
    return estudiante
}

function mostrarEstudiantes(){
    tabla.innerHTML = ""
    tabla.innerHTML += 
    `<tr>
        <th>Nro.</th>
        <th>Nombre y apellidos</th>
        <th>Edad</th>
        <th>Materia</th>
        <th>Nota</th>
    </tr>`
    estudiantes.forEach((estudiante, i) => {
        console.log(estudiante)
        color = i%2 == 0? "grey" : "white"
        font_color = i%2 == 0? "white" : "black"
        tabla.innerHTML +=
        `<tr style="background-color:${color}; color:${font_color}" id="${estudiante.id}">
            <td>${estudiante.id}</td>
            <td>${estudiante.nombre_apellidos}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.calificiones.materia}</td>
            <td>${estudiante.calificiones.nota}</td>
        </tr>`  
    });
}


var tabla = document.getElementById("tabla_estudiantes");
estudiantes = []
cantidad = parseInt(prompt("Cantiddad de estudiantes"))

for (let i = 1; i < cantidad+1; i++) {
    estudiantes.push(crearEstudiante(i))
}
mostrarEstudiantes()

