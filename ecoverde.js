function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Bem-vindo(a), " + usuario + "!");
  }
}
