const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active')
    overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
    overlay.classList.remove('active')
})
