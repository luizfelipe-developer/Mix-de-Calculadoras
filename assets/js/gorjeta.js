function calcGorjeta(event){
    event.preventDefault();
    console.log(event);

    let vlconta = document.getElementById('vlconta').value;
    let satisfacao = document.getElementById('satisfacao').value;
    let numpessoas = document.getElementById('numpessoas').value;
    
if(vlconta == "" | satisfacao < 0){
    alert("por favor, preencha os valores")
    return;
}


if(numpessoas == "" | numpessoas <= 1){
    numpessoas = 1;
    document.getElementById('txcada').style.display = "none"
}
else(
    document.getElementById('txcada').style.display = "block"
)

let total = (vlconta * satisfacao)/ numpessoas;
total = total.toFixed(2);

document.getElementById("totalgorjeta").innerHTML = total;

document.getElementById('gorjeta').style.display = "block";
}
document.getElementById('gorjeta').style.display= "none";
document.getElementById('txcada').style.display = "none";

document.getElementById('form').addEventListener('submit' , calcGorjeta)