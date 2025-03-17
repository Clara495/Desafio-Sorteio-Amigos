let amigos = [];


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        input.value = ''; 
        alert(`${nome} foi adicionado!`);
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Você sorteou: ${amigo}`;
    resultadoLista.appendChild(li);
} 