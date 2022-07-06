//ESCONDER BOTAO
//desabilita o botão 
proximo.disabled = true;
if(proximo.disabled = true){
    proximo.style = "opacity: 40%";
}
//escuta o click do salvar
btn.addEventListener("click", function() {
    //verifica se está desativado
    if(proximo.disabled = true) {
        //se estiver, ele ativa e aumenta a opacidade
        proximo.disabled = false;
        proximo.style = "opacity: 100%";
        login.style.display = "none";
    }                       
});
proximo.addEventListener("click", function() {
    window.location.href = "cadastrar_2.php";               
});

//impede que o botão dê submit
const form = document.getElementById('login-form');
	form.addEventListener('submit', e => {
	e.preventDefault()
});
