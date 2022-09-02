/* <p>Click the button below to get a restaurant suggestion!</p>
<button class= "resBtn" id="restaraunts">Find a restaurant!</button>
<p id="suggestion"></p> */

let resOptions = ['Black Sheep Cafe', 'Communal', 'Gurus Cafe', 'Station 22', 'Pho Plus', 'Good Move Cafe','Don Joaquin','180 Tacos']

const resBtn = document.querySelector('#restaurants')
const result = document.querySelector("#suggestion")

const selector = () => {
    const random = Math.floor(Math.random() * resOptions.length)
    result.textContent = `I suggest you go to ${resOptions[random]}.`
}

resBtn.addEventListener('click', selector)