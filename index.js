const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let passwordOneEl = document.getElementById("password-display-1").style.visibility = "hidden"
let passwordTwoEl = document.getElementById("password-display-2").style.visibility = "hidden"
let passwordThreeEl = document.getElementById("password-display-3")
let passwordFourEl = document.getElementById("password-display-4")

function generatePasswordOne() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)

        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
    }

    passwordOneEl.textContent = password1
    passwordTwoEl.textContent = password2

}

function generatePasswordTwo() {
    let password3 = ""
    let password4 = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex3 = Math.floor(Math.random() * characters.length)
        let randomIndex4 = Math.floor(Math.random() * characters.length)

        password3 += characters[randomIndex3]
        password4 += characters[randomIndex4]
    }

    passwordThreeEl.textContent = password3
    passwordFourEl.textContent = password4

}