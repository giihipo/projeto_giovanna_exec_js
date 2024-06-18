var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  verificar();

});


//Função somar
function verificar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero = Number(document.getElementById("numero").value);

  console.log(numero);

  //Realiza a Verificar do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável
  //E a variável "resultado" recebe o valor do resultado
  let = numero entre 100 a 999 + resultado;

  //Aqui vai escrever no input "resultado" o valor que está armazenado na variável "resultado"
  document.getElementById("resultado").value = resultado;


}
