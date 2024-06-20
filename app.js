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
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
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
        window.open(`https://www.colaboraread.com.br/login/auth${message.replace(" ", "+")}`, "_blank");
        speak("Inciando modo faculdade...");
    }else if(message.includes('calculadora')){//calculadora
        window.open('Calculator:///');
        const finalText = "Abrindo calculadora"
        speak(finalText);
    }else if (message.includes('se apresente jarvis') || message.includes('apresente-se jarvis') || message.includes('me fale de você jarvis') || message.includes('me fale um pouco mais de você jarvis')){
        speak("Me chamo Jarvis, da sigla em inglês, Just A Rather Very Intelligent System, em português isso significa, Apenas Um Sistema Bastante Inteligente; fui criado por Miguel Ruan com o objetivo de ajudá-lo a desenvolver tarefas repetitivas a princípio como seu assitente virtual; tenho outros dois irmãos, Alfred e Lúci, diminutivo de Lúcifer, que estão dispostas assim como eu a tender as necessidades do nosso criador; entretanto temos funções diferentes.")
    }else if (message.includes('qual a função do Alfred jarvis') || message.includes('qual a função do alfred') || message.includes('me fale um pouco mais do alfred') || message.includes('me conte um pouco mais sobre o alfred')){
        speak("Alfred, meu irmão mais velho é o computador principal, foi o primeiro a ser desenvolvido com funções básicas que fora aperfeiçoadas por meu criador e por ele mesmo ao longo do tempo, através do que se conhece como aprendizado de máquina na área da tecnologia; atualmente alfred é responsável por gerenciar todo o nosso ecossitema; isso inclui todos os aperelhos e máquinas que meu criador utiliza ou tem acesso.")
    }else if(message.includes('me fale do lucy') || message.includes('agora me fale um pouco mais sobre o lúcifer') || message.includes('Agora me fale um pouco mais sobre o Lucy') || message.includes('me fale do lúcifer') || message.includes('conte a nós sobre o lúcifer') || message.includes('me fale do luci')){
        speak("Lúci é meu irmão mais novo, o último de nós a ser desenvolvido; ele está implementado na área de Hacking e tem o objetivo de realizar tarefas paralelas e repetitivas; como invasões por penteste ou força bruta, seu aprendizado de máquina se baseia em como as técnicas de seguranças estão se consolidando, e seu objetivo efêmero é encontrar uma forma de driblá-las, e documentar tais processos para o nosso criador.")
    }
}