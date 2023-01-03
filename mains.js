//ex.1
// function changeH2(e) {
// 	const hello = document.getElementById('hello1');
// 	const newhello = document.getElementById('newHello');
// 	hello.textContent = document.getElementById('newHello').value;
// }

//ex.2
// con = 0;
// function growUp(e) {
// 	con++;
// 	let parg = document.getElementById('p');
// 	parg.textContent = con;
// 	parg.style.fontsize = `${con * 10}px`;
// }

//ex.3 - didnt underdtand
// //ex.4
// window.addEventListener('load', paragraphs);
// function paragraphs() {
// 	let e = document.getElementById('abc');
// 	e.textContent = Math.floor(Math.random() * 100);
// 	window.onload = paragraphs();
// }

//ex.5
// let text = document.getElementById('input-box');
// let button = document.getElementById('button');
// button.addEventListener('click', () => {
// 	if (text.value === '') {
// 		alert('plesae write');
// 	}
// });
//ex.6
// document.getElementById('hello').addEventListener('click', button1);
// function button1() {
// 	console.log('hello');
// }

// document.getElementById('goodbye').addEventListener('click', button2);
// function button2() {
// 	console.log('goodbye');
// }
//ex.7
function toDoList(e) {
	e.preventDefault();
	let a = document.getElementById('ul');
	let b = document.createElement('li');
	let ab = document.getElementById('input1');
	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	a.appendChild(checkbox);
	b.innerHTML = ab.value;
	a.appendChild(b);
	console.log(a);
	console.log(b);
	b.addEventListener('click', () => {
		a.removeChild(b);
		a.removeChild(checkbox);
	});
	ab.value = '';
}
