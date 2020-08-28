const modoOscuro = document.getElementsByTagName("body")
const boton = document.getElementsByTagName("button")
const imagenOscuro = document.getElementsByClassName("icono-oscuro")

boton.onclick = () => {
    modoOscuro.classList.toggle("oscuro")
    imagenOscuro.classList.toggle("icono-oscuro")
}






   