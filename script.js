const ul = document.querySelector("#container-list");

const removeMoviesFromDom = () => {
	while (ul.hasChildNodes()) {
		ul.removeChild(ul.firstChild);
	}
};

const addMoviesToDom = (movies) => {
	removeMoviesFromDom();
	const moviesBackToList = movies.map((movie) => {
		var list = document.createElement("li");
		var link = document.createElement("a");
		var img = document.createElement("img");
		list.innerHTML = movie.title;

		img.src = movie.poster;

		link.href = "https://www.imdb.com/title/" + movie.imdbID;
		link.target = "_blank";

		ul.appendChild(list);
		list.appendChild(link);
		link.appendChild(img);
		return list;
	});
	return moviesBackToList;
};
addMoviesToDom(movies);

const filterMovies = (wordInMovie) => {
	removeMoviesFromDom();
	return movies.filter((movie) => {
		return movie.title.includes(wordInMovie);
	});
};

function filterLatestMovies() {
	removeMoviesFromDom();
	return movies.filter((movie) => {
		return movie.year >= 2014;
	});
}
const handleOnChangeEvent = (event) => {
	switch (event.target.value) {
		case "all-movie":
			addMoviesToDom(filterLatestMovies());
			break;
		case "avenger":
			addMoviesToDom(filterMovies("Avenger"));
			break;
		case "x-men":
			addMoviesToDom(filterMovies("X-Men"));
			break;
		case "princess":
			addMoviesToDom(filterMovies("Princess"));
			break;
		case "batman":
			addMoviesToDom(filterMovies("Batman"));
			break;
	}
};

const radioButton = document.getElementsByName("film-filter");
radioButton.forEach((radioButton) => {
	radioButton.addEventListener("change", handleOnChangeEvent);
});
