import './style.css';
import content from '../../content/en.json';

export default function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const text = document.createElement('p');
    text.textContent = content.footer.copyrightText;

    footer.appendChild(text);

    return footer;
}
