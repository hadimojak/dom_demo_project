const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovie = document.querySelector("header button");
// const startAddMovie = document.querySelector("header").lastElementChild;
const backDrop = document.getElementById("backdrop");
// const backDrop = document.body.firstElementChild;
const addModalCancelButton = addMovieModal.querySelector(".btn--passive");
const addModalAddButton = addModalCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
//const userInputs = addMovieModal.getElementsByTagName('input');
const movies = [];
const entryText = document.getElementById('entry-text');
const ol = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById('delete-modal');

const toggleBackDrop = () => {
    backDrop.classList.toggle("visible");
};

function closeMovieModal() {
    addMovieModal.classList.remove("visible");
}

function showMovieModal() {
    addMovieModal.classList.add("visible");
    toggleBackDrop();
}

const backDropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearInputs();
};

const cancelAddMovie = () => {
    closeMovieModal();
    toggleBackDrop();
    clearInputs();
};

const clearInputs = () => {
    // userInputs[0].value = '';
    // userInputs[1].value = '';
    // userInputs[2].value = '';
    for (const userInput of userInputs) {
        userInput.value = '';
    }

};

const updateUI = () => {
    if (movies.length === 0) {
        entryText.classList.remove('visible');
    } else { entryText.classList.add('visible'); }
}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);// movieIndex is removed from array
    ol.children[movieIndex].remove();
    //ol.removeChild(ol.children[movieIndex]); //for old browsers 
    closeMovieDeletionModal();
    updateUI();
}

const closeMovieDeletionModal = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();
    // deleteMovie(movieId);
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDelettionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDelettionButton.replaceWith(confirmDelettionButton.cloneNode(true));
    confirmDelettionButton = deleteMovieModal.querySelector('.btn--danger');

    // confirmDelettionButton.removeEventListener('click', deleteMovie.bind(null, movieId)); //will not work
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDelettionButton.addEventListener('click', deleteMovie.bind(null, movieId));
}

const addliFunction = (id, title, image, rating) => {
    const li = document.createElement('li');
    li.className = 'movie-element';
    li.innerHTML = `
    <div class='movie-element__image'>
        <img src='${image}' alt='${title}' title='${title}'>
    </div>
    <div class='movie-element__info' >
        <h2> ${title}</h2>
        <p>${rating}/5 starts</p>
    </div>
    `;
    li.addEventListener('click', deleteMovieHandler.bind(null, id));
    ol.append(li);
};

const addMovieHandler = () => {
    // const x = addMovieModal.querySelector("#title").value;
    // const y = addMovieModal.querySelector("#image-url").value; //just for test
    // const z = addMovieModal.firstElementChild.lastElementChild.value;
    // console.log(`${x}` + `${y}` + z);
    const title = userInputs[0].value;
    const image = userInputs[1].value;
    const rating = userInputs[2].value;

    if (
        title.trim() === "" ||
        image.trim() === "" ||
        rating.trim() === "" ||
        +rating < 1 ||
        +rating > 5
    ) {
        alert("bad input!");
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: title,
        image: image,
        rating: rating
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackDrop();
    clearInputs();
    addliFunction(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

startAddMovie.addEventListener("click", showMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
addModalCancelButton.addEventListener("click", cancelAddMovie);
addModalAddButton.addEventListener("click", addMovieHandler);
