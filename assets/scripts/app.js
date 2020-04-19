const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovie = document.querySelector("header button");
// const startAddMovie = document.querySelector("header").lastElementChild;

const backDrop = document.getElementById("backdrop");
const addModalCancelButton = addMovieModal.querySelector(".btn--passive");
const addModalAddButton = addModalCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

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
const addMovieHandler = () => {
    // const x = addMovieModal.querySelector("#title").value;
    // const y = addMovieModal.querySelector("#image-url").value; //just for test
    // const z = addMovieModal.firstElementChild.lastElementChild.value;
    // console.log(`${x}` + `${y}` + z);
    const title = userInputs[0].value;
    const image = userInputs[1].value;
    const rating = userInputs[2].value;
    const ul = document.getElementById("movie-list");
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
    toggleMovieModal();
};

startAddMovie.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
addModalCancelButton.addEventListener("click", cancelAddMovie);
addModalAddButton.addEventListener("click", addMovieHandler);
