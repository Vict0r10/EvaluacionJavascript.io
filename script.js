function acc1() {
  var nom = document.getElementById("name").value;
  var edad = document.getElementById("age").value;
  var telefono = document.getElementById("phone").value;
  var mail = document.getElementById("email").value;
  var mod = document.getElementById("model").value;
  var seg;


  var precio
  if (isNaN(edad)) {

    document.getElementById("age").value= "";
    alert("La edad debe ser un numero");
    return;
  } 
  if (isNaN(telefono)) {
    document.getElementById("phone").value= "";
    alert("El telefono debe ser un numero");
    return;
  }
  
  if (document.getElementById("ef").checked) {
    precio = 100000 * 0.95;
  } else {
    precio = 100000;
  }
  if (document.getElementById("seguro").checked) {
    seg="Tiene";
  } else {
    seg="No Tiene";
  }
if (nom==""||edad==""||telefono==""||mail==""||mod=="") {
  alert("Debe ingresar todos los datos");
  return;
}

  document.getElementById("resultado").innerHTML="Recibo:<br>"+"<br>Nombre:"+ nom + "<br>Telefono:" + telefono+ "<br>Email: "+mail+"<br>Codigo Modelo:"+mod + "<br>Precio: $"+precio +"<br>Seguro: "+ seg;


}

function inter() {
  window.location.href = "interacion.html";

}

function m_page() {
  window.location.href = "index.html";

}

function limpiar() {

      document.getElementById("name").value= "";
      document.getElementById("age").value= "";
      document.getElementById("phone").value= "";
      document.getElementById("email").value= "";
      document.getElementById("model").value= "";
      document.getElementById("ef").checked=false;
      document.getElementById("seguro").checked=false


      document.getElementById("resultado").innerText= " ";


}