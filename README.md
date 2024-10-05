# Guess My Number!

**Guess My Number** is a simple number guessing game built using HTML, CSS, and JavaScript DOM manipulation. The goal is to guess the secret number between 1 and 20.

## How to Play

1. **Make a Guess**:
   - Enter a number between 1 and 20 in the input field.
   - Click the **Check!** button to submit your guess.

2. **Feedback**:
   - If your guess is too high or too low, you’ll receive feedback to help you adjust your next guess.
   - If you guess correctly, you’ll be notified, and the game will display the secret number.

3. **Score**:
   - Each time you make a wrong guess, your score decreases by 1.
   - The game ends if your score reaches 0.
   - If you guess the number correctly, your score is compared to the high score, and the higher score is recorded.

4. **Play Again**:
   - Click the **Again!** button to reset the game, generate a new secret number, and try again.

## Game Rules

- The game generates a random secret number between 1 and 20.
- You start with a score of 20.
- Each incorrect guess reduces your score by 1.
- The game ends when the player guesses correctly or the score reaches 0.
- You can replay the game by clicking the **Again!** button to reset the game state and generate a new secret number.

## Technologies Used

- **HTML5**: For the structure of the game.
- **CSS3**: For styling the game interface and visual effects.
- **JavaScript (DOM manipulation)**: For game logic, random number generation, user interaction, and dynamic score handling.

## Installation

To run the game locally:

1. Clone the repository or download the ZIP file:
   ```bash
   git clone https://github.com/TautvydasKre/Guess-My-Number.git
