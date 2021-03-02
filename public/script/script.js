let info=["nome", "email", "mensagem"];
let dados = "dados";
function setLocalStorage(dados, info){
    localStorage.setItem(dados, JSON.stringify(info))
}
setLocalStorage(dados, info)
function getLocalStorage(dados){      
    return JSON.parse(localStorage.getItem(dados))
}
console.log(getLocalStorage(dados))

const numberOfLetters = document.querySelector('textarea');
const counterIntarface = document.querySelector('span');
const limit= 200;
numberOfLetters.addEventListener("keyup",(e)=>{     
    console.log(numberOfLetters.value) 
    counterIntarface.innerText=numberOfLetters.value.length==0?limit:limit - numberOfLetters.value.length;    
})
