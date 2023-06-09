//Made by: Roberto Ochoa Cuevas

//array with colors
var colors = ["red", "white", "green", "blue", "purple", "aqua", "gray", "black", "orange", "pink", "yellow", "brown", "cyan", "gold", "indigo", "lavender", "magenta", "maroon", "navy", "olive", "orchid", "plum", "salmon", "teal", "turquoise", "violet", "wheat", "coral", "steelblue", "slategray", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "ivory", "khaki", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon","lime", "silver", "khaki", "navajowhite", "thistle", "mediumaquamarine", "tomato", "darkslategray", "mediumorchid"];

//Get the div (background), the button, and the h1
var background = document.getElementById('box');
var button = document.getElementById('button1');
var text = document.getElementById('text');

//Generate number to select color
function generarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * colors.length) - 1;
    return numeroAleatorio;
}

//Function to change the color
function backgroundChange(){
    background.style.backgroundColor = colors[generarNumeroAleatorio()];
    var actualColor = background.style.backgroundColor
    text.textContent = "Background Color:" + " " + actualColor;
    console.log(actualColor)
}

//Event listener on button.
button.addEventListener("click", backgroundChange);