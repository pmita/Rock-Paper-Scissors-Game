/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice, gamePlaying;
initializeGame();

document.querySelector('.btn-rock').addEventListener('click', function(){
    playerChoice = 1;
    gameBegins(playerChoice);
});

document.querySelector('.btn-paper').addEventListener('click', function(){
    playerChoice = 2;
    gameBegins(playerChoice);
});

document.querySelector('.btn-scissors').addEventListener('click', function(){
    playerChoice = 3;
    gameBegins(playerChoice);
});

document.querySelector('.btn-new').addEventListener('click', initializeGame);

function gameBegins(playerChoice){
    if (gamePlaying){
        computerChoice =Math.floor(Math.random()*3)+1;
        displayIcons(playerChoice, computerChoice);
        whoWins(playerChoice, computerChoice);   
    }
}

function displayIcons(playerChoice,computerChoice){
    document.querySelector('.symbol-1').style.display = 'block';
    document.querySelector('.symbol-2').style.display = 'block';
    document.querySelector('.symbol-1').src = 'symbol-' + playerChoice + '.png';
    document.querySelector('.symbol-2').src = 'symbol-' + computerChoice + '.png';
}

function whoWins(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        console.log('its a draw');
    }else if (((playerChoice ==1) && (computerChoice === 3)) || ((playerChoice == 2) && (computerChoice === 1)) || ((playerChoice == 3) && (computerChoice === 2))){
        playerScore ++;
        document.querySelector('#current-0').textContent=playerScore;
        if (playerScore >= 3){
            document.querySelector('#name-0').textContent = 'Winner';
            gamePlaying = false;
        }
    }else {
        computerScore ++;
        document.querySelector('#current-1').textContent=computerScore;
        if (computerScore >= 3){
            document.querySelector('#name-1').textContent = 'Winner';
            gamePlaying = false;
        }
    }
}

function initializeGame(){
    //initiate variable values
    gamePlaying = true;
    playerChoice=0;
    computerChoice=0;
    playerScore=0;
    computerScore=0;
    //Reset players scores to zero
    document.querySelector('#current-0').textContent=playerChoice;
    document.querySelector('#current-1').textContent=computerScore;
    //Reset the Palyers 
    document.querySelector('#name-0').textContent = 'Player';
    document.querySelector('#name-1').textContent = 'Computer';
    //Reset the visual queue for the active player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //Hide the symbols
    document.querySelector('.symbol-1').style.display='none';
    document.querySelector('.symbol-2').style.display='none'; 
};
