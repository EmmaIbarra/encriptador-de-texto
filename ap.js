
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
}

function encriptar() {
   let textoUsuario = document.getElementById('texto').value;
   let textoEnLista = textoUsuario.split('');
   let nuevoTexto = [];

   for (let i = 0; i < textoEnLista.length; i++) {
      if (textoEnLista[i] == 'a') {
         nuevoTexto.push('ai');
         } else if (textoEnLista[i] == 'e') {
            nuevoTexto.push('enter');
            } else if (textoEnLista[i] == 'i') {
               nuevoTexto.push('imes');
               } else if (textoEnLista[i] == 'o') {
                  nuevoTexto.push('ober');
                  } else if (textoEnLista[i] == 'u') {
                     nuevoTexto.push('ufat');
                     } else {
                        nuevoTexto.push(textoEnLista[i]);
      
      }
   }

   let textoEncriptado = nuevoTexto.join('');
   return textoEncriptado;
}

document.getElementById('botonEncript').addEventListener('click',function() {
   let textoEncriptado = encriptar();
   asignarTextoElemento('#resultado', textoEncriptado);
});