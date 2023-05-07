var usuarios = [
  {"login": "igor", "senha": "igor"}
];

function Login() {
  var usuario = document.getElementsByName("username")[0].value.toLowerCase();
  var senha = document.getElementsByName("password")[0].value;

  for(var u in usuarios) {
    var us = usuarios[u];

    if (us.login === usuario && us.senha === senha) {
      window.location.href = 'http://google.com/'
      return true;
    }
  }
  alert("senha incorreta")
  return false
}