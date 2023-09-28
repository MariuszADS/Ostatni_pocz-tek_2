const arrowIcon = document.querySelector('.fas'); //
const btn = document.querySelector('.arrow'); //element klikalny ktory odpowiada za akcje
const img = document.querySelector('.item1'); //element na ktrym bedzie przeporwadzna funkjca i metoda

function showItem() {
	
    img.classList.toggle('show');

	if (img.classList.contains('show')) {
		arrowIcon.style.transform = 'rotate(180deg)';
	} else {
		arrowIcon.style.transform = 'rotate(0deg)';
	}
}

btn.addEventListener('click', showItem);
