import './style.css';

export function createHomeTab(mainContent) {

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = mainContent.mainText;

    // Add more content...

    contactDiv.appendChild(heading);
    return contactDiv;

}
