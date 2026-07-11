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

/* EJERCICIO */

// SELECCIONAMOS LOS ELEMENTOS DEL HTML

// Campo donde se ingresa la cantidad de instalaciones
let cantidad = document.querySelector("#cantidad");

// Campos para cargar cada instalación
let nombre = document.querySelector("#nombre");
let personas = document.querySelector("#personas");
let dias = document.querySelector("#dias");

// Datos generales
let horas = document.querySelector("#horas");
let valorHora = document.querySelector("#valorHora");

// Botones
let comenzar = document.querySelector("#comenzar");
let agregar = document.querySelector("#agregar");
let calcular = document.querySelector("#calcular");
let reiniciar = document.querySelector("#reiniciar");

// Lugar donde mostraremos los resultados
let resultado = document.querySelector("#resultado");


// VARIABLES

// Array donde guardaremos todas las instalaciones
let instalaciones = [];

// Cantidad total de instalaciones
let cantidadInstalaciones;

// Contador de instalaciones cargadas
let cargadas = 0;


// FUNCIÓN PARA LIMPIAR LOS CAMPOS

function limpiarCampos(){

	nombre.value = "";
	personas.value = "";
	dias.value = "";

}


// BOTÓN COMENZAR

comenzar.addEventListener("click", function(){

	// Capturamos la cantidad de instalaciones
	cantidadInstalaciones = Number(cantidad.value);

	// Validamos el dato
	if(
		isNaN(cantidadInstalaciones) ||
		cantidadInstalaciones <= 0
	){

		resultado.innerHTML =
		"Ingresá una cantidad válida de instalaciones.";

	}
	else{

		// Deshabilitamos la cantidad
		cantidad.disabled = true;

		// Deshabilitamos el botón comenzar
		comenzar.disabled = true;

		// Habilitamos los campos
		nombre.disabled = false;
		personas.disabled = false;
		dias.disabled = false;

		// Habilitamos el botón agregar
		agregar.disabled = false;

		resultado.innerHTML =
		"Ingresá los datos de la instalación 1.";

	}

});


// BOTÓN AGREGAR

agregar.addEventListener("click", function(){

	// Capturamos los datos
	let nombreInstalacion = nombre.value;

	let cantidadPersonas =
	Number(personas.value);

	let cantidadDias =
	Number(dias.value);


	// Validamos los datos
	if(

		nombreInstalacion == "" ||

		isNaN(cantidadPersonas) ||
		cantidadPersonas <= 0 ||

		isNaN(cantidadDias) ||
		cantidadDias <= 0

	){

		resultado.innerHTML =
		"Completá correctamente todos los datos.";

	}
	else{

		// Creamos un objeto con la instalación
		let instalacion = {

			nombre : nombreInstalacion,

			personas : cantidadPersonas,

			dias : cantidadDias

		};

		// Guardamos la instalación
		instalaciones.push(instalacion);

		// Sumamos una instalación cargada
		cargadas++;

		// Limpiamos los campos
		limpiarCampos();


		// Si todavía faltan instalaciones
		if(cargadas < cantidadInstalaciones){

			resultado.innerHTML =
			"Ingresá los datos de la instalación " +
			(cargadas + 1) + ".";

		}
		else{

			// Deshabilitamos los campos
			nombre.disabled = true;
			personas.disabled = true;
			dias.disabled = true;

			// Deshabilitamos el botón agregar
			agregar.disabled = true;

			// Habilitamos el botón calcular
			calcular.disabled = false;

			resultado.innerHTML =
			"Se cargaron todas las instalaciones. Ahora presioná 'Calcular resultados'.";

		}

	}

});

// BOTÓN CALCULAR

calcular.addEventListener("click", function(){

	// Capturamos los datos generales
	let horasPorDia = Number(horas.value);

	let honorarioHora = Number(valorHora.value);

	// Validamos los datos
	if(

		isNaN(horasPorDia) ||
		horasPorDia <= 0 ||

		isNaN(honorarioHora) ||
		honorarioHora <= 0

	){

		resultado.innerHTML =
		"Ingresá correctamente las horas de trabajo y el valor del honorario.";

	}
	else{

		// DECLARACIÓN DE VARIABLES

		// Total de personas del estudio
		let totalPersonas = 0;

		// Costo de un día de trabajo
		let costoDia;

		// Costo total del estudio
		let costoTotalEstudio = 0;

		// Variables para la instalación de mayor duración
		let mayorDias;
		let nombreMayor;
		let costoMayor;


		// RECORREMOS TODAS LAS INSTALACIONES

		for(let i = 0; i < instalaciones.length; i++){

			// Sumamos las personas
			totalPersonas =
			totalPersonas + instalaciones[i].personas;

			// Calculamos el costo de esta instalación
			let costoInstalacion =
			instalaciones[i].personas *
			horasPorDia *
			honorarioHora *
			instalaciones[i].dias;

			// Sumamos al costo total del estudio
			costoTotalEstudio =
			costoTotalEstudio + costoInstalacion;


			// Primera vuelta
			if(i == 0){

				mayorDias = instalaciones[i].dias;

				nombreMayor = instalaciones[i].nombre;

				costoMayor = costoInstalacion;

			}


			// Buscamos la instalación con más días
			if(instalaciones[i].dias > mayorDias){

				mayorDias = instalaciones[i].dias;

				nombreMayor = instalaciones[i].nombre;

				costoMayor = costoInstalacion;

			}

		}


		// CÁLCULOS

		// Costo total de un día de trabajo
		costoDia =
		totalPersonas *
		horasPorDia *
		honorarioHora;

		// Porcentaje de la instalación de mayor duración
		let porcentaje =
		costoMayor * 100 / costoTotalEstudio;


		// MOSTRAMOS LOS RESULTADOS

		resultado.innerHTML =

		"Costo total de un día de trabajo: $" +
		costoDia +

		"<br><br>Instalación con mayor tiempo de producción: " +
		nombreMayor +

		"<br>Días de producción: " +
		mayorDias +

		"<br>Costo total: $" +
		costoMayor +

		"<br><br>Porcentaje respecto del costo total del estudio: " +
		porcentaje +
		"%";


		// HABILITAMOS Y DESHABILITAMOS BOTONES

		calcular.disabled = true;

		reiniciar.disabled = false;

		horas.disabled = true;

		valorHora.disabled = true;

	}

});


// BOTÓN REINICIAR

reiniciar.addEventListener("click", function(){

	// Recargamos la página
	location.reload();

});