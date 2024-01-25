import PersonItem from "../model/PersonItem";
import { people } from "../main";


function searchPeople(searchTerm: string): PersonItem[] {
    return people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

function onSearchInput(event: Event): void {
    let inputElement = event.target as HTMLInputElement;
    let searchTerm = inputElement.value;
    if(searchTerm.length >=3){
    let results = searchPeople(searchTerm);
    
    // Get the results list element
    let resultsList = document.getElementById('results') as HTMLUListElement;
    // Clear the current results
    while (resultsList.firstChild) {
        resultsList.removeChild(resultsList.firstChild);
    }

    // Add the new results
// Add the new results
for (let person of results) {
    let listItem = document.createElement('li');
    listItem.textContent = person.name;

    // Add event listener to list item
    listItem.addEventListener('click', function() {
        let person = this.textContent;
        let selectedPerson : PersonItem | undefined = people.find(p => p.name === person);
        if(selectedPerson !== undefined){
            import('./guessTemplate').then(module =>{
                module.guessSelectedPerson(selectedPerson);
            }); 
        } else {
            console.log('Error: selectedPerson is undefined');
        }
    });

    resultsList.appendChild(listItem);
}
}
}

// Attach event listener to search bar
let searchBar = document.getElementById('search-bar') as HTMLInputElement;
searchBar.addEventListener('input', onSearchInput);