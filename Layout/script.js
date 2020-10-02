
var countTiara = 0;
var countBiju = 0;

var currentAmountTiara = "";
var currentAmountBiju = "";

function addAmountTiara(){
    countTiara++;
    currentAmountTiara = countTiara.toString()
    document.getElementById("product1").value = currentAmountTiara;
    
}
function subAmountTiara(){
    countTiara--;
    currentAmountTiara = countTiara.toString()
    if(countTiara>=0){
    document.getElementById("product1").value = currentAmountTiara;
    }else{
    alert("A quantidade não pode ser menor que zero!")
    }
}

function addAmountBiju(){
    countBiju++;
    currentAmountBiju = countBiju.toString()
    document.getElementById("product2").value = currentAmountBiju;
}
function subAmountBiju(){
    countBiju--;
    currentAmountBiju = countBiju.toString()
    if(countBiju>=0){
    document.getElementById("product2").value = currentAmountBiju;
    }else{
    alert("A quantidade não pode ser menor que zero!")
    }
}

function calcFrete(){
    console.log(document.getElementById("inputCepId").value);
    var cepValue = document.getElementById("inputCepId").value;
    return cepValue;
}

document.querySelector("form")
.addEventListener("submit", e => {
    console.log("enviar o formulário")

    // para evitar o envio do formulário.
    e.preventDefault();
});
