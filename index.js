const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const pw1El = document.getElementById('pw1');
const pw2El = document.getElementById('pw2');
document.getElementById('generate-btn').addEventListener('click', generatePasswords);

function generatePasswords() {
	pw1El.value = genRandomPass(15,true);
	pw2El.value = genRandomPass(15,true);
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