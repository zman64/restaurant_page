import './style.css';

export default function createHomePage() {

    // Main
    // First Section
    const main = document.createElement('main');
    const firstSection = document.createElement('section');
    const mainText = document.createElement('p')
    mainText.textContent = 'Step into a culinary paradise inspired by the enchanting world of Zelda: Breath of the Wild. Triforce Tavern is a place where adventurers and food lovers can gather to savor dishes made from recipes straight out of the game.'
    firstSection.appendChild(mainText)
    main.appendChild(firstSection)
    content.appendChild(main);

}
