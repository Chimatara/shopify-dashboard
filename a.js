const closePlan = document.querySelector('.select-plan');
const closeMenu = document.querySelector('.close-menu');
const toggleOn = document.querySelectorAll('.toggle-on');
const plans = document.querySelectorAll('.plans');
const checks = document.querySelectorAll('.checks');
const info = document.querySelectorAll('.info')
const infoDetails = document.querySelectorAll('.info-details');
const images = document.querySelectorAll('.images');
const options = document.querySelectorAll('.options')

let currentActive = 0
// Close the select menu
closeMenu.addEventListener('click', () => {
    closePlan.style.visibility = 'hidden';
})

// Toggle to show visibility of each option
toggleOn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('toggle-active')
        plans.forEach(plan => {
            plan.classList.toggle('plans-active')
        })
    })
});

checks.forEach(check => {
    check.addEventListener('click', () => {
     infoDetails.forEach(info => {
        info.classList.add('info-details-active')
        selectOption();
        updateOption()
    })
     images.forEach(image => {
        image.classList.add('images-active');
     })
    })
})

function selectOption() {
    options.forEach(option => {
        option.classList.add('active')
    })
}

function updateOption() {
    options.forEach(option => {
       if(option.classList.contains('active')){
        option.classList.remove('active')
       }
    })
    options[currentActive].classList.add('active')
}