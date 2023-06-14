const url = "https://api.themoviedb.org/3/movie/157336?";
const search = "https://api.themoviedb.org/3/search/movie/";
const key = "api_key=1b80dda88aa3961467567d2f34531e2c";

async function getAllPosts() {
    const response = await fetch(url + key);
  
    console.log(response);

    const data = await response.json();

  console.log(data);
  
}


getAllPosts()



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