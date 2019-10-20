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
// variable para guardar paleta
var paleta = document.getElementById('paleta');

// variable para guardar grilla-pixeles
var grillaDePixeles = document.getElementById('grilla-pixeles');

//
function recorrerColores(){
  for(i = 0; i < nombreColores.length; i++){
    var color =  document.createElement('div');
      color.style.backgroundColor = nombreColores[i];
      color.className = "color-paleta";      
      paleta.appendChild(color);  
  }
}

function createGrilla(){
  for(i = 0; i < 1750; i++){
    var pixel =  document.createElement('div'); 
      grillaDePixeles.appendChild(pixel);  
  }
}

recorrerColores();
createGrilla();

////////////////
var elegirColor = document.getElementById('indicador-de-color');
paleta.addEventListener("click", colorElegido);
function colorElegido(e){
  elegirColor.style.backgroundColor = e.target.style.backgroundColor;
}

///////
grillaDePixeles.addEventListener("click", pintarColor);
function pintarColor(e){
  e.target.style.backgroundColor = elegirColor.style.backgroundColor;
}



// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
(function actualizarColor() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
  elegirColor.style.backgroundColor = colorActual;

  })
);

//////
var mousePresionado = true;

grillaDePixeles.addEventListener('mousedown', press);
grillaDePixeles.addEventListener('mouseup', soltar);
grillaDePixeles.addEventListener('mouseover', sombra);

function press(e){
    mousePresionado = true;
    
}
function soltar(e){
  mousePresionado = false;
}
function sombra(e){
  if (mousePresionado){
  pintarColor(e);
 };
}

//
$('#borrar').click(function(){
var $borrarPixel = $('#grilla-pixeles div').animate({'background-color': "#FFFFFF"}, 2000);
});

//
$('#batman').click( function(){
  cargarSuperheroe(batman);
});
$('#wonder').click( function(){
  cargarSuperheroe(wonder);
});
$('#flash').click( function(){
  cargarSuperheroe(flash);
});
$('#invisible').click( function(){
  cargarSuperheroe(invisible);
});

//

$('#guardar').click(function(){
  guardarPixelArt();
  });