//Method 1
// function play(){
//     // when click the  play button then hide the home section
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');

//     //show the play ground section
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }
function handdleKeyboardPress(event){
    const playerPress = event.key;
    const newAlphabet = document.getElementById('new-alphabet');
    const targetAlphabet = newAlphabet.innerText;

    //check the alphabet
    if(playerPress === targetAlphabet){
        console.log(targetAlphabet);
        //update the score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1
        
        currentScoreElement.innerText = newScore;

        ///start a new alphabet
        removeBGColorById(targetAlphabet)
        continueGame();
    }
    else{
        const currentLifeElement = document.getElementById('left-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const leftLife = currentLife - 1;

        currentLifeElement.innerText = leftLife;
    }
}
document.addEventListener('keyup', handdleKeyboardPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your alphabet', alphabet)

    const newAlphabetElement = document.getElementById('new-alphabet');
    newAlphabetElement.innerText =alphabet;

    //set background color
    addBGColorById(alphabet)
}


//Method 2
function play(){
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame();
}