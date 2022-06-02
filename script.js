        // Get necessary nodes from the DOM tree
        const images = Array.from(document.querySelectorAll(".card-image"));
        const results = document.querySelector(".results");
        const playerScore = document.querySelector(".player-score");
        const computerScore = document.querySelector(".computer-score");
        const playerSelection = document.querySelector(".player-selection");
        const computerSelection = document.querySelector(".computer-selection");

        // Create initial variables
        const myArray = ["rock", "paper", "scissors"];
        let playerPoints = 0;
        let computerPoints = 0;

        // Start Game when user clicks on an image
        images.forEach((image) =>
            image.addEventListener("click", () => {
                if (playerPoints >= 5 || computerPoints >= 5) {
                    return;
                }
                // console.log(image.dataset.image);
                game(image.dataset.image);
            })
        );
        
        // Game Logic

        function computerSelect() {
            return myArray[~~(Math.random() * myArray.length)];
        }

        function playRound(playerSelection, computerSelection) {
            let winner = "";
            if (playerSelection === computerSelection) {
                winner = "Tie";
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                winner = "Player";
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                winner = "Player";
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                winner = "Player";
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                winner = "Computer";
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                winner = "Computer";
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                winner = "Computer";
            }
            return winner;
        }

        // function playRound(playerSelection, computerSelection) {
        //     let winner = '';
          
        //     if (playerSelection === 'Rock') {
        //       if (computerSelection === 'Paper') {
        //         winner = 'You Lose! Paper beats Rock';
        //       } else if (computerSelection === 'Scissors') {
        //         winner = 'You Win! Rock beats Scissors';
        //       } else {
        //         winner = "It's a tie";
        //       }
        //     } else if (playerSelection === 'Paper') {
        //       if (computerSelection === 'Scissors') {
        //         winner = 'You Lose! Scissors beats Paper';
        //       } else if (computerSelection === 'Rock') {
        //         winner = 'You Win! Paper beats Rock';
        //       } else {
        //         winner = "It's a tie";
        //       }
        //     } else if (playerSelection === 'Scissors') {
        //       if (computerSelection === 'Rock') {
        //         winner = 'You Lose! Rock beats Scissors';
        //       } else if (computerSelection === 'Paper') {
        //         winner = 'You Win! Scissors beats Paper';
        //       } else {
        //         winner = "It's a tie";
        //       }
        //     }
          
        //     return winner;
        //   }




        // function editText(text) {
        //     const p = document.createElement("p");
        //     p.textContent = text;

        //     return p;
        // }

        function game(playerSelection) {
                // let playerSelection = playerSelect();
                let computerSelection = computerSelect();
                let winner = playRound(playerSelection, computerSelection); 

                // console.log("Player: " + playerSelection);
                // console.log("Computer: " + computerSelection)

                if (winner.search('Computer') > -1) {
                    computerPoints++;
                } else if (winner.search("Player") > -1) {
                    playerPoints++;
                }
                console.log(winner);

                playerScore.textContent = "Player: " + playerPoints;
                computerScore.textContent = "Computer: " + computerPoints;
                results.textContent = "Winner: " + winner;

                if (playerPoints >= 5) {
                    alert(" Congratulations, you win!");
                    playerPoints = 0;
                    computerPoints = 0 ;
                } else if (computerPoints >= 5) {
                    alert("The computer wins, better luck next time!");
                    playerPoints = 0;
                    computerPoints = 0 ;
                }

            }
        //         console.log( "The winner is: " + winner);
        //         console.log("Points: Player = " + playerPoints +
        //          ", Computer: " + computerPoints);
        //