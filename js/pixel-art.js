var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");

var borraTodo = document.getElementById("borrar");

var imgBatman = document.getElementById('batman');

var imgWonder = document.getElementById('wonder');

var imgFlash = document.getElementById('flash');

var imgInvisible = document.getElementById('invisible');

var guardar = document.getElementById("guardar");



function seleccionarColor(){
  for(var i = 0; i <= nombreColores.length; i++){
    var colorDiv =  document.createElement("div");
    colorDiv.style.backgroundColor = nombreColores[i];
    colorDiv.className = "color-paleta";
    colorDiv.title = nombreColores[i];
    paleta.appendChild(colorDiv)

  }
}

function recorrerGrilla(){
  for(var i = 0; i < 1750; i++){
    var pixel = document.createElement("div");
    grillaPixeles.appendChild(pixel);
  }
}

var colorIndicado = document.getElementById("indicador-de-color");
paleta.addEventListener("click",colorSeleccionado);
function colorSeleccionado(e){
colorIndicado.style.backgroundColor = e.target.style.backgroundColor;
}



var pintarClick = grillaPixeles.addEventListener("click",pintar);
function pintar(e){
  e.target.style.backgroundColor = colorIndicado.style.backgroundColor;
}




var mouseOver = grillaPixeles.addEventListener('mouseover',(e)=>{
  if(pintando){
    e.target.style.backgroundColor = colorIndicado.style.backgroundColor;
  } 
})

var pintando = false;

var mouseDown = grillaPixeles.addEventListener("mousedown",(e)=>{
pintando = true
})
var mouseUp = grillaPixeles.addEventListener("mouseup",(e)=>{
pintando = false
})






borraTodo.addEventListener('click', function (){
  $('#grilla-pixeles').children().animate({'background-color': 'white'},1000);
});



var imgHeroes = document.querySelector('.imgs');

function stringToVar(stringHeroe){
  switch(stringHeroe){
    case "batman":
      return batman;
    case "wonder":
      return wonder;
    case "flash":
      return flash;
    case "invisible":
      return invisible;
  }
}

imgHeroes.addEventListener('click', function(e){
  var heroe = stringToVar(e.target.id);
  cargarSuperheroe(heroe);
})


guardar.addEventListener('click',guardarPixelArt)

 
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorIndicado.style.backgroundColor = colorActual;


  })
);


seleccionarColor();
recorrerGrilla();
