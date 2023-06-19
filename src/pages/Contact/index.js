import './style.css';

function createElement(tag, attributes, textContent) {
    const element = document.createElement(tag);
    
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    
    if (textContent) {
        element.textContent = textContent;
    }
    
    return element;
}

function appendChildren(parent, ...children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

export function createContactTab(contactContent) {
    const contactDiv = createElement('div', { class: 'tab-content contact' });

    const heading = createElement('h2', null, 'Contact Us');
    contactDiv.appendChild(heading);

    // Address Section
    const addressSection = createElement('section', { class: 'address-section' });
    const addressHeading = createElement('h3', null, contactContent.addressHeading);
    const address = createElement('p', null, contactContent.address);
    appendChildren(addressSection, addressHeading, address);

    // Hours Section
    const hoursSection = createElement('section', { class: 'hours-section' });
    const hoursHeading = createElement('h3', null, contactContent.hoursHeading);
    const hours = createElement('p', null, contactContent.hours);
    appendChildren(hoursSection, hoursHeading, hours);

    // Contact Form Section
    const contactFormSection = createElement('section', { class: 'contact-form-section' });
    const formHeading = createElement('h3', null, contactContent.formHeading);
    const contactForm = createElement('form');
    const inputName = createElement('input', { type: 'text', placeholder: 'Your Name' });
    const inputEmail = createElement('input', { type: 'email', placeholder: 'Your Email' });
    const textarea = createElement('textarea', { placeholder: 'Your Message' });
    const submitButton = createElement('button', { type: 'submit' }, 'Send');
    appendChildren(contactForm, inputName, inputEmail, textarea, submitButton);
    appendChildren(contactFormSection, formHeading, contactForm);

    // Appending all sections to contactDiv
    appendChildren(contactDiv, addressSection, hoursSection, contactFormSection);

    return contactDiv;
}

