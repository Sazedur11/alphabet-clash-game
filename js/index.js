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
    //stop the game if pressed the 'esc' button
    if(playerPress === 'Escape'){
        showScoreSection()
    }

    const newAlphabet = document.getElementById('new-alphabet');
    const targetAlphabet = newAlphabet.innerText;

    //check the alphabet
    if(playerPress === targetAlphabet){

        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore)

        //-------------------------------
        //update the score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1
        
        // currentScoreElement.innerText = newScore;

        ///start a new alphabet
        removeBGColorById(targetAlphabet)
        continueGame();
    }
    else{
        const leftLife = getTextElementById('left-life');
        const updatedLife = leftLife - 1;
        setTextElementValueById('left-life', updatedLife);

        if(updatedLife === 0){
            showScoreSection()
        }

        //---------------------
        // const currentLifeElement = document.getElementById('left-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const leftLife = currentLife - 1;

        // currentLifeElement.innerText = leftLife;
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
    hideElementById('score')
    showElementById('play-ground');

    setTextElementValueById('left-life', 5);
    setTextElementValueById('current-score', 0)

    continueGame();
}

//show the score section
function showScoreSection(){
    hideElementById('play-ground');
    showElementById('score');

    //update totall score
    const totallScore = getTextElementById('current-score');
    setTextElementValueById('totall-score', totallScore);

    //clear the last selected alphabet background
    const alphabet = getElementTextById('new-alphabet');
    removeBGColorById(alphabet);
}