// Toggle navigation bar
let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');
    }
});   

var header = document.getElementById("main-nav");
var link = header.getElementsByClassName("active");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Quote generator
var quote = document.getElementById('quote');
var quoteList = [
    "To fold the hands in prayer is well, to open them in charity is better",
    "I feel that if you are blessed, or lucky enough, to be doing well, you should help others",
    "Service to others is the rent you pay for your room here on earth",
    "The purpose of human life is to serve, and to show compassion and the will to help others",
    "Find out how much God has given you and from it take what you need; the remainder is needed by others",
    "Do something wonderful, people may imitate",
];

var selectQuote = function(){
   return quoteList[ Math.floor(Math.random() * quoteList.length)];
}

setInterval(function(){
    quote.innerText = selectQuote();
}, 3000)


// Form validation
document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;}

    var y = document.forms["myForm"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;}

    var z = document.forms["myForm"]["subject"].value;
    if (z == "") {
        alert("Subject must be filled out");
        return false;}
    
    if(x != "" && y != "" && z != ""){
    alert (`Thank you so much for your concern
    Kindly check your email
    `);}
}

// Confirmition before closing the tab
function myfunction() {
    return "Do you really want to leave this page";
}