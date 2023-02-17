///////////NOMBRE

function validarNombre(){
	var nombre = document.getElementById('nombre');
	var validoNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	var errorNombre = document.getElementById('validardato1');

	if( nombre.value === 0){
		return false; }
	else if( validoNombre.test(nombre.value)){
		errorNombre.innerHTML = "";
		return true; }
	else {
		errorNombre.innerHTML = "Solo acepta texto.";
		return false; }
	}

/////////// CONTRASEÑA UNO.

function validarContrasena(){
	var contrasena = document.getElementById('contrasena');
	var validoContrasena = /^[\s\S]{8,}$/;
	var errorContrasena = document.getElementById('validardato');

	if( contrasena.value === 0){
		return false; }
  
	else if( validoContrasena.test(contrasena.value) ){	
		errorContrasena.innerHTML = "";
		return true; }
	else {	
		errorContrasena.innerHTML = "Debe tener al menos 8 carácteres.";
		return false; }
}
/////////CONTRA DOS

function validarContrasenados(){
	var contrasena = document.getElementById('contrasena');
	var contrasenados = document.getElementById('contrasenados');
	var errorContrasenados = document.getElementById('validardato3');

	if( contrasenados.value === 0){
    		errorContrasenados.innerHTML = "Las contraseñas no coinciden.";
		return false; }
  
	else if ( contrasena.value == contrasenados.value ){
	errorContrasenados.innerHTML = "";
		return true; }
  
	else {
		errorContrasenados.innerHTML = "Las contraseñas no coinciden.";
		
		return false; }
}

///////////TELÉFONO
function validarTlf(){
	var tlf = document.getElementById('tlf');
	var tlfValido = /^[9|6|7][0-9]{8}$/;
  
 if( tlf.value === 0){
		return false;}
   
	else if( tlfValido.test(tlf.value) ){
		return true; } 
 }
///////////EMAIL

function validarEmail(){
	var email = document.getElementById('email');
	var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( email.value === 0){
		return false;
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);}
	else if( emailValido.test(email.value) ){
		return true; }
	else {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
		return false; }
} 