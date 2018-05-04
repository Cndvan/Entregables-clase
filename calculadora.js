
function suma(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    numero1=parseFloat(numero1);
    numero2=parseFloat(numero2);
    resultado=parseFloat(resultado);
    resultado=numero1+numero2;
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
    
}


function resta(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    numero1=parseFloat(numero1);
    numero2=parseFloat(numero2);
    resultado=parseFloat(resultado);
    resultado=numero1-numero2;
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
    
}

function division(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    numero1=parseFloat(numero1);
    numero2=parseFloat(numero2);
    resultado=parseFloat(resultado);
    resultado=numero1/numero2;
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
    
}

function multiplicacion(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    numero1=parseFloat(numero1);
    numero2=parseFloat(numero2);
    resultado=parseFloat(resultado);
    resultado=numero1*numero2;
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
    
}

