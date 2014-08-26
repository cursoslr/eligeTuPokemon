function Pokemon(n,l,v,a,d,vel,t) {
	this.nombre = n;
	this.level = l;
	this.vida = v;
	this.ataque = a;
	this.defensa = d;
	this.velocidad = vel;
	this.tipo = t;
	//TIPO
	tipoPoke.innerText = "Tipo: ";
	var etiquetaUrl = "img/" + this.tipo + ".gif";
	etiqueta.src = etiquetaUrl;
	//Imagen:
	var nombreUrl = "img/" + this.nombre + ".png";
	pokeImagen.src = nombreUrl;
	//Audio:
	var audioUrl = "fx/" + this.nombre + ".mp3";
	var audio = new Audio(audioUrl);
	audio.volume = 0.2;
	audio.play();
	//Quito A Oak y ensancho la celda de los datos:
	document.getElementById("oak").style.display = "none";
	document.getElementById("nombrePoke").style.width = "100%";
	document.getElementById("datos").style.width = "200px";
};
//.valueOf()


function bulbasaurData(){
	var bulbasaur = new Pokemon("Bulbasaur",5,21,11,11,11,"planta");
	//DATOS DEL POKEMON
	nombrePoke.innerText = bulbasaur.nombre;
	nivelPoke.innerText = "Nivel: " + bulbasaur.level;
	vidaPoke.innerText = "Vida: " + bulbasaur.vida;
	ataquePoke.innerText = "Ataque: " + bulbasaur.ataque;
	defensaPoke.innerText = "Defensa: " + bulbasaur.defensa;
	velocidadPoke.innerText = "Velocidad: " + bulbasaur.velocidad;
	//POKEBALLS (ABRIR/CERRAR)
	bulbaBall.src = "img/pokeball_abierta.png";
	charBall.src = "img/pokeball.png";
	squiBall.src = "img/pokeball.png";
}

function charmanderData(){
	var charmander = new Pokemon("Charmander",5,20,11,10,13,"fuego");
	//DATOS DEL POKEMON
	nombrePoke.innerText = charmander.nombre;
	nivelPoke.innerText = "Nivel: " + charmander.level;
	vidaPoke.innerText = "Vida: " + charmander.vida;
	ataquePoke.innerText = "Ataque: " + charmander.ataque;
	defensaPoke.innerText = "Defensa: " + charmander.defensa;
	velocidadPoke.innerText = "Velocidad: " + charmander.velocidad;
	//POKEBALLS (ABRIR/CERRAR)
	bulbaBall.src = "img/pokeball.png";
	charBall.src = "img/pokeball_abierta.png";
	squiBall.src = "img/pokeball.png";
}

function squirtleData() {
	var squirtle = new Pokemon("Squirtle",5,20,11,13,10,"agua");
	//DATOS DEL POKEMON
	nombrePoke.innerText = squirtle.nombre;
	nivelPoke.innerText = "Nivel: " + squirtle.level;
	vidaPoke.innerText = "Vida: " + squirtle.vida;
	ataquePoke.innerText = "Ataque: " + squirtle.ataque;
	defensaPoke.innerText = "Defensa: " + squirtle.defensa;
	velocidadPoke.innerText = "Velocidad: " + squirtle.velocidad;
	//POKEBALLS (ABRIR/CERRAR)
	bulbaBall.src = "img/pokeball.png";
	charBall.src = "img/pokeball.png";
	squiBall.src = "img/pokeball_abierta.png";
}



