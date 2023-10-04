const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {
        const idSelecionado = personagem.attributes.id.value;
        
        if(idSelecionado === '') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        const imagemJogador1 = document.getElementById('personagem_p1');
        imagemJogador1.src = `./src/img/vs_${idSelecionado}.png`
        
        const nomeJogador1 = document.getElementById('nome_p1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado
        
        const botao = document.querySelector('#botao')
        botao.href = `./src/intro/${idSelecionado}.html`
    });
})

// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const audioElement = new Audio('./src/audio/super_smash_bross.mp3');
// const audioSource = audioContext.createMediaElementSource(audioElement);

// audioSource.connect(audioContext.destination);
// audioElement.play();
