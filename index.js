const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const pw1El = document.getElementById('pw1');
const pw2El = document.getElementById('pw2');
const allowSpecEl = document.getElementById('allow-special');
const numEl = document.getElementById('num-chars');
const noteEl = document.getElementById('notification');
document.getElementById('generate-btn').addEventListener('click', generatePasswords);
pw1El.addEventListener('click', copyMe);
pw2El.addEventListener('click', copyMe);

function generatePasswords() {
    let num = numEl.value;
    if(Number.isNaN(num) || num <= 0 || num > 32) {
        numEl.value = 15;
        num = 15;
    }
    pw1El.value = genRandomPass(num,allowSpecEl.checked);
    pw2El.value = genRandomPass(num,allowSpecEl.checked);
    noteEl.textContent = "Passwords generated!";
}


function genRandomPass(len,includeSpecial) {
    let rstr = '';
    for(let i = 0; i < len; i++) {
        if(includeSpecial) {
            rstr += characters[Math.floor(Math.random()*characters.length)];
        } else {
            rstr += characters[Math.floor(Math.random()*62)]; // A-Z, a-z, 0-9
        }
    }
    return rstr;
}


function copyMe(evt) {
    const ctarget = evt.target;
    console.log(evt.target.value);
    ctarget.select();
    ctarget.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ctarget.value);
    noteEl.textContent = "Password copied!";
}