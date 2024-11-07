// DATI

const imgLight = document.getElementById("light");
const btnCenter = document.getElementById("btn");
console.log(imgLight, btnCenter);

// ESECUZIONE

btnCenter.addEventListener("click", function () {
    if (btnCenter.innerHTML === "Accendi") {
        imgLight.src = "./img/yellow_lamp.png"
        btnCenter.innerHTML = "Spegni"
    } else if (btnCenter.innerHTML === "Spegni") {
        imgLight.src = "./img/white_lamp.png"
        btnCenter.innerHTML = "Accendi"
    }
})




