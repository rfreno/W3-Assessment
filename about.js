console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

// Part 2 - Mouseover
let picture = document.querySelector('#duck')

const compliment = () => {
	alert('You are pretty')
}

picture.addEventListener('mouseover', compliment)