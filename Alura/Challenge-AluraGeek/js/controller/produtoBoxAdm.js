import { produtoService } from "../service/produto-service.js";

const criaProdutoBoxAdm = (url, nomeProduto, preco, id, descricao) => {
  const novoProdutoBox = document.createElement('div');
  const conteudoAdm = `
  <div class="produtos__box">
    <div class="produtos__img">
      <img src="${url}" alt="">
      <div class="produto__buttom-comtainer">
        <i class="fa-solid fa-trash delete" style="color: #ffffff;"></i>
        <a href="../edita_produto.html?id=${id}" class="edit"><i class="fa-solid fa-pen" style="color: #ffffff;"></i></a>
      </div>
    </div>
    <h3 class="produto__titulo">${nomeProduto}</h3>
    <p class="produto__preco"${preco}</p>
    <p class="id">#${id}</p>
  </div>`;

  novoProdutoBox.innerHTML = conteudoAdm;
  novoProdutoBox.dataset.id = id;

  return novoProdutoBox;
}

const produtosContainerAdm = document.querySelector('[data-product-adm]');

produtosContainerAdm.addEventListener('click', async evento => {
  let botaoDeletar = evento.target.className === "fa-solid fa-trash delete";
  if (botaoDeletar) {
    try {
      const linhaProduto = evento.target.closest('[data-id]');
      let id = linhaProduto.dataset.id;
      produtoService.removeProduto(id);
      linhaProduto.remove();
    } catch (error) {
      console.log(error);
    }
  }
});

const render = async () => {
  try {
    const listaProduto = await produtoService.listaProduto();
    listaProduto.forEach(elemento => {
      produtosContainerAdm.appendChild(criaProdutoBoxAdm(elemento.url, elemento.nomeProduto, elemento.preco, elemento.id));
    });
  } catch (error) {
    console.log(error);
  }
}

render();