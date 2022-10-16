const urlGet = "https://api.themoviedb.org/3/discover/movie?api_key=6f74fc1352fda9dedf2484af41949bbf&sort_by=popularity.desc";
const urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=6f74fc1352fda9dedf2484af41949bbf&query=";
const img = "https://image.tmdb.org/t/p/original/";
const valueContent = document.getElementById("valueContent");
const searchMovie = document.getElementById("searchMovie");
let array = [];

getMovies();

function getMovies() {
  fetch(urlGet)
    .then((response) => response.json())
    .then((listMovie) => {
        listMovie.results.map((item) => {
        valueContent.innerHTML += `
      <div class="col-md-4 p-3">
            <div class="card text-black shadow-lg rounded border border-white">
                <img src="${img}${item.poster_path}" class="card-img-top" alt="">
                <div class="card-body">
                        <div class="d-flex aling-items-center justify-content-between">
                        <p class="card-title">${item.title}</p>
                        <p class="card-text">${item.vote_average}</p>
                        </div>
                        <br/>
                    <p>${item.release_date}</p>  
                </div>
            </div>
      </div>`;
      });
    });
}

searchMovie.addEventListener("cari", () => {
  valueContent.innerHTML = "";
  if (searchMovie.value == "") {
    return getMovies();
  } else {
    fetch(urlSearch + searchMovie.value)
      .then((response) => response.json())
      .then((listMovie) => {
        listMovie.results.map((item) => {
            valueContent.innerHTML += `
          <div class="col-md-4 p-3">
                <div class="card" style="width: 18rem;">
                    <img src="${img}${item.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="d-flex aling-items-center justify-content-between">
                            <p class="card-title">${item.title}</p>
                            <p class="card-text">${item.vote_average}</p>
                        </div>
                        <br/>
                        <p>${item.release_date}</p>  
                    </div>
                </div>
          </div>`;
        });
      });
  }
});