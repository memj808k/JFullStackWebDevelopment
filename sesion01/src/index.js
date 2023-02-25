// operadores
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
// operaciones
const sum = document.querySelector('#sum-button')
const diferencia = document.querySelector('#diff-button')
// resultado
const resultNode = document.querySelector('#resultado')

sum.addEventListener('click', function () {
    // transformamos a entero el contenido de cada input
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
    // operación
    const result = n1Int + n2Int
    console.log(result);
    // creamos nodo <span> y lo combinamos con el resultado
    const textNode = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textNode)

    // eliminamos resultado previo
    if(resultNode.childNodes.length>3){
        resultNode.removeChild(resultNode.childNodes[3])
    }

    resultNode.appendChild(spanElement)
})
diferencia.addEventListener('click', function () {
    // transformamos a entero el contenido de cada input
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
    // operación
    const result = n1Int - n2Int
    console.log(result);
    // creamos nodo <span> y lo combinamos con el resultado
    const textNode = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textNode)

    // eliminamos resultado previo
    if(resultNode.childNodes.length>3){
        resultNode.removeChild(resultNode.childNodes[3])
    }

    
    resultNode.appendChild(spanElement)
})