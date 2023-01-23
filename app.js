const form = document.querySelector(".form");
const userInput = document.querySelector(".user-input");
const checkBtn = document.querySelector("#check-btn");
const answerOutput = document.querySelector(".vowel-count");
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vowelCount = 0;

function getCount(e) {

    e.preventDefault();

    if(userInput.value === ""){

        removeAlert();
        answerOutput.innerText = "";
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error-msg");
        errorMsg.innerText = "Please Fill In Field";
        answerOutput.appendChild(errorMsg);


    }else{

    let word = document.getElementById("user-input").value
    for(w of word){
        for(v of vowels){

            if(w == v){

                vowelCount++

            }
        }
    }

    answerOutput.innerText = `${word} has ${vowelCount} vowels`

    userInput.value = "";
    vowelCount = 0;

    }
}

checkBtn.addEventListener("click", getCount);



function removeAlert(){

    const alertMsg = document.querySelector(".error-msg");

    if(alertMsg){

        alertMsg.remove();

    }
}