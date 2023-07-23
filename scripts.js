let firstElement=document.getElementById("firstElements")
let secondElement=document.getElementById("secondElements")
let outputElement=document.getElementById("outputElements")
let buttonElement=document.getElementById("buttonElement")



function additon(){
    let firstValue=firstElement.value
    let secondValue=secondElement.value;
    outputElement.textContent=parseInt(firstValue)+parseInt(secondValue)
}