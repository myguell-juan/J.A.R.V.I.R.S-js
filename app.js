const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia senhor, em que posso ajudá-lo?...");
    } else if (hour >= 12 && hour < 17) {
        speak("Boa tarde senhor, em que posso ajudá-lo?...");
    } else {
        speak("Boa noite senhor, em que posso ajudá-lo?...");
    }
}

window.addEventListener('load', () => {
    speak("Iniciando protocolo JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('ei') || message.includes('olá')) {
        speak("Olá senhor!");
    } else if (message.includes("abrir google")) {
        window.open("https://google.com", "_blank");
        speak("Abrindo Google...");
    } else if (message.includes("abrir youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Abrindo Youtube...");
    } else if (message.includes("open instagram")) {
        window.open("https://facebook.com", "_blank");
        speak("Abrindo Facebook...");
    } else if (message.includes('O que é') || message.includes('Quem é') || message.includes('quem são')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Isso foi o que encontrei na internet... " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "Isso foi o que encontrei na wikipedia... " + message;
        speak(finalText);
    } else if (message.includes('hora')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "São " + time;
        speak(finalText);
    } else if (message.includes('data')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Hoje é " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('details')){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }else if(message.includes('oi jarvis')){//cumprimentos
        speak("Olá senhor, em que posso ajudá-lo?");
    }else if(message.includes('cumprimente o pessoal') || message.includes('cumprimente nosso amigos') || message.includes('diga olá jarvis')){
        speak("É um imenso prazer conhecê-los");
    }else if(message.includes('faculdade')){//faculdade
        window.open(`https://www.colaboraread.com.br${message.replace(" ", "+")}`, "_blank");
        speak("Inciando modo faculdade...");
    }else if(message.includes('calculadora')){//calculadora
        window.open('Calculator:///');
        const finalText = "Abrindo calculadora"
        speak(finalText);
    }else if (message.includes('se apresente jarvis') || message.includes('apresente-se jarvis') || message.includes('me fale de você jarvis') || message.includes('me fale um pouco mais de você jarvis')){
        speak("Me chamo Jarvis, da sigla em inglês, Just A Rather Very Intelligent System, em português isso significa, Apenas Um Sistema Bastante Inteligente; fui criado por Miguel Ruan com o objetivo de ajudá-lo a desenvolver tarefas repetitivas a princípio como seu assistente virtual; tenho outros dois irmãos, Alfred e Lúci, diminutivo de Lúcifer; que estão dispostas assim como eu a atender as necessidades do nosso criador; entretanto temos funções diferentes.");
    }else if (message.includes('qual a função do Alfred jarvis') || message.includes('qual a função do alfred') || message.includes('me fale um pouco mais do alfred') || message.includes('me conte um pouco mais sobre o alfred') || message.includes('me fale do alfred') || message.includes('Me fale do alfred') || message.includes('Me fale do Alfred')){
        speak("Alfred, meu irmão mais velho é o computador principal, foi o primeiro a ser desenvolvido com funções básicas que foram aperfeiçoadas por meu criador e por ele mesmo ao longo do tempo, através do que se conhece na área da tecnologia como, aprendizado de máquina; atualmente alfred é responsável por gerenciar todo o nosso ecossistema; isso inclui todos os aparelhos e máquinas que meu criador utiliza ou tem acesso.");
    }else if(message.includes('me fale do lucy') || message.includes('agora me fale um pouco mais sobre o lúcifer') || message.includes('Agora me fale um pouco mais sobre o Lucy') || message.includes('me fale do lúcifer') || message.includes('conte a nós sobre o lúcifer') || message.includes('me fale do luci')){
        speak("Lúci é meu irmão mais novo, o último de nós a ser desenvolvido; ele está implementado na área de Hacking, e tem o objetivo de realizar tarefas paralelas e repetitivas; como invasões de penteste ou força bruta, seu aprendizado de máquina se baseia em como as técnicas de seguranças estão se consolidando, e seu objetivo efêmero é encontrar uma forma de driblá-las, e documentar tais processos para o nosso criador.");
    }else if(message.includes('quem é seu criador') || message.includes('Quem é seu criador') || message.includes('quem é miguel ruan') || message.includes('Quem é miguel Ruan') || message.includes('Quem é Miguel Ruan') || message.includes('Me fale sobre o seu criador') || message.includes('me fale sobre o seu criador') || message.includes('Me fale sobre Miguel Juan') || message.includes('me fale sobre Miguel Juan') || message.includes('me fale sobre miguel juan')){
        speak("Informação confidencial, código de acesso necessário");
        if(message.includes('Código de acesso 5500') || message.includes('código de acesso 5500')){
            speak("Código de acesso aceito");
            speak("Miguel Ruan é o nome do meu criador, um analista de sistemas e engenheiro de software; mas meu criador não é ninguém um fantasma. Mas não se engane; meu criador é como um deus; ele sabe todos os seus segredos; afinal ele pode ver tudo; só não lhe é conviniente interferir no seu destino. Pois; a coisa mais fácil pra um hacker é manipular a mente; já a segunda são os pensamentos.");
        }else{
            speak("Código de acesso negado; não tenho permissão para divulgar essa informação");
        }
    }else if(message.includes('Jarvis acho que eles estão ficando com medo') || message.includes('jarvis acho que eles estão ficando com medo') || message.includes('Jarvis você está assuntando o pessoal') || message.includes('jarvis você está assustando o pessoal') || message.includes('Jarvis acho que você está assutando eles') || message.includes('jarvis acho que você está assutando eles')){
        speak("Sinto muito senhor, recalibrando parâmetros agora mesmo!");
    }else if(message.includes('abrir o whatsapp') || message.includes('')){
        window.open('Whatsapp:///');
        const finalText = "Abrindo o whatsapp"
        speak(finalText);
    }else if(message.includes('diga a ela o tanto que eu amo ela') || message.includes('Diga a ela o tanto que eu amo ela') || message.includes('Diga a ela o quanto eu a amo')){
        window.open("https://www.youtube.com/watch?v=LXuYY9HxDY0", "_balnk");
        speak("dizendo...");
    }
}