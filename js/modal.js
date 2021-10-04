// OBTIENE FORMULARIO MODAL DEL AGREGAR PRODUCTO
var modal = document.getElementById("myModal");

// OBTIENE BOTON MODAL AGREGAR PRODUCTO
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal - PRIMERA POSICION
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(){
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}