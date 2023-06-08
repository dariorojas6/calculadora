function suma() {
   var numero1 = parseInt(document.getElementById("numero1").value)
   var numero2 = parseInt(document.getElementById("numero2").value)

   if (!isNaN(numero1 && !isNaN(numero2))) {
      var resultado = numero1 + numero2
      document.getElementById("resultado").innerHTML = "El resultado es: " + resultado

      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";



   } else {
      alert("Ingrese un numero")
   }

}

function resta() {
   var numero1 = parseInt(document.getElementById("numero1").value)
   var numero2 = parseInt(document.getElementById("numero2").value)

   if (!isNaN(numero1 && !isNaN(numero2))) {
      var resultado = numero1 - numero2
      document.getElementById("resultado").innerHTML = "El resultado es: " + resultado

      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";


   } else {
      alert("Ingrese un numero")
   }

}

function dividir() {
   var numero1 = parseInt(document.getElementById("numero1").value)
   var numero2 = parseInt(document.getElementById("numero2").value)

   if (!isNaN(numero1 && !isNaN(numero2))) {
      var resultado = numero1 / numero2
      document.getElementById("resultado").innerHTML = "El resultado es: " + resultado

      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";


   } else {
      alert("Ingrese un numero")
   }

}

function multiplicacion() {
   var numero1 = parseInt(document.getElementById("numero1").value)
   var numero2 = parseInt(document.getElementById("numero2").value)

   if (!isNaN(numero1 && !isNaN(numero2))) {
      var resultado = numero1 * numero2
      document.getElementById("resultado").innerHTML = "El resultado es: " + resultado

      document.getElementById("numero1").value = "";
     
   } else {
      alert("Ingrese un numero")
   }

}

function binarioaDecimal() {
   var binario= parseInt(document.getElementById("binario").value);
   var numero = binario.toString().split("").reverse();
   resultado = 0

     // Validación de entrada
  if (!/^[01]+$/.test(binario)) {
   alert("La entrada debe contener solo números 0 y 1.");
   document.getElementById("binario").value = "";
   return;
 }

   for (let i = 0; i < numero.length; i++) {
      resultado = resultado + numero[i]*2 **i ;
      
   }
   document.getElementById("decimal").innerHTML = "El decimal es: " + resultado

   document.getElementById("binario").value = "";
   
  
   }