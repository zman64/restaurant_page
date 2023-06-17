import './style.css';

export function createMenuTab(menuContent) {

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = menuContent.mainText;

    // Add more content...

    contactDiv.appendChild(heading);
    return contactDiv;

}