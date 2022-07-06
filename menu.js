/* const menuButton = document.getElementsByClassName('menuButton')[0]; */
const menuButton = document.getElementsByClassName('menuContainer')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const searchQuery = document.getElementById('searchField');
const searchButton = document.getElementById('searchButton');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    navbarLinks.classList.toggle('menuDisplay');
});

searchButton.addEventListener('click', () => {
    searchQuery.classList.toggle('display');
});