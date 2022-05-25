        const myArray = ["rock", "paper", "scissors"];
        let playerPoints = 0;
        let computerPoints = 0;
        let maxPoints = 5;

        function computerSelect() {
            return myArray[~~(Math.random() * myArray.length)];
        }

        function playerSelect() {
            let playerInput = prompt("Please input your selection:");
            let playerSelectionTrim = playerInput.trim();
            let playerSelect = playerSelectionTrim.toLowerCase();
            return playerSelect; 
        }

        function playRound(playerSelection, computerSelection) {
            let winner = "";
            if (playerSelection === computerSelection) {
                winner = "tie";
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                winner = "player";
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                winner = "player";
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                winner = "player";
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                winner = "computer";
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                winner = "computer";
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                winner = "computer";
            }
            return winner;
        }


        function game() {
            // let maxPoints = prompt("Please enter the number of points to win:");
            while  (playerPoints < maxPoints && computerPoints < maxPoints) {
                while (true) {
                let playerSelection = playerSelect();
                let computerSelection = computerSelect();
                let winner = playRound(playerSelection, computerSelection);                   
                if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
                   console.log("sorry, that is not a valid selection");
                }
                if (winner == 'computer') {
                    computerPoints++;
                } else if (winner == 'player') {
                    playerPoints++;
                }
                console.log("Player: " + playerSelection);
                console.log("Computer: " + computerSelection);
                console.log( "The winner is: " + winner);
                console.log("Points: Player = " + playerPoints + ", Computer: " + computerPoints);
                
            }

            //Win condition: 5 points
            if (playerPoints == maxPoints) {
                console.log (" Congratulations, you win!");
            } else if (computerPoints == maxPoints) {
                console.log ("The computer wins, better luck next time!");
            }
        }
    }
    game();