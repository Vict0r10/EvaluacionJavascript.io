function acc1() {
  var nom = document.getElementById("name").value;
  var edad = document.getElementById("age").value;
  var telefono = document.getElementById("phone").value;
  var mail = document.getElementById("email").value;
  var mod = document.getElementById("model").value;
  var efectivo= parseInt(document.getElementById("ef").value);
  var seg = document.getElementById("seguro").value;


  var precio
  if (isNaN(edad)) {

    document.getElementById("age").value= "";
    alert("La edad debe ser un numero");
  } 
  if (isNaN(telefono)) {
    document.getElementById("phone").value= "";
    alert("El telefono debe ser un numero");
  }
  
  if (efectivo === '1') {
    precio = 100000 * 0.95;
  } else {
    precio = 100000;
  }
  if (seguro === "Si") {
  } else {
    seg="No";
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



      document.getElementById("resultado").innerText= " ";


}