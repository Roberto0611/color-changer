//array de colores
var colors = ["red", "white", "green", "blue", "purple","aqua","gray"];

//obtener el div (fondo) , el boton y el H1
var background = document.getElementById('box');
var button = document.getElementById('button1');
var text = document.getElementById('text');

//Generar numero para poder seleccionar el color
function generarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * colors.length) - 1;
    return numeroAleatorio;
}

//Funcion para cambiar el color
function backgroundChange(){
    background.style.backgroundColor = colors[generarNumeroAleatorio()];
    var actualColor = background.style.backgroundColor
    text.textContent = "Background Color:" + " " + actualColor;
}

//Event listener al hacer click en el boton
button.addEventListener("click", backgroundChange);