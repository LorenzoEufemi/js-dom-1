// DATI

const imgLight = document.getElementById("light");
const btnCenter = document.getElementById("btn");
console.log(imgLight,btnCenter)
// ESECUZIONE

btnCenter.addEventListener("click",function() {
imgLight.src="./img/yellow_lamp.png"
btnCenter.innerHTML = "Spegni"

btnCenter.addEventListener("click",function() {
    imgLight.src="./img/white_lamp.png"
    btnCenter.innerHTML = "Accendi"
})
})




