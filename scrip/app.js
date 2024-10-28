const primerDIV= document.querySelector("#titulo")
const craLabel = document.createElement("LABEL")
let creaInput=document.createElement("INPUT")
const creaButton=document.createElement("BUTTON")
const crearTexto= document.createElement("P")
crearTexto.classList.add("textoParrafo")
crearTexto.style.color="white"
creaButton.classList.add("mybtn")
creaButton.textContent="click aqui"
craLabel.setAttribute("id", "mylabel")
creaInput.classList.add("myInput")
creaInput.setAttribute("type","number")

craLabel.textContent="ingresa tu numero"
craLabel.style.color="white"
primerDIV.appendChild(craLabel)
primerDIV.appendChild(creaInput)
primerDIV.appendChild(creaButton)
primerDIV.appendChild(crearTexto)
const obtenetInput= creaInput

 
creaInput.addEventListener("focus",elFocus)
creaButton.addEventListener("click",numeroPPar)

function  numeroPPar(){

  
   if( obtenetInput.value%2 ===0){
      crearTexto.textContent=`El ${obtenetInput.value}  es par`
      
   }
   
   else{
       crearTexto.textContent=`El ${obtenetInput.value}  es impar`
   }

}
function elFocus(e){
 e.target.value=""
 crearTexto.textContent=""
 if(e.target.value=== ""){
   crearTexto.textContent="ingresa un numero porfavor"
 }
}