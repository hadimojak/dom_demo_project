const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovie = document.querySelector("header button");
// const startAddMovie = document.querySelector("header").lastElementChild;

const backDrop = document.getElementById("backdrop");
const addModalCancelButton = addMovieModal.querySelector(".btn--passive");

const toggleBackDrop = () => {
    backDrop.classList.toggle("visible");
};

function toggleMovieModal() {
    addMovieModal.classList.toggle("visible");
    toggleBackDrop();
}

const backDropClickHandler = () => {
    toggleMovieModal();
};
const cancelAddMovie = () => {
    toggleMovieModal();
};

startAddMovie.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
addModalCancelButton.addEventListener("click", cancelAddMovie);
