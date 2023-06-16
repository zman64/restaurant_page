export function createContactTab() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';

    // Add more content...

    contactDiv.appendChild(heading);
    return contactDiv;
}
