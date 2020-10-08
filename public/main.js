const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarContainer = document.getElementsByClassName('navbar-container')[0]

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('active')
})