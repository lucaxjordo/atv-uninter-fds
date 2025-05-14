document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemContainer = document.getElementById('mensagemContainer');
    
    const frasesMotivacionais = [
        "A jornada de mil milhas começa com um único passo. Continue programando!",
        "Todo expert foi um dia iniciante. Persista e você chegará lá!",
        "Os bugs de hoje são as lições de amanhã. Não desista!",
        "Programação é como magia - com prática, você pode criar coisas incríveis!",
        "Cada linha de código é um passo em direção ao seu crescimento como desenvolvedor."
    ];
    
    let ultimaFrase = -1;
    
    mensagemBtn.addEventListener('click', function() {                          //verifica se a mensagem está visível ou não
    
        if (mensagemContainer.textContent !== '') {
            mensagemContainer.textContent = '';
            mensagemBtn.textContent = 'Abra sua mensagem';
            return;
        }
        
        
        let indice;                                                             //escolher uma frase diferente da última exibida
        do {
            indice = Math.floor(Math.random() * frasesMotivacionais.length);
        } while (indice === ultimaFrase && frasesMotivacionais.length > 1);
        
        ultimaFrase = indice;
        
        
        mensagemContainer.textContent = frasesMotivacionais[indice];
        mensagemBtn.textContent = 'Ocultar mensagem';
    });
});