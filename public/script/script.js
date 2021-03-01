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
