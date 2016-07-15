
$(document).ready(function() {

  var p_jugador1 = 0;
  var p_jugador2 = 0;


  $("#start_btn").click(function(){
    // reset()
    p_jugador1 = 0;
    p_jugador2 = 0;
    var i = 3;
    var x = 3;
    var con = 5;

    $("td").css("background-color", "white")
    $("tr :nth-child(85)").css("background-color", "#f1404b")
    $("tr :nth-child(2)").css("background-color", "black")
    $("#resultado").text("");

    var contador = setInterval(function(){

      $("#contador").text(con);
      con -= 1

      if(con < 0){
        clearInterval(contador);
        
        var interval =  setInterval(function(){ 

          $("#player1 :nth-child("+ i +")").css("background-color", "#45d9fd");

          if(i == 85){
            $("#player1 :nth-child("+ i +")").css("background-color", "#f1404b");
          }

          i += 1

          if(i >= 103){
            clearInterval(interval);
            p_jugador1 = 100;
            resultado();
          }//stop interval


          $(document).on('keyup', function(e){
            if (e.keyCode == 87){
              p_jugador1 = i;
              clearInterval(interval);
              resultado();
            }
          })


        }, 10);// set interval


      var interval2 =  setInterval(function(){ 

        $("#player2 :nth-child("+ x +")").css("background-color", "#d62a9d");

        if(x == 85){
          $("#player2 :nth-child("+ x +")").css("background-color", "#f1404b");
        }

        x += 1

        if(x >= 103){
          clearInterval(interval2);
          p_jugador2 = 100;
          resultado();
        }//stop interval

        $(document).on('keyup', function(e){
          if (e.keyCode == 80){
            clearInterval(interval2);
            p_jugador2 = x; 
            resultado();
          }
        })

      }, 10);// set interval

    }//logica del juego if

  } , 1000);//contador

   

 function resultado(){

    if(p_jugador2 > 0 && p_jugador1 > 0){

      if(p_jugador2 <= 86 && p_jugador1 > 86 ){
        ganador = $("#jugador1").text()

        console.log("gano jugador2");

        $("#resultado").text("Gano Jugador 2");

      }else if(p_jugador1 <= 86 && p_jugador2 > 86){

        console.log("gano jugador1");
        ganador = $("#jugador1").text()
 
        $("#resultado").text("Gano Jugador 1");

      }else if(p_jugador2 >= 86 && p_jugador2 >= 86){

        console.log("ambos perdieron"); 
        $("#resultado").text("Ambos Perdieron");

      }else if(p_jugador1 <= 86 && p_jugador2 <= 86){

        if(p_jugador1 == p_jugador2 ){
          console.log("empate");
          $("#resultado").text("Empate");
        }

        else if( p_jugador1 > p_jugador2 ){

          console.log("gano jugador 1");
          ganador = $("#jugador1").text()
          $("#resultado").text("Gano Jugador 1");

        }else if( p_jugador2 > p_jugador1 ){

          console.log("gano jugador 2");
          ganador = $("#jugador2").text()

          $("#resultado").text("Gano Jugador 2");
        }else{
          console.log("lalala")
        }//else if

      }//if interno

    }//if
  }//funcion resultado


  })//start button


function resultado(){

    if(p_jugador2 > 0 && p_jugador1 > 0){

      if(p_jugador2 <= 86 && p_jugador1 > 86 ){
        ganador = $("#jugador1").text()

        console.log("gano jugador2");

        $("#resultado").text("Gano Jugador 2");

      }else if(p_jugador1 <= 86 && p_jugador2 > 86){

        console.log("gano jugador1");
        ganador = $("#jugador1").text()
 
        $("#resultado").text("Gano Jugador 1");

      }else if(p_jugador2 >= 86 && p_jugador2 >= 86){

        console.log("ambos perdieron"); 
        $("#resultado").text("Ambos Perdieron");

      }else if(p_jugador1 <= 86 && p_jugador2 <= 86){

        if(p_jugador1 == p_jugador2 ){
          console.log("empate");
          $("#resultado").text("Empate");
        }

        else if( p_jugador1 > p_jugador2 ){

          console.log("gano jugador 1");
          ganador = $("#jugador1").text()
          $("#resultado").text("Gano Jugador 1");

        }else if( p_jugador2 > p_jugador1 ){

          console.log("gano jugador 2");
          ganador = $("#jugador2").text()

          $("#resultado").text("Gano Jugador 2");
        }else{
          console.log("lalala")
        }//else if

      }//if interno

    }//if

  }//funcion resultado



});//document


