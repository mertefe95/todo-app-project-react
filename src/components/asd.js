const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links-and-icons')[0]

window.toggleButton.addEventListener('click', () => {
    window.navbarLinks.classList.toggle('active')
})