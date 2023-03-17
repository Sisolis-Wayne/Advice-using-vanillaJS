let adviceNumber = document.getElementById("advice-number")
let quote = document.getElementById("quote")
let dice = document.getElementById("dice-container")

const url = "https://api.adviceslip.com/advice"

fetchAdvice(url)


dice.addEventListener("click", () => {
    fetchAdvice(url)
})


function fetchAdvice(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            adviceNumber.textContent = data.slip.id
            quote.textContent = data.slip.advice
        })
        .catch(err => console.log("Something Went Wrong"))
}

