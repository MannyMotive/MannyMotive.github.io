const textDisplay = document.getElementById('text');
const phrase = 'Hello and welcome to my portfolio, I am a <em>Full-Stack</em> web developer with an emphasis on <em>Front-End</em> development.';

let i = 0; 
function loop() { 
    if(i < phrase.length ) {
        console.log(phrase.charAt(i));  
        i++;     
    } 
    
    setTimeout(loop,80);
}
loop()