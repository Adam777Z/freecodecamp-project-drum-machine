const projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');

const keys = {
	81: 'Q',
	87: 'W',
	69: 'E',
	65: 'A',
	83: 'S',
	68: 'D',
	90: 'Z',
	88: 'X',
	67: 'C'
}

document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('.drum-pad').forEach((e) => {
		e.addEventListener('click', (event2) => {
			event2.target.querySelector('audio').play();
			document.querySelector('#display').textContent = event2.target.dataset['name'];
		});
	});

	document.querySelectorAll('audio').forEach((e) => {
		e.addEventListener('ended', (event2) => {
			document.querySelector('#display').textContent = '';
		});
	});

	document.querySelector('body').addEventListener('keydown', (event2) => {
		const key = keys[event2.which];

		if (key !== undefined) {
			document.querySelector('#drum-pad-'+key).dispatchEvent(new Event('click'));
		}
	});
});