var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick= function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick=function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 

btn1.onclick= function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick=function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}
var modalt = document.getElementById("myModal");

// Get the button that opens the modal
var btnt = document.getElementById("mybest");

// Get the <span> element that closes the modal
var spant = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btnt.onclick= function() {
  modalt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spant.onclick=function() {
  modalt.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {
  if (event.target == modal) {
    modalt.style.display = "none";
  }
}
var modalr = document.getElementById("stp");

// Get the button that opens the modal
var btnr = document.getElementById("mybtn");

// Get the <span> element that closes the modal
var spanr = document.getElementsByClassName("clo")[0];

// When the user clicks the button, open the modal 

btnr.onclick= function() {
  modalr.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanr.onclick=function() {
  modalr.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {
  if (event.target == modalr) {
    modal.style.display = "none";
  }
}