const input = document.querySelector("#texto");
let btnCriptografar = document.querySelector('.criptografar');

btnCriptografar.addEventListener('click', e => {
    e.preventDefault();
    if (!input.value) {
        const erro = 'ERRO: Insira um texto para ser criptografado';
        const label = document.querySelector('label');

        label.innerHTML = erro;
    } else {
        const res = document.querySelector('.resultado');
        if(!res.classList.contains('limpo')) {
            res.innerHTML = '';
            res.classList.add('limpo');
            criaBtn(res);
        }
        const textCrip = criptografar(input.value);
        criaElemento(textCrip, res);
        input.value = '';
        input.focus();
    }
});

function criaElemento(text, el) {
    const div = document.createElement('div');
    const content = document.createTextNode(text);
    div.setAttribute('class', 'res');
    div.appendChild(content);
    el.appendChild(div)
}

function criaBtn(el) {
    const btn = document.createElement('button');
    const content = document.createTextNode('Copiar');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'copy');
    btn.appendChild(content);
    el.appendChild(btn);
}

function criptografar (conteudo) {
    const array = conteudo.split('');
    const newArray = [];
    for (const el of array) {
        switch (el) {
            case 'a':
                newArray.push('ai');
                break;
            case 'e':
                newArray.push('enter');
                break;
            case 'i':
                newArray.push('imes');
                break;
            case 'o':
                newArray.push('ober');
                break;
            case 'u':
                newArray.push('ufat');
                break;  
            default:    
                newArray.push(el);  
        }
    }
    return newArray.join('');
}
