const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

let count = 0; 

const sliderContainer = document.getElementById('slider'); 

			//IMG//

const img = document.createElement('img');
img.src = slides[count].image;
img.alt = `nbSlide${count + 1}`;
img.classList.add('slider_img');


			//ARROW LEFT//

const left = document.createElement('img');
left.src = "./assets/images/arrow_left.png";
left.alt = "Arrow left";
left.classList.add("arrow", "arrow_left")


			//ARROW right//

const right = document.createElement('img');
right.src = "./assets/images/arrow_right.png";
right.alt = "Arrow right";
right.classList.add("arrow", "arrow_right")


			//TEXTE//

const text = document.createElement("p");
text.innerHTML = slides[count].tagLine;


			//DOTS//

const dotsContainer = document.createElement("div")
dotsContainer.classList.add("dots")


	//RATTACHER LES BALISES CRÉES À L'ÉLÉMENT PARENT//

sliderContainer.append(img, left, right, text, dotsContainer);

			//DOT//

slides.forEach(function(){
	const dot = document.createElement('div');
	dot.classList.add("dot");
	dotsContainer.appendChild(dot)
})


const Alldots = document.querySelectorAll(".dot")
Alldots[count].classList.add('dot_selected')



			//SUIVANT//

right.addEventListener('click', slideSuivante);

function slideSuivante(){
	Alldots[count].classList.remove('dot_selected')

	if(count < slides.length - 1){
		// Si count est plus petit que 3, count + 1
		count++;
	}else {
		// Sinon, count = 0; --> retour à la premiere slide "0"
		count = 0;
	}

	img.src = slides[count].image;
	img.classList.add('slider_img');

	text.innerHTML = slides[count].tagLine;

	Alldots[count].classList.add('dot_selected')
}

			//PRECEDENTE//
left.addEventListener('click', slidePrecedente);

function slidePrecedente(){
	Alldots[count].classList.remove('dot_selected')

	if(count > 0){
		// Si count est plus grand que 0, count - 1
		count--;
	}else {
		// Sinon, count = 3; --> retour à la derniere slide "3"
		count = slides.length - 1;
	}

	img.src = slides[count].image;
	img.classList.add('slider_img');

	text.innerHTML = slides[count].tagLine;

	Alldots[count].classList.add('dot_selected')
}








