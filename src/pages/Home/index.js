import './style.css';
import BotWImage from './BotW_Fried_Wild_Greens_Icon.png';

export function createHomeTab(mainContent) {

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');

    // Featured Dish Section
    const featuredDishSection = document.createElement('section');
    featuredDishSection.classList.add('featured_dish');

    const dishHeading = document.createElement('h2');
    dishHeading.textContent = "Featured Dish";

    const dishImage = new Image();
    dishImage.src = BotWImage;
    dishImage.alt = "Featured Dish";

    const dishDescription = document.createElement('p');
    dishDescription.textContent = mainContent.dishDescription;

    featuredDishSection.appendChild(dishHeading);
    featuredDishSection.appendChild(dishImage);
    featuredDishSection.appendChild(dishDescription);

    // Visit Us Section
    const visitUsSection = document.createElement('section');
    visitUsSection.classList.add('visit_us');

    const visitHeading = document.createElement('h2');
    visitHeading.textContent = 'Visit Us';

    const visitDescription = document.createElement('p');
    visitDescription.textContent = `We are located in the heart of Hyrule at Kakariko Village. Open daily from 5 PM to midnight. Join us for an unforgettable dining experience in a world where fantasy meets flavor.`;

    const heading = document.createElement('h2');
    heading.textContent = mainContent.mainText;

    visitUsSection.appendChild(visitHeading);
    visitUsSection.appendChild(visitDescription);

    // Append sections to the home div
    //homeDiv.appendChild(heading);
    homeDiv.appendChild(featuredDishSection);
    homeDiv.appendChild(visitUsSection);

    // Add more content...    
    return homeDiv;

}
