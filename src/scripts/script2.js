function turnoEnviado() {
	alert("Solicitud de turno enviada.");
}

function verificarDatos() {
	const especiales = /^[a-zA-Z\s]+$/;
	const hoy = new Date().toISOString().split('T')[0];
	const hora_max = '20:00';
	const hora_min = '07:00';

	// Recibir datos
	const nombre = document.getElementById("name").value;
	const apellido = document.getElementById("lname").value;
	const fecha = document.getElementById("date").value;
	const hora = document.getElementById("time").value;
	
	// Verificar nombre y apellido
	if(!especiales.test(nombre) || nombre == "") {
		alert("El nombre no debe tener caracteres especiales ni números, ni debe estar vacío.");
		return false;
	}
	if (!especiales.test(apellido) || apellido == "") {
		alert("El apellido no debe tener caracteres especiales ni números, ni debe estar vacío.");
		return false;
	}

	// Verificar hora y fecha
	if (fecha < hoy) {
		alert("La fecha no debe ser después de hoy.");
		return false;
	}
	if (hora < hora_min || hora > hora_max) {
		alert("La hora no debe ser inferior a las 7:00 ni superior a las 20:00.");
		return false;
	}

	turnoEnviado();
	return true;
}
