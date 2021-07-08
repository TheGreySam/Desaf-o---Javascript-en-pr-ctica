// var num1 = document.getElementById("valor1").value;
// var num2 = document.getElementById("valor2").value;

// function suma(){
//   resultadosuma = parseInt(num1) + parseInt(num2);
//   document.getElementById("result").innerHTML = resultadosuma;
// };
//
// function resta(){
//   resultadoresta = parseInt(num1) - parseInt(num2);
//   document.getElementById("result").innerHTML = resultadoresta;
// };
function suma() {
  var num1 = document.getElementById("valor1").value;
  var num2 = document.getElementById("valor2").value;
  var resultadosuma = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML = resultadosuma;
};

function resta() {
  var num1 = document.getElementById("valor1").value;
  var num2 = document.getElementById("valor2").value;
  var resultadoresta = parseInt(num1) - parseInt(num2);
  document.getElementById("result").innerHTML = resultadoresta;
  if (resultadoresta <= 0) {
    document.getElementById("result").innerHTML = 0
  };

}
