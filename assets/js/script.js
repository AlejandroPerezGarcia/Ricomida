$(function(){

    //recetas relacionadas
    $('.cart-title').click(function(){
      $(".text-secondary").slideToggle();  // muestra y oculta las recetas relacionadas
    });

    //boton correo
    $('#enviarCorreo').click(function(){
      alert('El correo fue enviado correctamente....'); 
    });

   // $('#enviarCorreo').popover({trigger: "hover"});

    $('.botones').popover({title: "Header", trigger: "hover"});


     //RECETAS
     $('#ingrediente').on("dblclick",function(){      
        $('#ingrediente').css("color","red");     
    });

     //INGREDIENTE
      $('#preparacion').dblclick(function(){
        $('#preparacion').css("color","red");  
      });
  
    
 
 
 })