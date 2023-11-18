function removerFilme(event) {
  event.target.parentElement.remove();
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var nome = document.getElementById("nome").value;
  var item = document.createElement("div");
  item.classList.add("card-filme");
  var imagem = document.createElement("img");
  var botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover-filme");
  

  imagem.src = filmeFavorito;
  imagem.addEventListener("click", removerFilme);
  botaoRemover.innerHTML = "Remover";
  botaoRemover.addEventListener("click", removerFilme);

  item.appendChild(imagem);
  item.appendChild(botaoRemover);
  elementoListaFilmes.appendChild(item);

  document.getElementById("filme").value = "";
}