function change_bg() {
	document.body.style.backgroundColor = random_color();
}

function random_color() {
	let color = "#";
	while (color.length != 7) {
		let nbr = Math.floor(Math.random() * (16));
		switch (nbr) {
			case 10 :
				nbr = "A";
				break
			case 11 :
				nbr = "B";
				break
			case 12 :
				nbr = "C";
				break
			case 13 :
				nbr = "D";
				break
			case 14 :
				nbr = "E";
				break
			case 15 :
				nbr = "F";
				break
		}
		color += nbr;
	}
	console.log(color);
	return color;
}