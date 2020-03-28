
function tabColor(n) {
  let i;
  let tabs = document.getElementsByClassName("tab");
  for(i=0;i<tabs.length;i++){
    tabs[i].style.color = "white";
  }
  tabs[n].style.color = "brown";
  tabs[n].style.backgroundColor = "beige"
}




let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  
  if (n >= slides.length-1) { 
    document.getElementById("next1").style.display = "none" ;
    document.getElementById("prev1").style.display = "block";
    slideIndex = slides.length - 1;
  }
  else if (n <= 0) { 
    document.getElementById("prev1").style.display = "none";
    document.getElementById("next1").style.display = "block";
    slideIndex = 0;
   }
  else{
    document.getElementById("prev1").style.display = "block";
    document.getElementById("next1").style.display = "block";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  
}
