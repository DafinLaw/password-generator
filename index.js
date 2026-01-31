const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15


let passwordOneEl = document.getElementById("password-display-1")
let passwordTwoEl = document.getElementById("password-display-2")
let copyButton1 = document.getElementById("copy-button-1")
let copyButton2 = document.getElementById("copy-button-2")




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

copyButton1.addEventListener("click", async() => {
    try {
        await navigator.clipboard.writeText(passwordOneEl.textContent);
        copyButton1.style.scale = "1.1";
        setTimeout(() => {
            copyButton1.style.scale = "1.12";
        }, 2000);
    } catch (err) {
        console.error("Failed to copy password:", err);
    }
});

copyButton2.addEventListener("click", async() => {
    try {
        await navigator.clipboard.writeText(passwordTwoEl.textContent);
        copyButton2.style.scale = "1.1";
        setTimeout(() => {
            copyButton2.style.scale = "1.12";
        }, 2000);
    } catch (err) {
        console.error("Failed to copy password:", err);
    }
});