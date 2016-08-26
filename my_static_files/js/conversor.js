 <script>
    
    function borrar(){
        document.fo.valores1.value= "";
        document.fo.valores2.value= "";
    }

    function solonumeros(e){
        
        key=e.keyCode || e.which;
        
        teclado=String.fromCharCode(key);
        
        numeros="0123456789.";
       
        
        if(numeros.indexOf(teclado)==-1 ){
            return false;
        }
    }
    
    function solonumeros2(e){
        
        key=e.keyCode || e.which;
        
        teclado=String.fromCharCode(key);
        
        numeros="";
       
        
        if(numeros.indexOf(teclado)==-1 ){
            return false;
        }
    }
    
    
    function cambio(){
        var cambiar = document.fo.valores1.value;
        
        var ayuda1 = document.fo.monedas1.value;
        
        var ayuda2 = document.fo.monedas2.value;
        
        var pri =eval(cambiar*ayuda1);
        var seg =eval(pri/ayuda2);
        
        document.getElementById("valores2").value=seg;
        
    }
    
</script>
