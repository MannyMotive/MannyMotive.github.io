const textDisplay = document.getElementById('text');
const phrase = 'Hello and welcome to my portfolio, I am a <em>Full-Stack</em> web developer with an emphasis on <em>Front-End</em> development.';

function loop() {
    for(let i = 0; i < phrase.length; i++) {
        console.log(phrase.charAt(i));
    }
}