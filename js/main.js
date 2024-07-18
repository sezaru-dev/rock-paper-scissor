const botScoreText = document.querySelector('#botScoreText');
const playerScoreText = document.querySelector('#playerScoreText');
const moves = document.querySelectorAll('.moves');
const interface = document.querySelector('#interface');
const selectMoveText = document.querySelector('#selectMoveText');
const BotChosenMoves = document.querySelector('#BotChosenMoves');
const YourChosenMoves = document.querySelector('.YourChosenMoves');
const textGuideP = document.querySelector('#textGuide-p');
const textGuideSpan = document.querySelector('#textGuide-span');
let BotScore = 0;
let playerSore = 0;
let isGameStarts = false;
let isPlayerSelectMove = false;

initializeGame();
function initializeGame() {
	botScoreText.innerText = `Bot's Score: ${BotScore}`;
	playerScoreText.innerText = `Your Score: ${playerSore}`;
	moves.forEach((move) => {
		move.addEventListener('click', moveClick);
	});
	hideInterface();
}

function moveClick() {
	isGameStarts = true;
	isGameStarts && selectMoveText.classList.add('hidden');
	isPlayerSelectMove = true;
	hideInterface(isPlayerSelectMove);
	generateBotMove(this.id);
}
function hideInterface(isHidden) {
	if (isPlayerSelectMove) {
		interface.classList.remove(`hidden`);
	} else {
		interface.classList.add('hidden');
	}
}

function generateBotMove(playerMove) {
	let winProbability = Math.floor(Math.random() * 10);
	switch (playerMove) {
		case 'rock':
			if (winProbability <= 1) {
				checkWinner('Rock', 'Rock', 'Draw!');
			} else if (winProbability < 6) {
				checkWinner('Paper', 'Rock', 'Bot');
			} else if (winProbability < 10) {
				checkWinner('Scissor', 'Rock', 'You');
			}

			break;
		case 'paper':
			if (winProbability <= 1) {
				checkWinner('Paper', 'Paper', 'Draw!');
			} else if (winProbability < 6) {
				checkWinner('Scissor', 'Paper', 'Bot');
			} else if (winProbability < 10) {
				checkWinner('Rock', 'Paper', 'You');
			}
			break;
		case 'scissor':
			if (winProbability <= 1) {
				checkWinner('Scissor', 'Scissor', 'Draw');
			} else if (winProbability < 6) {
				checkWinner('Rock', 'Scissor', 'Bot');
			} else if (winProbability < 10) {
				checkWinner('Paper', 'Scissor', 'You');
			}
			break;
	}
}
function checkWinner(botMove, playerMove, winner) {
	console.log(`${botMove} ${playerMove} ${winner}`);
	BotChosenMoves.innerText = `${botMove}`;
	YourChosenMoves.innerText = `${playerMove}`;

	if (winner == 'Draw!') {
		textGuideP.innerText = `Draw!`;
	} else {
		textGuideP.innerText = `${winner} won!`;
	}
	setMatchChosenMoveColor(botMove, playerMove);
	textGuideSpan.innerHTML = `Select a move to continue.`;
	updateScores(winner);
}

function updateScores(winner) {
	switch (winner) {
		case 'Bot':
			botScoreText.innerText = `Bot's Score: ${++BotScore}`;
			break;
		case 'You':
			playerScoreText.innerText = `Your Score: ${++playerSore}`;
			break;
	}
}

function setMatchChosenMoveColor(botMove, playerMove) {
	switch (botMove) {
		case 'Rock':
			BotChosenMoves.classList.value = '';
			BotChosenMoves.classList.value =
				'h-32 w-32 border-2 border-purple-500 rounded-full flex items-center justify-center';
			break;
		case 'Paper':
			BotChosenMoves.classList.value = '';
			BotChosenMoves.classList.value =
				'h-32 w-32 border-2 border-orange-500 rounded-full flex items-center justify-center';
			break;
		case 'Scissor':
			BotChosenMoves.classList.value = '';
			BotChosenMoves.classList.value =
				'h-32 w-32 border-2 border-green-500 rounded-full flex items-center justify-center';
			break;
	}

	let playerIsRock = YourChosenMoves.classList.contains('border-purple-500');
	let playerIsPaper = YourChosenMoves.classList.contains('border-orange-500');
	let playerIsScissor = YourChosenMoves.classList.contains('border-green-500');
	switch (playerMove) {
		case 'Rock':
			if (playerIsPaper) {
				YourChosenMoves.classList.replace(
					'border-orange-500',
					'border-purple-500'
				);
			} else if (playerIsScissor) {
				YourChosenMoves.classList.replace(
					'border-green-500',
					'border-purple-500'
				);
			}
			break;
		case 'Paper':
			if (playerIsRock) {
				YourChosenMoves.classList.replace(
					'border-purple-500',
					'border-orange-500'
				);
			} else if (playerIsScissor) {
				YourChosenMoves.classList.replace(
					'border-green-500',
					'border-orange-500'
				);
			}

			break;
		case 'Scissor':
			if (playerIsRock) {
				YourChosenMoves.classList.replace(
					'border-purple-500',
					'border-green-500'
				);
			} else if (playerIsPaper) {
				YourChosenMoves.classList.replace(
					'border-orange-500',
					'border-green-500'
				);
			}
			break;
	}
}
