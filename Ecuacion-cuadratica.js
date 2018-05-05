
function comparacion(){
  var a, b, c, x1, x2, d; 
var a=document.getElementById('CajaTexto1').value;
var b=document.getElementById('CajaTexto2').value;
var c=document.getElementById('CajaTexto3').value;
var resultado=0;
x1=parseFloat(x1);
x1=parseFloat(x1);   
    
    	d=(b*b-4*a*c);
    
		if(d==0){
			alert("No hay solución");
		}
		else
            d=(b*b-4*a*c);
			x1=(-b+(Math.sqrt((d))))/(2*a);
			x2=(-b-(Math.sqrt((d))))/(2*a);
			resultado1=("La solución x1 es: " + x1);
			resultado2=("La solución x2 es: " + x2);
		
    
     resultado1=document.getElementById('CajaTexto4').value=resultado1;
     resultado2=document.getElementById('CajaTexto5').value=resultado2;
}