$(document).ready(function(){
    var boton_teoria_inductivos=$("#boton_teoria_inductivos");
    var boton_teoria_capacitivos=$("#boton_teoria_capacitivos");
    var boton_teoria_resistivos=$("#boton_teoria_resistivos");
    var boton_ocultar_teoria_inductivos=$("#boton_ocultar_teoria_inductivos");
    var boton_ocultar_teoria_capacitivos=$("#boton_ocultar_teoria_capacitivos");
    var boton_ocultar_teoria_resistivos=$("#boton_ocultar_teoria_resistivos");

    var flecha_1=$("#flecha_1").click(function(){
        flecha_1.hide();
        var flecha_11=$("#flecha_11");
        flecha_11.show();
        $("#inductivos").fadeIn();
        boton_teoria_inductivos.show();
    });

     var flecha_11=$("#flecha_11").click(function(){
        flecha_11.hide();
        var flecha_1=$("#flecha_1");
        flecha_1.show();
        $("#inductivos").hide();
        boton_teoria_inductivos.hide();
        boton_ocultar_teoria_inductivos.hide();
        $("#teoria_inductivos").hide();
    });

    var flecha_2=$("#flecha_2").click(function(){
        flecha_2.hide();
        var flecha_22=$("#flecha_22");
        flecha_22.show();
        $("#capacitivos").fadeIn();
        boton_teoria_capacitivos.show();
    });

      var flecha_22=$("#flecha_22").click(function(){
        flecha_22.hide();
        var flecha_2=$("#flecha_2");
        flecha_2.show();
        $("#capacitivos").hide();
        boton_teoria_capacitivos.hide();
        boton_ocultar_teoria_capacitivos.hide();
        $("#teoria_capacitivos").hide();
    });

    var flecha_3=$("#flecha_3").click(function(){
        flecha_3.hide();
        var flecha_33=$("#flecha_33");
        flecha_33.show();
        $("#resistivos").fadeIn();
        boton_teoria_resistivos.show();
    });

    var flecha_33=$("#flecha_33").click(function(){
        flecha_33.hide();
        var flecha_3=$("#flecha_3");
        flecha_3.show();
        $("#resistivos").hide();
        boton_teoria_resistivos.hide();
        boton_ocultar_teoria_resistivos.hide();
        $("#teoria_resistivos").hide();
    });

    var flecha_4=$("#flecha_4").click(function(){
        flecha_4.hide();
        var flecha_44=$("#flecha_44");
        flecha_44.show();
        $("#uso").fadeIn();
    });

    var flecha_44=$("#flecha_44").click(function(){
        flecha_44.hide();
        var flecha_4=$("#flecha_4");
        flecha_4.show();
        $("#uso").hide();
    });

    var flecha_5=$("#flecha_5").click(function(){
        flecha_5.hide();
        var flecha_44=$("#flecha_55");
        flecha_55.show();
        $("#informacion_personal").fadeIn();
    });

    var flecha_55=$("#flecha_55").click(function(){
        flecha_55.hide();
        var flecha_5=$("#flecha_5");
        flecha_5.show();
        $("#informacion_personal").hide();
    });

    //MOSTRAR TEORIA
    boton_teoria_inductivos.click(function(){
        boton_teoria_inductivos.hide();
        boton_ocultar_teoria_inductivos.show();
        $("#teoria_inductivos").show();
    });

    boton_teoria_capacitivos.click(function(){
        boton_teoria_capacitivos.hide();
        boton_ocultar_teoria_capacitivos.show();
        $("#teoria_capacitivos").show();
    });

    boton_teoria_resistivos.click(function(){
        boton_teoria_resistivos.hide();
        boton_ocultar_teoria_resistivos.show();
        $("#teoria_resistivos").show();
    });

    //OCULTAR TEORIA
    boton_ocultar_teoria_inductivos.click(function(){
        boton_ocultar_teoria_inductivos.hide();
        $("#teoria_inductivos").hide();
        boton_teoria_inductivos.show();
    });

    boton_ocultar_teoria_capacitivos.click(function(){
        boton_ocultar_teoria_capacitivos.hide();
        $("#teoria_capacitivos").hide();
        boton_teoria_capacitivos.show();
    });

    boton_ocultar_teoria_resistivos.click(function(){
        boton_ocultar_teoria_resistivos.hide();
        $("#teoria_resistivos").hide();
        boton_teoria_resistivos.show();
    });

});