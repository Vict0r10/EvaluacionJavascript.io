function acc1() {
  var nom1 = document.getElementById("n1").value;
  var nom2 = document.getElementById("n2").value;
  var ed1 = document.getElementById("e1").value;
  var ed2 = document.getElementById("e2").value;

  var resultado = parseInt(ed1)+parseInt(ed2);

  document.getElementById("resultado").innerHTML= " "+ resultado;
}

function limpiar() {

      document.getElementById("n1").value= "";
      document.getElementById("n2").value= "";
      document.getElementById("e1").value= "";
      document.getElementById("e2").value= "";
      document.getElementById("resultado").innerText= " ";


}