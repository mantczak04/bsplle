import PersonItem from "../model/PersonItem";
import { randomPerson } from "../main";

let mainContainer = document.getElementById('main-container') as HTMLDivElement;
let guessesLeftContainer = document.getElementById('guesses-left') as HTMLSpanElement;
let inputContainer = document.getElementById('search') as HTMLInputElement;
let correctAnswerContainer = document.getElementById('correct-ans') as HTMLDivElement;


let GUESS_AGE : number = randomPerson.age;
let GUESS_VOIVODESHIP: string = randomPerson.voivodeship;
let GUESS_BORN_MONTH: string = randomPerson.bornMonth;

let GUESSES_LEFT: number = 5;

let CLOSE: string = '#ffd900'
let PERFECT: string = '#00ff00'

correctAnswerContainer.innerHTML = `Poprawna odpowiedź to : ${randomPerson.name}`;

function checkAge(age: number): string{
    if(age-1 === GUESS_AGE || age+1 === GUESS_AGE){
        return CLOSE;
    } else if(age === GUESS_AGE) {
        return PERFECT;
    } else {
        return '';
    }
}

function checkVoivodeship(voivodeship: string): string {

    if(voivodeship === GUESS_VOIVODESHIP) return PERFECT;
    
    
    switch(voivodeship){
        case 'Dolnośląskie': {
            return ['Opolskie', 'Łódzkie', 'Wielkopolskie', 'Lubuskie', 'Zachodniopomorskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Kujawsko-Pomorskie': {
            return ['Pomorskie', 'Warmińsko-Mazurskie', 'Mazowieckie', 'Łódzkie', 'Wielkopolskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Lubelskie': {
            return ['Mazowieckie', 'Podlaskie', 'Podkarpackie', 'Świętokrzyskie', 'Małopolskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Lubuskie': {
            return ['Zachodniopomorskie', 'Wielkopolskie', 'Dolnośląskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Łódzkie': {
            return ['Śląskie', 'Opolskie', 'Mazowieckie', 'Świętokrzyskie', 'Wielkopolskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Małopolskie': {
            return ['Śląskie', 'Opolskie', 'Podkarpackie', 'Lubelskie', 'Świętokrzyskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Mazowieckie': {
            return ['Łódzkie', 'Podlaskie', 'Warmińsko-Mazurskie', 'Kujawsko-Pomorskie', 'Lubelskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Opolskie': {
            return ['Łódzkie', 'Śląskie', 'Dolnośląskie', 'Wielkopolskie', 'Śląskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Podkarpackie': {
            return ['Małopolskie', 'Lubelskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Podlaskie': {
            return ['Warmińsko-Mazurskie', 'Mazowieckie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Pomorskie': {
            return ['Zachodniopomorskie', 'Kujawsko-Pomorskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Śląskie': {
            return ['Łódzkie', 'Opolskie', 'Małopolskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Świętokrzyskie': {
            return ['Łódzkie', 'Małopolskie', 'Lubelskie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Warmińsko-Mazurskie': {
            return ['Podlaskie', 'Mazowieckie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Wielkopolskie': {
            return ['Zachodniopomorskie', 'Lubuskie', 'Dolnośląskie', 'Kujawsko-Pomorskie', 'Łódzkie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        case 'Zachodniopomorskie': {
            return ['Zachodniopomorskie', 'Lubuskie', 'Dolnośląskie', 'Kujawsko-Pomorskie', 'Łódzkie', ''].includes(GUESS_VOIVODESHIP) ? CLOSE : '';
        }
        default: {
            return ''; // Domyślny przypadek, gdy województwo nie ma sąsiadów
        }

    }

    return '';
}

function checkBornMoth(month: string): string{
    if(month === GUESS_BORN_MONTH) return PERFECT;
    
    switch(month){
        case 'Styczeń': {
            return ['Luty'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Luty': {
            return ['Styczeń', 'Marzec'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Marzec': {
            return ['Luty', 'Kwiecień'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Kwiecień': {
            return ['Marzec', 'Maj'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Maj': {
            return ['Kwiecień', 'Czerwiec'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Czerwiec': {
            return ['Maj', 'Lipiec'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Lipiec': {
            return ['Czerwiec', 'Sierpień'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Sierpień': {
            return ['Lipiec', 'Wrzesień'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Wrzesień': {
            return ['Sierpień', 'Październik'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Październik': {
            return ['Wrzesień', 'Listopad'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Listopad': {
            return ['Październik', 'Grudzień'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
        case 'Grudzień': {
            return ['Listopad'].includes(GUESS_BORN_MONTH) ? CLOSE : '';
        }
    }
    return '';   
}

export function guessSelectedPerson(selectedPerson: PersonItem | undefined): void{
    if(selectedPerson){
        if(GUESSES_LEFT>=0)GUESSES_LEFT--;
        guessesLeftContainer.innerHTML = `Pozostało prób: ${GUESSES_LEFT}`;

        let guessedContainer = document.createElement('div');
        let guessedName = document.createElement('div');
        let guessedAge = document.createElement('div');
        let guessedCity = document.createElement('div');
        let guessedVoivodeship = document.createElement('div');
        let guessedMonth = document.createElement('div');

        guessedContainer.className = 'guessed';

        guessedName.className = 'guessed-name';
        guessedAge.className = 'guessed-age';
        guessedCity.className = 'guessed-city';
        guessedVoivodeship.className = 'guessed-voivodeship'; 
        guessedMonth.className='guessed-month';

        guessedName.textContent = selectedPerson.name;
        guessedAge.textContent = selectedPerson.age.toString();
        guessedVoivodeship.textContent = selectedPerson.voivodeship;
        guessedMonth.textContent = selectedPerson.bornMonth;
        


        guessedAge.style.backgroundColor = checkAge(selectedPerson.age);
        guessedVoivodeship.style.backgroundColor = checkVoivodeship(selectedPerson.voivodeship);
        guessedMonth.style.backgroundColor = checkBornMoth(selectedPerson.bornMonth);

        mainContainer.appendChild(guessedContainer);
        guessedContainer.appendChild(guessedName);
        guessedContainer.appendChild(guessedAge);
        guessedContainer.appendChild(guessedCity);
        guessedContainer.appendChild(guessedMonth);
        guessedContainer.appendChild(guessedVoivodeship);



        if(selectedPerson === randomPerson){
            alert('Brawo! Zgadłeś w ' + (5-GUESSES_LEFT) + ' próby!');
            guessedContainer.style.backgroundColor = '#87D37C';
            inputContainer.style.visibility = 'hidden';
            return;
        }

        if(GUESSES_LEFT-1 < 0 || GUESSES_LEFT===0) {
            alert(`Przegrałeś! Poprawna odpowiedź to ${randomPerson.name}`);
            guessedContainer.style.backgroundColor = '#d37c7c';
            inputContainer.style.visibility = 'hidden';
            correctAnswerContainer.style.visibility = 'visible'
            return;
        }
    }
    else{
        return;
    }
}