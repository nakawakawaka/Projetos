import { produtoService } from "../service/produto-service.js";

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const verProduto = (url, nomeProduto, preco, id, descricao) => {
  const produto = document.createElement('div');
  const conteudo = `
      <div class="produto__img">
        <img src="${url}" alt="${nomeProduto}">
      </div>
      <div class="produto__info">
        <h1 class="produto__titulo__principal">${nomeProduto}</h1>
        <h3 class="produto__preco">${preco}</h3>
        <p class="produto__descricao">${descricao}
        </p>
      </div>
    `;

  produto.classList.add('produto-principal')
  produto.innerHTML = conteudo;
  produto.dataset.id = id;

  return produto;
}
const produtoContainer = document.querySelector('section.produto');

const render = async () => {
  try {
    const dados = await produtoService.detalhaProduto(id);

    produtoContainer.appendChild(verProduto(dados.url, dados.nomeProduto, dados.preco, dados.id, dados.descricao))
  } catch (error) {
    console.log(error);
  }
}

render();
