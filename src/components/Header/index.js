import './style.css';
import Icon from './triforce.png';

export default function createHeader(headerContent) {
    const header = document.createElement('header');
    header.className = 'header';

    const headerImage = new Image();
    headerImage.src = Icon;
    headerImage.alt = headerContent.imgAltText;

    const headline = document.createElement('h1');
    headline.textContent = headerContent.welcomeText;

    header.appendChild(headerImage);
    header.appendChild(headline);

    return header;
}
