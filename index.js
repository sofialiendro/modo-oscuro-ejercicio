const modoOscuro = document.getElementById("body")
const boton = document.getElementById("boton")
const imagenOscuro = document.getElementById("icono-oscuro")

boton.onclick = () => {
    modoOscuro.classList.toggle("oscuro")
    imagenOscuro.classList.toggle("mostrar")
}






   