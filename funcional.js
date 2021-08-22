

$(document).ready(function() {
  //obtenemos el valor de los input
  
  $('#adicionar').click(function() {
    var _año = document.getElementById("año").value;
    var _instituto = document.getElementById("instituto").value;
    var _lugar = document.getElementById("lugar").value;
    var _si = document.getElementById("pregunta_si").value;
    var _no = document.getElementById("pregunta_no").value;

    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + _año + '</td><td>' + _instituto + '</td><td>' + _lugar+ '</td><td>'+ _si+ '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>';
  
    i++;
  
    $('#mytable tr:first').after(fila);
      $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
      var nFilas = $("#mytable tr").length;
      $("#adicionados").append(nFilas - 1);
      //le resto 1 para no contar la fila del header
      document.getElementById("instituto").value ="";
      document.getElementById("lugar").value = "";
      document.getElementById("si").value = "";
      document.getElementById("no").value = "";
      document.getElementById("año").value = "";
      document.getElementById("año").focus();
    });
  $(document).on('click', '.btn_remove', function() {
    var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      $("#adicionados").text("");
      var nFilas = $("#mytable tr").length;
      $("#adicionados").append(nFilas - 1);
    });
  });

