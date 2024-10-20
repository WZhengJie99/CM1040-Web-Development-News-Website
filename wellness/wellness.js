/*
Everything included inside the func below due to page reload everytime a button is being clicked.
*Zheng Jie shakes both hands in the sky frustratedly after trying several times and finding out the solution is 1 line of code and says "why god why"*
func info obtained from https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
*/
document.addEventListener("DOMContentLoaded", function () {
    //Subscribe button
    const form = document.querySelector('.newsletter-form');
    const emailInput = form.querySelector('#email-box');
    const subscribeButton = form.querySelector('#subscribe');

    //Button click
    subscribeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value;

        const messageTemplate = document.querySelector('#message-template').innerHTML;
        const message = Mustache.render(messageTemplate, { email });
        alert(message);
    });

    //Search button
    const searchButton = document.querySelector('#search-but');
    const searchInput = document.querySelector('#search-box');

    searchButton.addEventListener('click', () => {
        const searchValue = searchInput.value.trim().toLowerCase();

        //Make it look through the items https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
        const navLinks = document.querySelectorAll('.nav-link');
        for (let i = 0; i < navLinks.length; i++) {
            const navLink = navLinks[i];
            const navText = navLink.textContent.trim().toLowerCase();
            if (navText.includes(searchValue)) {
                //Take user to the webpage if there is a match
                window.location.href = navLink.href;
                return;
            }
        }
        //Message for negative result
        alert(`Sorry, we are unable to find any results for "${searchValue}".`);
    });
});