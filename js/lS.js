
function saveLocal(a) {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.setItem("name", a);
		//message de sauvegarde
		document.getElementById("result").innerHTML = " saved localy.";
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function loadLocal() {
	//Vérification si le navigateur peut utiliser webstorage Local
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem("name") === null) {
			document.getElementById("result").innerHTML = "Welcome, have nice time!";
		} else {
			//récupération de la sauvegade Local
			document.getElementById("result").innerHTML = "Welcome back "+localStorage.getItem("name");
		}
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function remPseudo() {
	localStorage.removeItem("name");
	alert('Pseudo Effacer!');
}

function getPseudo() {
	var pseudo = document.getElementById("name").value;
	alert(pseudo);
	saveLocal(pseudo);
}
