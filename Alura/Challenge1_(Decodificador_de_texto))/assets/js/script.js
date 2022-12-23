const input = document.querySelector("#texto");
const label = document.querySelector('label');
const res = document.querySelector('.resultado');

document.addEventListener ('click', e => {
    e.preventDefault();
    const el = e.target;
    console.log(el);
    if (el.classList.contains('criptografar')) pegaConteudo(input.value, criptografar);
    if (el.classList.contains('descriptografar')) pegaConteudo(input.value, descriptografar);
    if (el.classList.contains('copy')) document.execCommand('copy');
});

function pegaConteudo (content, funcao) {
    if (!content) {
        const erro = 'ERRO: Insira um texto para ser Criptografado';
        label.innerHTML = erro;
    } else {
        if(!res.classList.contains('limpo')) {
            res.innerHTML = '';
            res.classList.add('limpo');
            label.innerHTML = 'Criptografe ou Descriptografe seu texto';
            criaBtn(res);
        }
        const textCrip = funcao(content.toLowerCase());
        criaElemento(textCrip, res);
        input.value = '';
        input.focus();
    }
}

function criaElemento(text, el) {
    const div = document.createElement('div');
    const content = document.createTextNode(text);
    div.setAttribute('class', 'res');
    div.appendChild(content);
    el.appendChild(div);
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

function descriptografar (conteudo) {
    let content = conteudo;
    if (conteudo.indexOf('ai')) content = content.replace(/ai/g, 'a');
    if (conteudo.indexOf('enter')) content = content.replace(/enter/g, 'e');
    if (conteudo.indexOf('imes')) content = content.replace(/imes/g, 'i');
    if (conteudo.indexOf('ober')) content = content.replace(/ober/g, 'o');
    if (conteudo.indexOf('ufat')) content = content.replace(/ufat/g, 'u');
    return content;
}