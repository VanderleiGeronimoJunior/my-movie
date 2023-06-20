
// API TMDB

const url = 'https://api.themoviedb.org/3';


const API_URL = `${url}/discover/movie?sort_by=popularity.desc&${key}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${url}/search/movie?${key}`;

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

// Cor da Nota


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


async function showMovieData() {

  var result = await axios.get(
    `${API_URL}`
  )
console.log(result);

  result = result.data.results;
  
  result.map(function (cur, index) {
    sliders.insertAdjacentHTML(
        "beforeend",

        
        `<img class="img-${index} slider-img" src="${IMG_URL}/${cur.poster_path}"/>`
    )
  });

  scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}


// Loader
onload = () => {
	const load = document.getElementById('loader');

	setTimeout( () => {
		load.style.display = 'none';		
	}, 2500);
}


