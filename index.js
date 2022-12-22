
let player = {
    name: prompt("Please Enter Your Name"),
    chips: 0
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let winningEl = document.getElementById("winning-el")


function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    isAlive = true
    renderGame()
    
}

function renderGame() {
    
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " +sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        winningEl.textContent = player.name + " "+"$"+ "0"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
         winningEl.textContent = player.name + " "+"$"+"145"
        
    } else {
        message = "You're out of the game!"
        isAlive = false
         winningEl.textContent = player.name +" "+"$"+"0"
    }
    messageEl.textContent = message
} 


function newGame() {
    
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
