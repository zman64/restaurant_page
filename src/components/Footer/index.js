import './style.css';
import content from '../../content/en.json';

export default function createFooter(data) {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const text = document.createElement('p');
    text.textContent = data.copyrightText;

    footer.appendChild(text);

    return footer;
}
