import './style.css';
import Icon from './triforce.png';
import content from '../../content/en.json';

export default function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const headerImage = new Image();
    headerImage.src = Icon;
    headerImage.alt = content.header.imgAltText;

    const headline = document.createElement('h1');
    headline.textContent = content.header.welcomeText;

    header.appendChild(headerImage);
    header.appendChild(headline);

    return header;
}
