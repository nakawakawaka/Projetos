const listaProduto = async () => {
  return await fetch('https://json-server-nine-alpha.vercel.app/profile')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
}

const criaProduto = async (url, categoria, nomeProduto, preco, descricao) => {
  return await fetch(`https://json-server-nine-alpha.vercel.app/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      categoria: categoria,
      nomeProduto: nomeProduto,
      preco: preco,
      descricao: descricao
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error('Não foi possível criar um Produto.');
  });
}

const removeProduto = async id => {
  return await fetch(`https://json-server-nine-alpha.vercel.app/profile/${id}`, {
    method: 'DELETE'
  }).then(resposta => {
    if(!resposta.ok) {
      throw new Error('Não foi possível remover um Produto.')
    }
  })
}

const detalhaProduto = async id => {
  return await fetch(`https://json-server-nine-alpha.vercel.app/profile/${id}`)
  .then(resposta => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível detalhar o Produto.'); 
  });
}

const atualizaProduto = async (id, url, categoria, nomeProduto, preco, descricao) => {
  return await fetch(`https://json-server-nine-alpha.vercel.app/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      categoria: categoria,
      nomeProduto: nomeProduto,
      preco: preco,
      descricao: descricao
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível atualizar um Produto.');
  })
}


export const produtoService = {
  listaProduto,
  criaProduto,
  removeProduto,
  detalhaProduto,
  atualizaProduto,
};