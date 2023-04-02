import css from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const main = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const api_key = "766bd5e76ce1c582738f7b124d8c7e49";

  const getMovies = async () => {
    axios
      .get(`${baseUrl}/discover/movie?api_key=${api_key}`)
      .then((response) => {
        return response.data;
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllMovies(responseJson.results);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };
  const renderAllMovies = (movies) => {
    const listMoviesElement = document.querySelector("main #list-sports");
    listMoviesElement.innerHTML = "";

    movies.forEach((movie) => {
      listMoviesElement.innerHTML += `
        <style>
            ${css}
        </style>
        <a href="" class="card">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}" />
          <div class="card-body">
            <p class="card-title">
              ${movie.original_title}
            </p>
            <p class="release-date">
              ${movie.release_date}
            </p>
            <p class="card-text">
              ${movie.overview}
            </p>
          </div>
        </a>
      `;
    });
  };

  const showResponseMessage = (message = "Ups something error") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getMovies();
  });
}

export default main;
