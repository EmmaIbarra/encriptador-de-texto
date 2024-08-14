function encriptar(texto) {
   let textoEncriptado = '';

   for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
         case 'a':
            textoEncriptado += 'ai';
            break;
         case 'e':
            textoEncriptado += 'enter';
            break;
         case 'i':
            textoEncriptado += 'imes';
            break;
         case 'o':
            textoEncriptado += 'ober';
            break;
         case 'u':
            textoEncriptado += 'ufat';
            break;
         default:
            textoEncriptado += texto[i];
      }
   }
   return textoEncriptado;
}

function desencriptar(texto) {
   let cambio = {ai: 'a', enter: 'e', imes: 'i', ober: 'o', ufat: 'u'};

   let textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
      return cambio[match];
   });
   return textoDesencriptado;
}

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
}

function aplicarResultado(funcion, texto) {
   let textoOriginal = document.getElementById('texto').value;
   let textoResultado = funcion(textoOriginal);
   asignarTextoElemento('#resultado', textoResultado);
   return textoResultado;
}

/*function copiarVisible() {
   let button = document.getElementById('copiar');
   let resultado = aplicarResultado();
   if (resultado === aplicarResultado()) {
      button.classList.remove('boton__copiar__oculto');
      button.classList.add('boton__copiar__visible');
   } else {
      button.classList.remove('boton__copiar__visible');
      button.classList.add('boton__copiar__oculto');
   }

}
copiarVisible();*/

function cambiarFormatoResultado() {
   
   let contenedor = document.getElementById('resultado');
   let resultadoActual = contenedor.innerHTML;
   if (resultadoActual) {
      contenedor.classList.add('resultado-recibido');
   } else {
      contenedor.classList.remove('resultado-recibido');
   }
}

document.getElementById('botonEncript').addEventListener('click',function() {
   aplicarResultado(encriptar);
   cambiarFormatoResultado();
});

document.getElementById('botonDesencript').addEventListener('click', function() {
   aplicarResultado(desencriptar);
   cambiarFormatoResultado();
});