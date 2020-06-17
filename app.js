/*
'//////Pig gaame ruls
            -The game has 2 players,playing int rounds.
            -In each turn,a player rolls a dice as many times as he wishhes. Each result get added to his round score.
            -But, If a player rulles a 1,all his rund score gets lost. After that,it's the next player trun.
            -The player can choose to 'Hold',Whis means that his Round score gets added to his Glovel Score. After that
            it's the next players trun.
            The first player to reach 100 points on globle score wins the game.        

*/

var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.player-button-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1.Rendom Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display the result

        var diceDom = document.querySelector('.player-dice-img');

        diceDom.style.display = 'block';
        diceDom.src = 'img/dice-' + dice + '.png';

        //3.update the round score if the rolled number was not a 1;
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //Next player
            nextPlayer();

        }
    }

});



document.querySelector('.player-button-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;

        //update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        //check if player won the game
        if (scores[activePlayer] >= 50) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.player-' + activePlayer + '-penel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-penel').classList.remove('active');
            document.querySelector('.player-dice-img').style.display = 'none';

            gamePlaying = false;

        } else {
            //next Player
            nextPlayer();
        }
    }
});



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-penel').classList.toggle('active');
    document.querySelector('.player-1-penel').classList.toggle('active');


    document.querySelector('.player-dice-img').style.display = 'none';
};


document.querySelector('.player-button-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.player-dice-img').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-penel').classList.remove('winner');
    document.querySelector('.player-1-penel').classList.remove('winner');
    document.querySelector('.player-0-penel').classList.remove('active');
    document.querySelector('.player-1-penel').classList.remove('active');
    document.querySelector('.player-0-penel').classList.add('active');
}

// dice = 5;
// console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';