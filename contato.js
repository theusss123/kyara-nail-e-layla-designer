const button = document.getElementById("confirmar");

function mensagem() {
    alert("Seu horário foi agendado com sucesso !")
}

button.addEventListener("click", (e) => {
    mensagem();
    e.preventDefault();
});