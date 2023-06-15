

const url = `https://api.themoviedb.org/3/movie/${key}`;
const src = "https://api.themoviedb.org/3/search/movie/";


// async function getMovie() {
//     const response = await fetch(url);
  
//     console.log(response);

//     const data = await response.json();

//   console.log(data);
  
// }


// getMovie()

const authentication = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjgwZGRhODhhYTM5NjE0Njc1NjdkMmYzNDUzMWUyYyIsInN1YiI6IjYxOTkxZTM1NGY5YTk5MDA2Nzg3ZTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QzQM7rSPyevB1OPqHxoxkXAHgYiC5h30HsjyBWXwQw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', authentication)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjgwZGRhODhhYTM5NjE0Njc1NjdkMmYzNDUzMWUyYyIsInN1YiI6IjYxOTkxZTM1NGY5YTk5MDA2Nzg3ZTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QzQM7rSPyevB1OPqHxoxkXAHgYiC5h30HsjyBWXwQw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));




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

// NavBar Fim


// carrosel

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});


// carrosel Fim