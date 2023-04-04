import { produtoService } from "../service/produto-service.js";

const criaProdutoBox = (url, nomeProduto, preco, id, descricao) => {
  const novoProdutoBox = document.createElement('div');
  const conteudoIndex = `
  <div class="produtos__box">
    <div class="produtos__img">
      <img src="${url}" alt="img">
    </div>
    <h3 class="produto__titulo">${nomeProduto}</h3>
    <p class="produto__preco">${preco}</p>
    <a href="../todos_produtos.html?${id}">Ver produto</a>
  </div>
  `;

  novoProdutoBox.innerHTML = conteudoIndex;
  novoProdutoBox.dataset.id = id;

  return novoProdutoBox;
}

const produtosContainer = document.querySelector('[data-product]');

const render = async () => {
  try {
    const listaProduto = await produtoService.listaProduto();
    listaProduto.forEach(elemento => {
      produtosContainer.appendChild(criaProdutoBox(elemento.url, elemento.nomeProduto, elemento.preco));
    });
  } catch (error) {
    console.log(error);
  }
}

render();