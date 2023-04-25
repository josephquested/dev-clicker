// -- BIND EVENT BUTTONS -- //

let devLogo = document.getElementById('dev-logo')
let buyAutoClickerButton = document.getElementById('buy-autoclicker')
let counter = document.getElementById('counter')
let autoClickerCounter = document.getElementById('autoclicker-counter')

devLogo.onclick = devLogoClicked
buyAutoClickerButton.onclick = buyAutoClickerClicked

// -- CLICK STUFF -- //

let clicks = 0

function changeClicks(change) {
    popButtonEffect()
    clicks += change
    counter.textContent = `clicks: ${clicks}` 
}

// -- AUTOCLICKER STUFF -- //

let autoClickers = 0

function changeAutoClickers(change) {
    autoClickers += change
    autoClickerCounter.textContent = `autoclicker: ${autoClickers}` 
}

function addAutoClicker() {
    changeAutoClickers(1)
    setInterval(autoClickerInterval, 1000);
}

function autoClickerInterval () {
    changeClicks(1)
}

// -- ONCLICK FUNCTIONS -- //

function devLogoClicked() {
    changeClicks(1)
}

function buyAutoClickerClicked() {
    if (clicks >= 10) {
        changeClicks(-10)
        addAutoClicker()
        print("buying auto clicker!")
    } else {
        print("you don't have enough clicks!")
    }
}

// -- UTIL FUNCTIONS -- //

function popButtonEffect () {
    console.log("POP!")
    devLogo.classList.remove('unpop')
    devLogo.classList.add('pop')
    setTimeout(unpopEffectTimeout, 75);
}

function unpopEffectTimeout () {
    devLogo.classList.remove('pop')
    devLogo.classList.add('unpop')
}

function print(str) {
    document.getElementById('message').textContent = `message: ${str}`
    setTimeout(clearPrint, 3000);
}

function clearPrint() {
    document.getElementById('message').textContent = `message:`
}