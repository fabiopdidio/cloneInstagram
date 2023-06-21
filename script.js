function clicarNoBotao() {
  var email = document.getElementById("campo-email").value;
  var senha = document.getElementById("campo-senha").value;

  if (email === "") {
    alert("Email obrigatório");
  }
  else if (senha === ""){
    alert("Senha obrigatória");
  }
}
