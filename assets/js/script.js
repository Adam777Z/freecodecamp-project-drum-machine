const projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');

var keys = [ 'q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c' ];

document.addEventListener('DOMContentLoaded', (event) => {
	let display = document.querySelector('#display');

	document.querySelectorAll('.drum-pad').forEach((e) => {
		e.addEventListener('click', (event2) => {
			event2.target.querySelector('audio').play();
			display.textContent = event2.target.dataset['name'];
		});
	});

	document.querySelectorAll('audio').forEach((e) => {
		e.addEventListener('ended', (event2) => {
			display.textContent = '';
		});
	});

	document.querySelector('body').addEventListener('keydown', (event2) => {
		let key = event2.key;

		if (keys.includes(key)) {
			let button = document.querySelector('#drum-pad-'+key);

			button.dispatchEvent(new Event('click'));
			button.classList.add('active');
		}
	});

	document.querySelector('body').addEventListener('keyup', (event2) => {
		let key = event2.key;

		if (keys.includes(key)) {
			let button = document.querySelector('#drum-pad-'+key);

			button.classList.remove('active');
		}
	});
});