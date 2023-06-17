
// API TMDB

const url = 'https://api.themoviedb.org/3';
// const src = "https://api.themoviedb.org/3/search/movie/";


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


// Pegar filmes da API
getMovie(API_URL)

function getMovie(url) {
    lastUrl = url;
      fetch(url).then(res => res.json()).then(data => {
          console.log(data.results)
          if(data.results.length !== 0){
              showMovies(data.results);
            //   currentPage = data.page;
            //   nextPage = currentPage + 1;
            //   prevPage = currentPage - 1;
            //   totalPages = data.total_pages;
  
            //   current.innerText = currentPage;
  
            //   if(currentPage <= 1){
            //     prev.classList.add('disabled');
            //     next.classList.remove('disabled')
            //   }else if(currentPage>= totalPages){
            //     prev.classList.remove('disabled');
            //     next.classList.add('disabled')
            //   }else{
            //     prev.classList.remove('disabled');
            //     next.classList.remove('disabled')
            //   }
  
            //   Ao clicar no Botão a página volta ao topo.
            //   optionEl.scrollIntoView({behavior : 'smooth'})
  
          }else{
            // se não encontrar o filme mostra a mensagem.
              main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
          }
         
      })
  
  }

//  Mostrar filmes
  function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('gallery');
        movieEl.innerHTML = `

        <div class="item swiper-slide">

                <div class="movie-box">

                <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}" class="movie-box-img d-block w-100">

                <div class="box-text">
                    <h2 class="movie-title">${title}</h2>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>

            </div>

        </div>
        
        `

        main.appendChild(movieEl);

        // document.getElementById(id).addEventListener('click', () => {
        //   console.log(id)
        //   openNav(movie)
        // })
    })
}

// Cor da Nota

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}


// Cor da Nota Fim

// Categorias

// const optionEl = document.getElementById('option');

// let selectedGenre = []
// setGenre();
// function setGenre() {
//     optionEl.innerHTML= '';
//     genres.forEach(genre => {
//         const t = document.createElement('div');
//         t.classList.add('cat', 'box_option');
//         t.id=genre.id;
//         t.innerText = genre.name;
//         t.addEventListener('click', () => {
//             if(selectedGenre.length == 0){
//                 selectedGenre.push(genre.id);
//             }else{
//                 if(selectedGenre.includes(genre.id)){
//                     selectedGenre.forEach((id, idx) => {
//                         if(id == genre.id){
//                             selectedGenre.splice(idx, 1);
//                         }
//                     })
//                 }else{
//                     selectedGenre.push(genre.id);
//                 }
//             }
//             console.log(selectedGenre)
//             getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
//             highlightSelection()
//         })
//         optionEl.append(t);
//     })
// }

// Categorias Fim

// API TMDB Fim



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

// const controls = document.querySelectorAll(".control");
// let currentItem = 0;
// const items = document.querySelectorAll(".item");
// const maxItems = items.length;

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     isLeft = e.target.classList.contains("arrow-left");

//     if (isLeft) {
//       currentItem -= 1;
//     } else {
//       currentItem += 1;
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0;
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1;
//     }

//     items.forEach((gallery) => gallery.classList.remove("current-item"));

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
//       inline: "center"
//     });

//     items[currentItem].classList.add("current-item");
//   });
// });


// carrosel Fim