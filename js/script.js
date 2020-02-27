function retrieveData (){
    fetch('https://api.myjson.com/bins/zyv02', {
    method: "GET",
    mode: 'cors',
    cache: 'default' 
    })
    .then(resp=>resp.json())
    .then(checkRes=> {
        fillPage(checkRes)
        fillPage2 ()
        fillPage3 (checkRes)
        fillPage4 ()
        console.log(checkRes.books)
        
    })
    .catch(err=> console.log(err))
}

retrieveData()

function fillPage (array) {
array.books.forEach((element,index)=>{
  var fillBooks = `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${element.cover}" alt="Book Cover">
      </div>
      <div class="flip-card-back">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <button class="flipButton" onclick="openModal();currentSlide(${index + 1})" type="button">More Information</button>
      </div>
    </div>
  </div>
  `
  document.getElementById("body").innerHTML += fillBooks
})
}

function fillPage2 () {
    var fillModalLightBox = `
    <div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div id="getLightBox" class="modal-content">
    `
    document.getElementById("body").innerHTML += fillModalLightBox
}

function fillPage3 (array) {
    array.books.forEach((element,index)=>{
    var fillModalLightBox2 = `
    <div class="mySlides">
      <div class="numbertext">${index + 1} / ${array.books.length}</div>
      <img src="${element.detail}" style="width:100%">
    </div>
    `
    document.getElementById("getLightBox").innerHTML += fillModalLightBox2
    })
}

function fillPage4 () {
    var fillModalLightBox3 = `
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <div class="caption-container">
      <p id="caption"></p>
    </div>
    `
    document.getElementById("getLightBox").innerHTML += fillModalLightBox3
}
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function slideIndex() {
var slideIndex = 1;
showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
        showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
  }

function myFunction() {
 
var input = document.getElementById("myInput");
var filter = input.value.toUpperCase()
var body = document.getElementById("body")
var cards = body.getElementsByClassName("flip-card")
for (i=0; i< cards.length; i++) {
  var insideText = cards[i].getElementsByTagName("h3")[0];
  var insideText2 = cards[i].getElementsByTagName("p")[0]
  if (cards) {
    var txtValue = insideText.textContent //|| insideText.innerText 
    var txtValue2 = insideText2.textContent //|| insideText2.innerText
  }
  if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
    cards[i].style.display = "";
  } else {
    cards[i].style.display = "none";
  }
  }
}