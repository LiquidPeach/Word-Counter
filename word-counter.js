//global variables
var wordCount = document.getElementById('word-count');
var letterCount = document.getElementById('letter-count');
var input = document.getElementById('text-box');

//event handelers
input.addEventListener('keyup', function(e){
    wordCounter(e.target.value);
    letterCounter(e.target.value);
});

//functions 

function wordCounter(userInput){
    userInput = input.value.split(' ');
    var count = 0;

    for(let i = 0; i < userInput.length; i++){
        if(userInput[i] !== ' ' && isWord(userInput[i]))
            count++;
    }
    wordCount.innerText = count;
}

function letterCounter(userInput){
    userInput = input.value;
    var count = 0;

    for(let i = 0; i < userInput.length; i++){
        count++;
    }
    letterCount.innerText = count;
}

function isWord(str){ //does not count special characters
    
    for(let i = 0; i < str.length; i++){
        var unicode = str.charCodeAt(i);

        if((unicode > 47 && unicode < 58) || 
           (unicode > 64 && unicode < 91) || 
           (unicode > 96 && unicode < 123)) {
               return true;
           }
    }
    return false;
}