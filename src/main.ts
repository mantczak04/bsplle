import PersonItem from "./model/PersonItem";

export const people : PersonItem[] = [
    new PersonItem(9, 'Inga Wrzesień', 19,  'Śląskie', 'Październik'),

    new PersonItem(1, 'Maciej Maciorson Antczak', 20,  'Śląskie', 'Luty'),
    new PersonItem(9, 'Wiktoria wrzesienxo Wrzesień', 21,  'Śląskie', 'Wrzesień'),
    new PersonItem(9, 'Kacper Kapi Pawłowski', 19,  'Mazowieckie', 'Grudzień'),
    new PersonItem(11, 'Kasia Bartnik', 19, 'Śląskie', 'Sierpień'),
    new PersonItem(0, 'Kamil Żeluś Sapota', 20, 'Śląskie', 'Czerwiec'),
    new PersonItem(12, 'Cristiano Ronaldo', 39, 'Funchal', 'Luty'),
    new PersonItem(9, 'Filip Masny Fil Gonera', 20,  'Śląskie', 'Marzec'),
    new PersonItem(9, 'Cyprian Cypis Matysiakiewicz', 22,  'Śląskie', 'Sierpień'),
    new PersonItem(10, 'Michał Zając Zajączkowski', 21, 'Dolnośląskie', 'Styczeń'),
    new PersonItem(10, 'Kacper Meder Mederski', 21, 'Warmińsko-Mazurskie', 'Wrzesień'),
    new PersonItem(12, 'Tomasz Borixon Borycki', 47, 'Świętokrzyskie', 'Czerwiec'),
    new PersonItem(11, 'Mateusz Kaczer Kaczerski', 21, 'Zachodnio-pomorskie', 'Październik'),
    new PersonItem(9, 'Maciek Luźny Joe Sadkowski', 20,  'Śląskie', 'Maj'),
    new PersonItem(9, 'Iga Świątek', 13,  'Mazowieckie', 'Maj'),
    new PersonItem(2, 'Piotr Piotras Kaczorowski', 21,  'Śląskie', 'Listopad'),
    new PersonItem(10, 'Andrzej Mederski', 55, 'Warmińsko-Mazurskie', 'Listopad'),
    new PersonItem(10, 'Łukasz Sarbicki', 20, 'Lubuskie', 'Wrzesień'),
    new PersonItem(12, 'Leo Messi', 36, 'Rosario', 'Czerwiec'),
    new PersonItem(10, 'Kacper Gozdior68 Goździejewski', 20, 'Dolnośląskie', 'Kwiecień'),
    new PersonItem(3, 'Emil Nakurwiator3000 Burda', 21,  'Śląskie', 'Marzec'),
    new PersonItem(9, 'Szymon Zwolszczan Zwolski', 20,  'Śląskie', 'Maj'),
    new PersonItem(9, 'Wiktor decu Grudzień', 21,  'Śląskie', 'Lipiec'),
    new PersonItem(9, 'Tomasz Antczak', 51,  'Śląskie', 'Maj'),
    new PersonItem(9, 'Kamil Narks Krystaszek', 20,  'Śląskie', 'Sierpień'),
    new PersonItem(10, 'Max BSPL', 14, 'Warmińsko-Mazurskie', 'Luty'),
    new PersonItem(12, 'Dawid JasperTV Wójcik', 37, 'Łódzkie', 'Kwiecień'),
    new PersonItem(4, 'Michał Kwieciu Kwiecień', 19,  'Śląskie', 'Marzec'),
    new PersonItem(5, 'Bartek Filuś', 21,  'Śląskie', 'Wrzesień'),
    new PersonItem(6, 'Sebastian Seba Duda', 21,  'Śląskie', 'Maj'),
    new PersonItem(7, 'Jakub Juzoń', 20,  'Śląskie', 'Marzec'),
    new PersonItem(8, 'Wiktoria Nabiałek', 20,  'Śląskie', 'Lipiec'),
];

const PEOPLE_SIZE = people.length;

const startDate = new Date(2024, 0, 35);
const todaysDate = new Date();

const randomIndex = todaysDate.getDay() - startDate.getDay();

export const randomPerson = people[randomIndex%PEOPLE_SIZE];


export let guessesLeft: number = 5;