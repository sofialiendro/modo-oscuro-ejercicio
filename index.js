const body = document.getElementById("body")
const boton = document.getElementById("boton")
const imagenOscuro = document.getElementById("icono-oscuro")
const imagenClaro = document.getElementById("icono-claro")


boton.onclick = () => {
    body.classList.toggle("oscuro")
    // imagenClaro.classList.toggle("nomostrar")
}

imagenClaro.onclick = () => {
    imagenOscuro.classList.remove("nomostrar")
    imagenClaro.classList.add("nomostrar")
}

imagenOscuro.onclick = () => {
    imagenOscuro.classList.add("nomostrar")
    imagenClaro.classList.remove("nomostrar")
}







   