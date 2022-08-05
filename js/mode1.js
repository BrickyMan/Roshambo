let btns = document.querySelectorAll('#mode1-btns button'),
	plField = document.querySelector('#mode1-player-field'),
	enField = document.querySelector('#mode1-enemy-field'),
	result = document.querySelector('#mode1-result');

function isWin() {
	let pl = plField.innerHTML,
		en = enField.innerHTML;
	plField.style.fontSize = '70px';
	enField.style.fontSize = '70px';
	if (pl == en) {
		result.style.color = 'black';
		result.innerHTML = 'Draw!';
	}
	else if ((pl == '🗿' && en == '✌️') || (pl == '✌️' && en == '🧻') || (pl == '🧻' && en == '🗿')) {
		result.style.color = 'green';
		result.innerHTML = 'Lucky meatball!'
	}
	else {
		result.style.color = 'red';
		result.innerHTML = 'Computer kicked your ass!'
	}
}

function enemyChoose() {
	let	counter = 0,
		timer = setInterval(() => {
		enField.innerHTML = signs[counter];
		counter++;
		if (counter == 3) counter = 0;
	}, 100);
	setTimeout(() => {
		clearInterval(timer);
		let randNum = Math.floor(Math.random() * 3);
		enField.innerHTML = signs[randNum];
		isWin();
	}, 2000);
}

for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = () => {
		plField.innerHTML = btns[i].innerHTML;
		result.style.color = 'black';
		result.innerHTML = 'Who\'s gonna fuck up?';
		plField.style.fontSize = '50px';
		enField.style.fontSize = '50px';
		enemyChoose();
	}
}