const container = document.querySelector(".container");
const imgCont = document.querySelector(".img-cont");
const Prev = document.querySelector(".Prev");
const Next = document.querySelector(".Next");

let numb = 0;

function reset() {
	clearInterval(interval);
	interval = setInterval(run, 3000);
}

Next.addEventListener("click", () => {
	numb++;

	slide();
	reset();
});

Prev.addEventListener("click", () => {
	numb--;

	slide();
	reset();
});

let interval = setInterval(() => {
	run();
}, 3000);

function run() {
	numb++;
	slide();
}

function slide() {
	if (numb > imgCont.querySelectorAll("img").length - 1) {
		numb = 0;
	}

	if (numb < 0) {
		numb = imgCont.querySelectorAll("img").length - 1;
	}

	imgCont.style.transform = `translateX(-${numb * 500}px)`;
}
