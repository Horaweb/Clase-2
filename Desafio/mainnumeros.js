let numUno = prompt ("Ingrese un numero")
let numDos = prompt ("Ingrese otro numero")
let numTres = prompt ("Ingrese un tercer numero")


numUno = parseFloat(numUno)
numDos = parseFloat(numDos)
numTres = parseFloat(numTres)

if(numUno > numDos && numUno > numTres){
    alert("El mayor de los tres números es:" + numUno)
}

if(numDos > numUno && numDos > numTres){
    alert("El mayor de los tres números es:" + numDos)
}


else{
    alert ("El mayor es: " + numTres)
}