// Captura o botão de login e o campo de email na página de login
// Captura o botão de login na página inicial
const button = document.querySelector(".botao");
const input = document.getElementById("email");
const pconfirma= document.getElementById("paragrafoConfirmacao")

// Captura o botão na página de confirmação (sem o espaço extra)
const btnConfirmacao = document.querySelector(".botao-confirmacao");

// Lógica de login na página inicial (index.html)
if (button && input) {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Previne o comportamento padrão do botão
    
const isValid=validarEmail(input.value);

if (isValid) {
    window.location.href = "pagina_confirmacao.html";

}      // Redireciona para a página de confirmação
   else {
      // Se o login falhar, exibe uma mensagem de erro
      pconfirma.textContent="Invalid email!!! Please try again."
      pconfirma.style.color="red"
      input.style.borderColor="red"
    }
  });
}

// Lógica para o botão de confirmação na página de confirmação (pagina_confirmacao.html)
if (btnConfirmacao) {
  // Verifica se o botão de confirmação existe na página
  btnConfirmacao.addEventListener("click", (e) => {
    e.preventDefault(); // Previne o comportamento padrão do botão
    alert("Retornando à página inicial...");
    // Redireciona para a página index.html
    window.location.href = "index.html";
  });
}


const validarEmail=(input)=>{
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
return regex.test(input)
}