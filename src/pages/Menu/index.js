import './style.css';

export function createMenuTab(menuContent) {

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content', 'menu');

    const heading = document.createElement('h2');
    heading.classList.add('menu-title');
    heading.textContent = menuContent.mainText;
    menuDiv.appendChild(heading);

    const menuArea = document.createElement('div');
    menuArea.classList.add('menu-area');


    for (let section of menuContent.sections) {
        menuArea.appendChild(createSection(section.name, section.dishes));
    }
    menuDiv.appendChild(menuArea);
    return menuDiv;

}

function createSection(sectionName, dishes) {
    const section = document.createElement('section');
    section.classList.add('menu-section');
    const sectionHeading = document.createElement('h3');
    sectionHeading.classList.add('menu-heading');
    sectionHeading.textContent = sectionName;
    section.appendChild(sectionHeading);
    
    const menuCards = document.createElement('div');
    menuCards.classList.add('menu-cards');

    for (let dish of dishes) {
        menuCards.appendChild(createDish(dish.name, dish.description, dish.image));
    }
    section.appendChild(menuCards);

    return section;
}

function createDish(name, description, imageFilename) {
    const card = document.createElement('div');
    card.classList.add('menu-card');
    
    const dishName = document.createElement('h4');
    dishName.classList.add('dish-name');
    dishName.textContent = name;
    card.appendChild(dishName);

    const dishDescription = document.createElement('p');
    dishDescription.classList.add('dish-text');
    dishDescription.textContent = description;
    card.appendChild(dishDescription);

    // use dynamic import for the image
    import(`./images/${imageFilename}`)
        .then((imageModule) => {
            const dishImage = new Image();
            dishImage.classList.add('dish-image');
            dishImage.src = imageModule.default;
            dishImage.alt = name;
            card.appendChild(dishImage);
        });

    return card;
}