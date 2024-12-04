//Method 1
// function play(){
//     // when click the  play button then hide the home section
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');

//     //show the play ground section
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet)

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