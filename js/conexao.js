const key = "api_key=1b80dda88aa3961467567d2f34531e2c";


// API TMDB

const url = 'https://api.themoviedb.org/3';


const API_URL = `${url}/discover/movie?sort_by=popularity.desc&${key}`;
const linguage = "?language=pt";
const generos = `/genre/movie/list${linguage}`;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = "/search/movie?";
// const searchURL = "/search/movie?${key}&quert=";


const genres = [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animação"
    },
    {
      "id": 35,
      "name": "Comédia"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentário"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Família"
    },
    {
      "id": 14,
      "name": "Fantasia"
    },
    {
      "id": 36,
      "name": "História"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Mistério"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ficção científica"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },
    {
      "id": 37,
      "name": "Faroeste"
    }
  ]


  async function showMovieData() {

    var result = await axios.get(
      `${API_URL}`
    )
  console.log(result);
  
  result = result.data.results;

    result.map(function (cur, index) {
      sliders.insertAdjacentHTML(
          "beforeend",
  
          
          `
          <div class="movie-box">
          <img class="movie-box-img img-${index} slider-img" src="${IMG_URL}/${cur.poster_path}"/>
            <div class="box-text">
                <h2 class="movie-title">${getTitle()}</h2>
              <a href="#" class="btn play-btn">
                <i class='bx bx-right-arrow'></i>
              </a>
            </div>
          </div>
          `
      )
    });

    function getTitle() {

      const title = document.getElementsByClassName('movie-title');
      
      axios.get(API_URL)
        .then(response => {
          const data = response.data.results[i].title;
          console.log(data)
          title.innerHTML = data;
        })
        .catch(error => console.log(error))
    }
  
    scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
  }

  // Insere os Generos nas Categorias
  var selectedGenre = []
  setGenre();
  function setGenre() {
    const genreEL = document.getElementById('box_option');
      genreEL.innerHTML= '';
      genres.forEach(genre => {
          const opt = document.createElement('a');
          opt.classList.add('tag');
          opt.id=genre.id;
          opt.innerText = genre.name;
          opt.addEventListener('click', () => {
              if(selectedGenre.length == 0){
                  selectedGenre.push(genre.id);
              }else{
                  if(selectedGenre.includes(genre.id)){
                      selectedGenre.forEach((id, idx) => {
                          if(id == genre.id){
                              selectedGenre.splice(idx, 1);
                          }
                      })
                  }else{
                      selectedGenre.push(genre.id);
                  }
              }
              console.log(selectedGenre)
          })
          genreEL.append(opt);
      })
  }

  // Insere os Generos nas Categorias Fim


  // pesquisa de filmes

  const searchMovie = document.querySelector("form");

  searchMovie.onsubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    if(search == ""){
      alert("Pesquise por um Filme!");
      return;
    }

        axios.get(`${url}${searchURL}${key}&quert=${search}`)
          .then(data => {
            const movie = data.results
            console.log(data)
          })
    
  }
  
  // pesquisa de filmes Fim