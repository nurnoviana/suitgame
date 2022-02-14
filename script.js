let [computer_score, user_score] = [0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'batu' : {
        'batu' : 'draw',
        'gunting' : 'win',
        'kertas' : 'lose'
    },
    'kertas' : {
        'batu' : 'win',
        'gunting' : 'lose',
        'kertas' : 'draw'
    },
    'gunting' : {
        'batu' : 'lose',
        'gunting' : 'draw',
        'kertas' : 'win'
    }
}
function checker(input){
    var choices = ["batu", "gunting", "kertas"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp-choice").innerHTML = 
    ` Komputer pilih <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user-choice").innerHTML = 
    ` Kamu pilih <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "Kamu MENANG!";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "Kamu KALAH";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer-score").innerHTML = computer_score;
    document.getElementById("user-score").innerHTML = user_score;
}