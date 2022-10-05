const textDisplay = document.getElementById('text');
const phrase = ['Hello and welcome to my portfolio, I am a Full-Stack web developer with an emphasis on Front-End development.'];

let i = 0;
let currentPhrase = []; 
function loop() { 
textDisplay.innerHTML = currentPhrase.join('');
    if(i < phrase[0].length) {
        console.log(phrase[0][i]);
        currentPhrase.push(phrase[0][i]);
        i++;     
    } 
    
    setTimeout(loop,70);
    
  
}
loop()

