const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const numberChars = "0123456789".split("");
const symbolChars = "~`!@#$%^&*()_-+={[}],|:;<>.?/".split("");

let settings = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true
};



let passwordOneEl = document.getElementById("password-display-1");
let passwordTwoEl = document.getElementById("password-display-2");
let copyButton1 = document.getElementById("copy-button-1");
let copyButton2 = document.getElementById("copy-button-2");
const slider = document.getElementById("password-length");
let passwordLength = slider.value;

slider.addEventListener("input", function() {
    passwordLength = slider.value
    document.getElementById("length-value").textContent = passwordLength
});

function buildCharacterPool() {
  let pool = [];

  if (settings.uppercase) pool = pool.concat(uppercaseChars);
  if (settings.lowercase) pool = pool.concat(lowercaseChars);
  if (settings.numbers) pool = pool.concat(numberChars);
  if (settings.symbols) pool = pool.concat(symbolChars);

  return pool;
}



function generatePassword() {
    const pool = buildCharacterPool();
    if (pool.length === 0) {
        alert("Please select at least one character type for password generation.");
        return;
    }
    let password = ""
    //let password1 = ""
    //let password2 = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * pool.length)
        //let randomIndex1 = Math.floor(Math.random() * pool.length)
        //let randomIndex2 = Math.floor(Math.random() * pool.length)
    
        
        password += pool[randomIndex]
        //password1 += pool[randomIndex1]
        //password2 += pool[randomIndex2]
    }

    //passwordOneEl.textContent = password1;
    //passwordTwoEl.textContent = password2;
    return password;
};


document.getElementById("generate-btn").addEventListener("click", () => {
    passwordOneEl.textContent = generatePassword();
    passwordTwoEl.textContent = generatePassword();
});

document.getElementById("uppercase").addEventListener("change", e => {
  settings.uppercase = e.target.checked;
});

document.getElementById("lowercase").addEventListener("change", e => {
  settings.lowercase = e.target.checked;
});

document.getElementById("numbers").addEventListener("change", e => {
  settings.numbers = e.target.checked;
});

document.getElementById("symbols").addEventListener("change", e => {
  settings.symbols = e.target.checked;
});

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