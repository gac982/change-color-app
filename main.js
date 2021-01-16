   // variables modificadoras
   let bgFondo = document.querySelector('#colorFondo');
   let texto = document.querySelector('#selectText');
   let txtColor = document.querySelector('#colorText');
   let bgText = document.querySelector('#colorFondoText');
   // variables a mostrar
   let pagina = document.querySelector('#square');
   let textMostrar = document.querySelector('#mostrarTexto');

   // funciones
   function cambiarTodo() {
       pagina.style.backgroundColor = bgFondo.value;
       textMostrar.textContent = texto.value;
       textMostrar.style.color = txtColor.value;
       textMostrar.style.backgroundColor = bgText.value;
   }

   // eventos
   bgFondo.addEventListener('input', cambiarTodo);
   texto.addEventListener('input', cambiarTodo);
   txtColor.addEventListener('input', cambiarTodo);
   bgText.addEventListener('input', cambiarTodo);

   // inicio

