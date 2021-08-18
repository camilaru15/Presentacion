
function validar(){
    var input_instituto = document.getElementById("input_instituto");
    if(input_instituto.value == ""){
      document.getElementById("respuestas").innerHTML = '<div class="alert alert-danger" role="alert">'+
      'Ingrese instituto'+
      '</div>';
    }else{
      document.getElementById("respuestas").innerHTML = '<div class="alert alert-success" role="alert">Se guardo correctamente</div>';
    }
  }