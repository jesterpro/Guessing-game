let secretNumber = Math.floor(Math.random() * 20) + 1;

// Count the player's attempts
let attempts = 0;

// Function to check the player's guess
function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);

    attempts++;

    document.getElementById("attempts").textContent = attempts;

    if (guess < 1 || guess > 20 || guess === 0) {

        document.getElementById("message").textContent =
            "Enter a number between 1 and 20!";

        return;
    }

    if (guess === secretNumber) {

        document.getElementById("message").textContent =
            "Congratulations! You guessed correctly!";

    } else if (guess < secretNumber) {

        document.getElementById("message").textContent =
            "Too low! Try again.";

    } else {

        document.getElementById("message").textContent =
            "Too high! Try again.";

    }
}

// Function to restart the game
function restartGame() {

    secretNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 0;

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("guessInput").value = "";

    document.getElementById("message").textContent = "New game! Good luck!";

}