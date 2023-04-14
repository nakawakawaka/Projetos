import { produtoService } from "../service/produto-service.js";

const criaProdutoBox = (url, nomeProduto, preco, id) => {
  const novoProdutoBox = document.createElement('div');
  const conteudoIndex = `
  <div class="produtos__box">
    <div class="produtos__img">
      <img src="${url}" alt="img">
    </div>
    <h3 class="produto__titulo">${nomeProduto}</h3>
    <p class="produto__preco">${preco}</p>
    <a href="../produto.html?id=${id}" class="verProduto">Ver produto</a>
  </div>
  `;

  novoProdutoBox.innerHTML = conteudoIndex;
  novoProdutoBox.dataset.id = id;

  return novoProdutoBox;
}

const produtosContainer = document.querySelector('[data-product]');

produtosContainer.addEventListener('click', async evento => {
  let verProduto = evento.target.className === "verProduto";
  if (verProduto) {
    try {
      const linhaProduto = evento.target.closest('[data-id]');
      let id = linhaProduto.dataset.id;
      console.log(id)
      produtoService.detalhaProduto(id);
    } catch (error) {
      console.log(error);
    }
  }
});

const render = async () => {
  try {
    const listaProduto = await produtoService.listaProduto();
    listaProduto.forEach(elemento => {
      produtosContainer.appendChild(criaProdutoBox(elemento.url, elemento.nomeProduto, elemento.preco, elemento.id));
    });
  } catch (error) {
    console.log(error);
  }
}

render();