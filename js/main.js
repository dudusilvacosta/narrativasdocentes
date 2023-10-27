var modal = document.getElementById('modal');

function openModal() {
	modal.style.right = 0;
}

function closeModal() {
	modal.style.right = '-100vw';
}

var header = document.getElementById('header');

var iconMoon = document.getElementById('moon');

var iconSun = document.getElementById('sun');

var nav = document.getElementById('nav');

var footer = document.getElementById('footer');

var secA = document.querySelectorAll('.sec__a');

var secB = document.querySelectorAll('.sec__b');

var texto = document.querySelectorAll('.t');

function addContrast() {
	iconMoon.style.display = 'none';

	iconSun.style.display = 'block';

	header.style.backgroundColor = '#000';

	nav.style.backgroundColor = '#1a1a1a';

	secA.forEach(div => {
		div.style.backgroundColor = '#202c33';
	});

	secB.forEach(div => {
		div.style.backgroundColor = '#202c33';
	});

	texto.forEach(div => {
		div.style.color = '#fff';
	});

	footer.style.backgroundColor = '#202024';
}

function removeContrast() {
	iconMoon.style.display = 'block';

	iconSun.style.display = 'none';

	header.style.backgroundColor = '#3c98a7';

	nav.style.backgroundColor = '#b6c2c2';

	secA.forEach(div => {
		div.style.backgroundColor = '#b6c2c2';
	});

	secB.forEach(div => {
		div.style.backgroundColor = '#a7b7b6';
	});

	texto.forEach(div => {
		div.style.color = '#046971';
	});

	footer.style.backgroundColor = '#3c98a7';
}