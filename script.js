// navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = toggleMenu ;

function toggleMenu(){
  navbar.classList.toggle('active');
  profile.classList.remove('active');
}

//profile
let profile = document.querySelector(".profile");

document.querySelector("#user-btn").onclick = toggleProfile;

function toggleProfile(){
  profile.classList.toggle('active');
  navbar.classList.remove('active');
}
//window onscrolling
window.onscroll = remove;

function remove(){
  navbar.classList.remove('active');
  profile.classList.remove('active');
}

function onload(){
  let website = document
  website.onload = url('loader.gif')
}
