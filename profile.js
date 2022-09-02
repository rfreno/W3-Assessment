const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const colorAlert = () => {
    alert('My favorite color is red!')
}

const placeAlert = () => {
    alert('My favorite place is Manhattan!')
}

const ritualAlert = () => {
    alert('My favorite ritual is a morning and nightly cup of tea along with stretching and yoga.')
}

colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)