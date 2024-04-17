window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}

let slider = document.querySelector(".slider");
let li = document.querySelectorAll(".container .navbar ul li");

let index_value = 0;
let left_position = 0;

li.forEach((item, index) => {
  slider.style.width = li[0].clientWidth + "px";
  slider.style.left = left_position + "px";

  item.onclick = function (){
    slider.style.width = item.clientWidth + "px";
    // console.log(index);
    index_value = index;
    get_left_position();
    slider.style.left = left_position + "px";
    left_position = 0;
  }
});

function get_left_position(){
  for (let i = 0; i < index_value; i++) {
    const element = li[i];
    left_position += element.clientWidth;
    console.log(left_position);
  }
}

var menu = document.getElementById('navbar');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});