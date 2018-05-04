function comparacion(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    if(numero1>numero2){
        resultado=numero1;
    }
    else
        resultado=numero2;
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
}