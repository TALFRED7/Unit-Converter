//hide cards
document.querySelector('#output').style.display='none';

//user input
document.querySelector('#inputValue').addEventListener('input',convert)

function convert(e){
	// console.log('call');
	let input= e.target.value;

	document.querySelector('#output').style.display='block';
//pounds to grams
	document.querySelector('#grams').innerHTML = input * 453.592;
//pounds to kilograms
	document.querySelector('#kilograms').innerHTML = input * 0.453592;
//pounds to ounces
	document.querySelector('#oz').innerHTML = input * 16;

}
