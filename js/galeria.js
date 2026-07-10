// --------- GALERÍA ----------


// Seleccionamos el contenedor donde se mostrará la galería
let galeria = document.querySelector("#galeria");

// Array de objetos con la información de cada obra
let obras = [

	{
		nombre: "Imágenes técnicas amplificadas",
		anio: "2024",
		imagen1: "img/amplificadas.jpg",
		imagen2: "img/amplificadas1.jpg",
		opcion1: true,
		clase: "obraChica"
	},

	{
		nombre: "ÁTOMOS",
		anio: "2023",
		imagen1: "img/atoms.jpg",
		imagen2: "img/atoms1.jpg",
		opcion1: true,
		clase: "obraGrande"
	},

	{
		nombre: "Imágenes técnicas",
		anio: "2024",
		imagen1: "img/imagenestecnicas.jpg",
		imagen2: "img/imagenestecnicas1.jpg",
		opcion1: true,
		clase: "obraChica"
	},

	{
		nombre: "In Silico",
		anio: "2025",
		imagen1: "img/insilico.jpg",
		imagen2: "img/insilico1.jpg",
		opcion1: true,
		clase: "obraChica"
	},

	{
		nombre: "Una teoría matemática de la comunicación",
		anio: "2014",
		imagen1: "img/teoriamatematica.jpg",
		imagen2: "img/teoriamatematica1.jpg",
		opcion1: true,
		clase: "obraChica"
	}

];

// Recorremos todas las obras
for(let i = 0; i < obras.length; i++){

	// Creamos un artículo para cada obra
	let obra = document.createElement("article");

	// Asignamos la clase correspondiente
	obra.className = obras[i].clase;

	// Creamos el título
	let titulo = document.createElement("h3");
	titulo.textContent = obras[i].nombre + " (" + obras[i].anio + ")";

	// Creamos la imagen
	let imagen = document.createElement("img");
	imagen.src = obras[i].imagen1;
	imagen.alt = obras[i].nombre;

	// Creamos el botón
	let boton = document.createElement("button");
	boton.textContent = "Ver opción 2";

	// Esperamos el clic del usuario
	boton.addEventListener("click", function(){

		// Si está mostrando la opción 1
		if(obras[i].opcion1){

			// Cambiamos a la segunda imagen
			imagen.src = obras[i].imagen2;

			// Cambiamos el texto del botón
			boton.textContent = "Ver opción 1";

			// Actualizamos el estado
			obras[i].opcion1 = false;

		}
		else{

			// Volvemos a la primera imagen
			imagen.src = obras[i].imagen1;

			// Cambiamos nuevamente el texto del botón
			boton.textContent = "Ver opción 2";

			// Actualizamos el estado
			obras[i].opcion1 = true;

		}

	});

	// Agregamos los elementos al artículo
	obra.appendChild(titulo);
	obra.appendChild(imagen);
	obra.appendChild(boton);

	// Agregamos el artículo al contenedor principal
	galeria.appendChild(obra);

}