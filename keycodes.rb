Javascript Key Codes

http://www.cambiaresearch.com/articles/15/javascript-key-codes

find the keycodes
 $(document).keypress(function(e){
      console.log(e.keyCode);
  });

 http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=00000520.html


 $(document).on('keyup', function(e){
    if (e.keyCode == 87){
      console.log("lala")
    }
})

$(document).on('keyup', function(e){
    if (e.keyCode == 80){
      console.log("lala")
    }
})


  // $(document).keypress(function(e){
  //           if(e.which == 119) {
  //             p_jugador1 = i;
  //             clearInterval(interval);
  //             resultado();
  //           }//if tecla w  
  //         });//keypress