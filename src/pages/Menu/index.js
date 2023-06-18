import './style.css';

export function createMenuTab(menuContent) {

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = menuContent.mainText;

    // Appetizers section
    const appetizersSection = document.createElement('section');
    const appetizersHeading = document.createElement('h3');
    appetizersHeading.textContent = "Appetizers";
    appetizersSection.appendChild(appetizersHeading);

    const appetizer1 = document.createElement('p');
    appetizer1.textContent = "Hyrule Herb Salad - Fresh greens tossed with Hyrule herbs in a light vinaigrette.";
    appetizersSection.appendChild(appetizer1);

    const appetizer2 = document.createElement('p');
    appetizer2.textContent = "Fairy Tonic Soup - Revita"

    menuDiv.appendChild(heading);
    return menuDiv;

}