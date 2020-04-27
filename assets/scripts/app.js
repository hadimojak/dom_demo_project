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
        return;
    } else { entryText.classList.toggle('visible'); }
}

const addliFunction = (title,image,rating) => {
    const ol = document.getElementById("movie-list");
    const li = document.createElement('li');
    li.className='movie-element';
    li.innerHTML=`
    <div class='movie-element__image'>
        <img src='${image}' alt='${title}' title='${title}'>
    </div>
    <div class='movie-element__info' >
    <h2> ${title}</h2>
    <p>${rating}/5 starts</p>
    </div>
    `;
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
    const newMovie = { title: title, image: image, rating: rating };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearInputs();
    addliFunction(newMovie.title,newMovie.image,newMovie.rating);
    updateUI();
};

startAddMovie.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
addModalCancelButton.addEventListener("click", cancelAddMovie);
addModalAddButton.addEventListener("click", addMovieHandler);
