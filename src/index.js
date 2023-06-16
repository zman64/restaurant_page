
import './shared/styles/global.css';
import createHeader from './components/Header';
import { createContactTab } from './pages/Contact';
// import createMenuTab from './pages/Menu;

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Create Header
    const header = createHeader();
    content.appendChild(header);

    // Create Tab Navigation
    const tabs = document.createElement('ul');
    tabs.classList.add('tabs');

    const contactTab = document.createElement('li');
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', () => loadTabContent(createContactTab));

    const menuTab = document.createElement('li');
    menuTab.textContent = 'Menu';
    // menuTab.addEventListener('click', () =>)

    tabs.appendChild(contactTab);
    tabs.appendChild(menuTab)
    content.appendChild(tabs);

    const tabContent = document.createElement('div');
    tabContent.classList.add('tab_content');
    content.appendChild(tabContent);

    // Function to Load Tab Content
    function loadTabContent(createTabContentFn) {
        // Clear the content area
        tabContent.innerHTML = '';

        // Populate content for the selected tab
        const tabContentElement = createTabContentFn();
        tabContent.appendChild(tabContentElement);
    }

    // Load default tab
    loadTabContent(createContactTab);


});
console.log('hello');