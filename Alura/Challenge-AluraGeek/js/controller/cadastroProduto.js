import { produtoService } from "../service/produto-service.js";


const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async evento => {
  evento.preventDefault();
  const url = evento.target.querySelector('[data-tipo="img"]').value;
  const categoria = evento.target.querySelector('[data-tipo="categoria"]').value;
  const nomeProduto = evento.target.querySelector('[data-tipo="nome"]').value;
  const preco = evento.target.querySelector('[data-tipo="preco"]').value;
  const descricao = evento.target.querySelector('[data-tipo="descricao"]').value;

  await produtoService.criaProduto(url, categoria, nomeProduto, preco, descricao)
    .then(resposta => {
      window.location.href = `../todos_produtos.html`
      console.log(resposta)
    }).catch(error => {
      console.log(error)
      window.location.href = `../todos_produtos.html`
      })
})