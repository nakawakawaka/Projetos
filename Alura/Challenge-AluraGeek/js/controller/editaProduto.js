import { produtoService } from "../service/produto-service.js";

(async () => {
  const pegaURL = new URL(window.location);
  
  const id = pegaURL.searchParams.get('id');
  
  const inputUrl = document.querySelector('[data-tipo="img"]');
  const inputCategoria = document.querySelector('[data-tipo="categoria"]');
  const inputNomeProduto = document.querySelector('[data-tipo="nome"]');
  const inputPreco = document.querySelector('[data-tipo="preco"]');
  const inputDescricao = document.querySelector('[data-tipo="descricao"]');
  
  try {    
    const dados = await produtoService.detalhaProduto(id);
    inputUrl.value = dados.url;
    inputCategoria.value = dados.categoria;
    inputNomeProduto.value = dados.nomeProduto;
    inputPreco.value = dados.preco;
    inputDescricao.value = dados.descricao;
  } catch (error) {
    console.log(error);
  }
  
  const formulario = document.querySelector('[data-form]');
  
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    
    try {      
      await produtoService.atualizaProduto(id, inputUrl.value, inputCategoria.value, inputNomeProduto.value, inputPreco.value, inputDescricao.value);
      
      window.location.href = "../todos_produtos.html";
      alert('Edicao concluida com sucesso!');
    } catch (error) {
      console.log(error);
    }
  });
})();