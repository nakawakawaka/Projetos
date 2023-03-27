

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  const url = evento.target.querySelector('[data-tipo="img"]').value;
  const categoria = evento.target.querySelector('[data-tipo="categoria"]').value;
  const nomeProduto = evento.target.querySelector('[data-tipo="nome"]').value;
  const preco = evento.target.querySelector('[data-tipo="preco"]').value;

  criaProduto(url, categoria, nomeProduto, preco)
})

  
const criaProduto = (url, categoria, nomeProduto, preco) => {
  return fetch (`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      categoria: categoria,
      nomeProduto: nomeProduto,
      preco:preco
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error('Não foi possível criar um cliente.');
  });

}

const criaProdutoBox = () => {
  const novoProdutoBox = document.createAttribute('div');
  const conteudo = `
  <div class="produtos__box">
    <div class="produtos__img">
      <img src="${url}" alt="">
    </div>
    <h3 class="produto__titulo">${nome_produto}</h3>
    <p class="produto__preco">${preco}</p>
    <a href="#">Ver produto</a>
  </div>
  `;
}

