const ratingButtons = document.querySelectorAll(".ratingButton");
const ratedTotal = document.querySelector(".ratedTotal");
const submitButton = document.querySelector(".submitButton");

const ratingCard = document.querySelector(".ratingStateCard");
const thankYouCard = document.querySelector(".thankYouStateCard");

ratingButtons.forEach(button => button.addEventListener("click", (event) => {

    let chosenButtonAlreadyExists = document.querySelector(".chosenRating");

    if(chosenButtonAlreadyExists) {
        chosenButtonAlreadyExists.classList.remove("chosenRating")
    }

    event.target.classList.add("chosenRating")

}));

submitButton.addEventListener("click", () => {
    let chosenRating = document.querySelector(".chosenRating");

    ratedTotal.innerText = chosenRating.dataset.rateNumber;

    ratingCard.style.display = "none"
    thankYouCard.style.display = "flex"
});