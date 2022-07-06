///////////////////////////////////////////////////////
// modal termos
//abrir modal
 function abrirModalLancamento(){
     if(display = 'none'){
     document.getElementById("termo-modal").style.display = 'block';
     }
}
 function fecharModalLancamento(){
     document.getElementById("termo-modal").style.display = 'hidden';
     alert("Você deve concordar com os termos para utilizar a aplicação");
     window.location.href = "index.php";
}
//aceitar modal
function aceitar(){
    document.getElementById("aceitar");
    alert("Conta criada, por favor faça login!");
    window.location.href = "index.php"; 
}