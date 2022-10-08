let page = 1;
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click", () => {
  if (page < 1000) {
    page += 1;

    loadMovies();
  }
});

btnPrevious.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    loadMovies();
  }
});

const loadMovies = async () => {
  try {
    const answer = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6e48ea8632ab4ef52b129a03646a7eac&language=en&page=${page}`
    );

    if (answer.status === 200) {
      const data = await answer.json();

      let movies = "";
      data.results.forEach((item) => {
        movies += `
        <div class = 'movie'>
            <img class = 'poster' src='https://image.tmdb.org/t/p/w500/${item.poster_path}'>
            <h3 class='title'>${item.title}</h3>
        </div>
        `;
      });

      document.getElementById("container").innerHTML = movies;
    } else if (answer.status === 401) {
      console.log("Id no found");
    } else if (answer.status === 404) {
      console.log("The movie does not exist");
    } else {
      console.log("Something is wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

loadMovies();
