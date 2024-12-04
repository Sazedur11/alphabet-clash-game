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


//generate the random alphabet
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);
    console.log(index);

    const alphabet = alphabets[index]
    return alphabet;
}