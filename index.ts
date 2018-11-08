import { Vector } from "./Vector";
import {Canvas} from "./canvas";
import {SecretWord} from "./SecretWord";
import axios from 'axios';


let secretWordElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("secretWord");
let incorrectLettersElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("incorrectLetters");

let inputLetterElement: HTMLInputElement = <HTMLInputElement> document.getElementById("letter");

let buttonGetWordElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getWord");
let buttonEnterLetterElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("enterLetter");
let buttonStartGameElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("startGame");

let SecretWordClass: SecretWord = new SecretWord(1,8,5);

let canvasThings: Canvas = new Canvas();


buttonEnterLetterElement.addEventListener("click", MouseEvent => {
    
})

buttonGetWordElement.addEventListener("click", MouseEvent => {
    GetWordAsync();
    secretWordElement.innerHTML = SecretWordClass.toString().split('').join(' ');
})

buttonStartGameElement.addEventListener("click", MouseEvent => {
    
})

buttonEnterLetterElement.addEventListener("click", MouseEvent =>{
       
      SecretWordClass.RevealLetter(inputLetterElement.value);
      secretWordElement.innerHTML = SecretWordClass.toString().split('').join(' ');
    
})

async function GetWordAsync(){
    await SecretWordClass.GetWord();
}