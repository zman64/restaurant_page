
import './shared/styles/global.css';
import createHeader from './components/Header';
import createFooter from './components/Footer';
import { createContactTab } from './pages/Contact';
import { createHomeTab } from './pages/Home'
import data from './content/en.json';
import { createMenuTab } from './pages/Menu';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
   initializeDefaultContent(content, data);
   
});

function initializeDefaultContent(content, data) {
    const header = createHeader(data.header);
    content.appendChild(header);

    initializeTabNavigation(content, data);
    
    const footer = createFooter(data.footer);
    content.appendChild(footer);
}

function initializeTabNavigation(content, data) {
    const tabs = document.createElement('ul');
    tabs.classList.add('tabs');
    content.appendChild(tabs);

    const tabContent = document.createElement('div');
    tabContent.classList.add('tab_content');
    content.appendChild(tabContent);

    let activeTab = null;

    const tabData = [
        { name: 'home', contentFn: createHomeTab, content: data.home },
        { name: 'menu', contentFn: createMenuTab, content: data.menu },
        { name: 'contact', contentFn: createContactTab, content: data.contact }
    ];

    tabData.forEach(tab => {
        const tabElement = document.createElement('li');
        tabElement.textContent = tab.name.charAt(0).toUpperCase() + tab.name.slice(1);
        tabElement.addEventListener('click', () => switchTab(tab.name, tab.contentFn, tab.content));
        tabs.appendChild(tabElement);
    });

    // Function to switch tab content
    function switchTab(tabName, createTabContentFn, ...args) {
        if (activeTab === tabName) {
            return;
        }
        activeTab = tabName;
        loadTabContent(createTabContentFn, ...args);
    }

    function loadTabContent(createTabContentFn, ...args) {
        tabContent.innerHTML = '';
        const tabContentElement = createTabContentFn(...args);
        tabContent.appendChild(tabContentElement);
    }

    // load default tab
    loadTabContent(createHomeTab, data.home);
}