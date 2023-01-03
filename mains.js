//ex.2
// 0
//A
const fruitList = ['apple', 'banana', 'tomato'];
const ulFruit = document.createElement('ul');
fruitList.forEach((fruit) => {
	const itemList = document.createElement('li');
	itemList.textContent = fruit;
	ulFruit.appendChild(itemList);
});
document.body.appendChild(ulFruit);

//B
const imageSrc = 'https://crocoder.dev/icon.png';
const div1 = document.querySelector('div');
const img1 = document.createElement('img');
img1.src = imageSrc;
div1.appendChild(img1);

//C
const firstList = [...document.querySelectorAll('ul > li:first-child')];
const lastList = [...document.querySelectorAll('ul > li:last-child')];
firstList.forEach((li) => (li.textContent = 'first'));
lastList.forEach((li) => (li.textContent = 'last'));
 