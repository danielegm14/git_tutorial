let name = document.querySelector("name");
let surName = document.querySelector("surName");
let fiscalCod = document.querySelector("fiscalCod");
let button = document.querySelector("buttSaluta");
let salut = document.querySelector("saluti");
function saluta (){
    button.addEventListener ('click',()=>{
        salut.innerHTML = `Ciao ${name}`;
    });
};