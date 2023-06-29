const key = "api_key=1b80dda88aa3961467567d2f34531e2c";


// API TMDB

const myUrl = 'https://api.themoviedb.org/3';


const API_URL = `${myUrl}/discover/movie?sort_by=popularity.desc&${key}`;
const linguage = "?language=pt";
const generos = `/genre/movie/list${linguage}`;

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const searchURL = `${myUrl}/search/movie?${key}&query=`;
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
      
      result.map(function (movie, index) {
      const { poster_path, original_title} = movie;
      const imagePath = poster_path ? IMG_URL + poster_path : "./img-01.jpeg";
      const truncatedTitle = original_title.length > 15 ? original_title.slice(0, 15) + "..." : original_title;
      sliders.insertAdjacentHTML(
          "beforeend",
  
          
          `
          <div class="movie-box">
          <img class="movie-box-img img-${index} slider-img" src="${imagePath}"/>
            <div class="box-text">
                <h2 class="movie-title">${truncatedTitle}</h2>              
            </div>
          </div>
          `
      )
    });
  
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
const form = document.getElementById("search-box");
const query = document.getElementById("search-input");
const result = document.getElementById("result");
const content = document.getElementById("content");
const boxResult = document.getElementById("box-result");

// Limpa o input search quando digita algo
function cleanScreen() {
  // content.innerHTML = "";  Limpa o conteúdo da div
  if(query.value === ""){
    // Exibir o conteúdo da página e ocultar o resultado da pesquisa
    content.style.display = "block";
    boxResult.style.display = "none";
    return;
  }
    // Ocultar o conteúdo da página e exibir o resultado da pesquisa
    content.style.display = "none";
    boxResult.style.display = "flex";
}

let page = 1;
let isSearching = false;

// Fetch JSON data from url
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}

// Fetch and show results based on url
async function fetchAndShowResult(url) {
    const data = await fetchData(url);
    if (data && data.results) {
        showResults(data.results);
    }
}

// Create movie card html template
function createMovieCard(movie) {
    const { poster_path, original_title, release_date, overview } = movie;
    const imagePath = poster_path ? IMG_URL + poster_path : "./img-01.jpeg";
    const truncatedTitle = original_title.length > 15 ? original_title.slice(0, 15) + "..." : original_title;
    const formattedDate = release_date || "Não encontrado";
    const cardTemplate = `
        <div class="column">
            <div class="card">
                <a class="card-media" href="./img-01.jpeg">
                    <img src="${imagePath}" alt="${original_title}" width="100%" />
                </a>
                <div class="card-content">
                    <div class="card-header">
                        <div class="left-content">
                        <h3 style="font-weight: 600">${truncatedTitle}</h3>
                        <span style="color: #12efec">${formattedDate}</span>
                        </div>
                    <div class="right-content">
                        <a href="${imagePath}" target="_blank" class="card-btn">triller</a>
                    </div>
                </div>
                <div class="info">
                    ${overview || "No overview yet..."}
                </div>
            </div>
        </div>
    </div>
    `;
    return cardTemplate;
}

// Clear result element for search
function clearResults() {
    result.innerHTML = "";
}

// Show results in page
function showResults(item) {
    const newContent = item.map(createMovieCard).join("");
    result.innerHTML += newContent || "<p class='tagp'>Não encontrado</p>";
}

// Load more results
async function loadMoreResults() {
    if (isSearching) {
        return;
    }
    page++;
    const searchTerm = query.value;
    const url = searchTerm ? `${searchURL}${searchTerm}&page=${page}` : `${API_URL}&page=${page}`;
    await fetchAndShowResult(url);
}

// Detect end of page and load more results
function detectEnd() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadMoreResults();
    }
}

// Handle search
async function handleSearch(e) {
    e.preventDefault();
    const searchTerm = query.value.trim();
    if (searchTerm) {
        isSearching = true;
        clearResults();
        const newUrl = `${searchURL}${searchTerm}&page=${page}`;
        await fetchAndShowResult(newUrl);
        query.value = "";
    }
}

// Event listeners
form.addEventListener('submit', handleSearch);
window.addEventListener('scroll', detectEnd);
window.addEventListener('resize', detectEnd);

// Initialize the page
async function init() {
    clearResults();
    const url = `${API_URL}&page=${page}`;
    isSearching = false;
    await fetchAndShowResult(url);
}

init();
  // pesquisa de filmes Fim