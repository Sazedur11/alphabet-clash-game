//Hide home section
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

//show the play ground
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function addBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

//generate the random alphabet
// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     const randomNum = Math.random()*25;
//     const index = Math.round(randomNum);
//     console.log(index);

//     const alphabet = alphabets[index]
//     return alphabet;
// }

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNum = Math.random()* 25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index];
    
    return alphabet
}