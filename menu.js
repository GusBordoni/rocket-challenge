/* const menuButton = document.getElementsByClassName('menuButton')[0]; */
const menuButton = document.getElementsByClassName('menuContainer')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const searchField = document.getElementById('search-field');
const searchButton = document.getElementById('searchButton');
const clearIcon = document.getElementsByClassName('clear-icon')[0];

searchField.addEventListener('keyup', () => {
    if(searchField.value && clearIcon.style.visibility != 'visible') {
        clearIcon.style.visibility = 'visible';
    } else if(!searchField.value) {
        clearIcon.style.visibility = 'hidden';
    }
});

clearIcon.addEventListener('click', () => {
    searchField.value = '';
    clearIcon.style.visibility = 'hidden';
    searchField.focus();
});


menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    navbarLinks.classList.toggle('menuDisplay');
});

searchButton.addEventListener('click', () => {
    searchField.classList.toggle('display');
});