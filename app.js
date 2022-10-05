const textDisplay = document.getElementById('text')
const css = document.createElement("style");
const phrase = ['Hello and welcome to my portfolio, I am a Full-Stack web developer with an emphasis on Front-End development.'];

let i = 0;
let currentPhrase = []; 
function loop() { 
//  css.innerHTML = "#text  { display: inline; border-right: 0.05em solid}";
//  document.body.appendChild(css);
textDisplay.innerHTML = currentPhrase.join('');


    if(i < phrase[0].length) {
        console.log(phrase[0][i]);
        currentPhrase.push(phrase[0][i]);
        
        i++;     
    } 
    
    setTimeout(loop,70);
    
}
loop()


        // css.type = "text/css";
        // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        // document.body.appendChild(css);