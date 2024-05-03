const nav = document.querySelector("#navegador");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const cerrarLinks = document.querySelectorAll(".cerrar-link");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

cerrarLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});


const phrases = [
    "Desarrollador de Software",
    "Técnico en Informática"
];

const delay = 150; // Tiempo de espera entre caracteres en milisegundos
const pause = 2000; // Tiempo de pausa antes de cambiar la frase en milisegundos

let index = 0; // Índice de la frase actual
let charIndex = 0; // Índice del carácter actual

function type() {
    const phrase = phrases[index];
    if (charIndex < phrase.length) {
        document.getElementById('typewriter').textContent += phrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, delay);
    } else {
        setTimeout(erase, pause);
    }
}

function erase() {
    if (charIndex > 0) {
        const phrase = phrases[index];
        document.getElementById('typewriter').textContent = phrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, delay);
    } else {
        index = (index + 1) % phrases.length;
        setTimeout(type, delay * 3); // Tiempo de espera antes de empezar a escribir la próxima frase
    }
}

type(); // Iniciar el efecto de la máquina de escribir

//SLIDER
 //variable para almacenar el intidce actual del slider
 var indiceActual = 0;
 const visibleImages = 3;
 //seleccionar todos los elementos de imagen dentro del "slider"
 var imagenes = document.querySelectorAll(".slider img")
 //seleccionar todos los puntos
 var points = document.querySelectorAll(".point");
 var timer;

 //Funcion para mostrar imagenes
 function mostrarimagenes(){
     //itera sobre cada imagen del slider
     imagenes.forEach((imagen, i) =>{
         //si el indice de la imagen esta dentro del rango de las imagenes visibles..
         if(i >= indiceActual && i < indiceActual + visibleImages){
         //muestra la imagen como block    
             imagen.style.display = "block"
         }else{
             //ocula la imagen 
             imagen.style.display = "none";
         }
     })
     
     //Actualiza el estado de los puntos
     points.forEach((point, i) =>{
     //si el indice de la imagen esta dentro del rango de las imagenes visibles..
     if(i >= indiceActual && i < indiceActual + visibleImages){
     //agrega la clase active para resaltar el punto.
     point.classList.add("active")
     }else{
     //de lo contrario remueve el active para indicar que no esta seleccionado
         point.classList.remove("active")
     }
     })
 }

 //Funcion para mover el slider al punto especifico
 function goToPoint(i){
     //actualiza el indice actual
     indiceActual = i
     //muestra las imagenes actualizadas despues de mover el punto
     mostrarimagenes();
 }
// Esta función controla el deslizamiento automático del carrusel
function autoSlide() {
    // Se establece un temporizador que se ejecutará repetidamente cada cierto intervalo de tiempo
    timer = setInterval(() => {
      // Se comprueba si el índice actual es menor que la longitud total de imágenes menos el número de imágenes visibles
      if (indiceActual < imagenes.length - visibleImages) {
        // Si es así, se incrementa el índice actual para mostrar la siguiente imagen
        indiceActual++;
      } else {
        // De lo contrario, si hemos alcanzado el final del carrusel, volvemos al principio
        indiceActual = 0;
      }
      // Se llama a la función mostrarimagenes() para actualizar la visualización del carrusel
      mostrarimagenes();
    }, 3000); // Cambia la imagen cada 3 segundos
  }
  
  // Se llama a la función autoSlide() para iniciar el deslizamiento automático del carrusel
  autoSlide();
  
 //Selecciona todas las imagenes que tienen la clase tooltip
 const tooltips = document.querySelectorAll('.tooltip-trigger');

 function toolTip(){
     //Itera sobre cada imagen seleccionada
     tooltips.forEach((tooltip) =>{
         //cuando el mouse se mueve sobre la imagen
         tooltip.addEventListener('mouseover',() =>{
             //obtiene el texto de 'title'
             var tooltipText = tooltip.getAttribute('title')
             //crea un nuevo elemento div para el tooltip
             var tooltipElement = document.createElement('div')
             //le añade la clase tooltip a la elemento div
             tooltipElement.classList.add('tooltip')
             // Establece el texto del tooltip al texto obtenido del atributo 'title'
             tooltipElement.innerText = tooltipText;
             // Agrega el elemento tooltip al final del cuerpo del documento HTML
             document.body.appendChild(tooltipElement);
             // Obtiene la posición (top, left) de la imagen relativa al viewport
             const { top, left } = tooltip.getBoundingClientRect();
            // Establece la posición vertical del tooltip sumando la posición vertical de la imagen
            // y el desplazamiento vertical de la página (window.scrollY)
            tooltipElement.style.top = `${top + window.scrollY}px`;
            // Establece la posición horizontal del tooltip igual a la posición horizontal de la imagen
            tooltipElement.style.left = `${left}px`;
             // Añade la clase 'active' al tooltip para mostrarlo
             tooltipElement.classList.add('active');
         })
         // Cuando el mouse sale de la imagen...
         tooltip.addEventListener('mouseout', () => {
             // Busca el tooltip y lo remueve del documento
             const tooltip = document.querySelector('.tooltip');
             if (tooltip) {
                 tooltip.remove();
             }
         });
     })
 }



 toolTip()
 
 //Incia el slider mostrando las imagenes iniciales
 mostrarimagenes();

 