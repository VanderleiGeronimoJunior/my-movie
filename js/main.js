

// NavBar
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
	search.classList.toggle('active');
	navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
	navbar.classList.toggle('active');
	search.classList.remove('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	search.classList.remove('active');	
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});

// NavBarFim

//  Carousel 1

const sliders = document.querySelector('.carouselBox');
const title = document.querySelector('.title');
var scrollPerClick;
var imagePadding = 20;

showMovieData();

var scrollAmount = 0;

function sliderScorllLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if(scrollAmount < 0){
    scrollAmount = 0
  }
};

function sliderScorllRight() {
  if(scrollAmount<= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    })
  }
}
//  Carousel 1 Fim


// Loader
onload = () => {
	const load = document.getElementById('loader');

	setTimeout( () => {
		load.style.display = 'none';		
	}, 2500);
}


