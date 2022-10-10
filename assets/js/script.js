const projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');

var keys = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C' ];

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
		let key = event2.key.toUpperCase();

		if (keys.includes(key)) {
			document.querySelector('#drum-pad-'+key).dispatchEvent(new Event('click'));
		}
	});
});