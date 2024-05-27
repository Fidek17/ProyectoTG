
const inputNV = document.getElementById('nv');
const inputNL = document.getElementById('nl');
const selectElement = document.querySelector('.tipoGraph');
const inputsContainer = document.getElementById('inputsContainer');
const boton = document.getElementById('btnTrigger');
let verticesArray = [];

// Event listener para actualizar la cantidad de líneas y selects
inputNV.addEventListener('input', optionsCreateUpdate)
inputNL.addEventListener('input', optionsCreateUpdate)

function optionsCreateUpdate() {
        
    const numLineas = parseInt(inputNL.value);
    const numVertices = parseInt(inputNV.value); // Obtener el valor actualizado de numVertices
    
    // Limpiar el contenedor de inputs antes de agregar nuevos
    inputsContainer.innerHTML = '';
    
    for (let i = 1; i <= numLineas; i++) {
        // Crear contenedor de la fila
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row justify-content-around';
        rowDiv.style.marginTop = '1rem';
        
        // Crear columna para la etiqueta
        const colDiv = document.createElement('div');
        colDiv.className = 'col-3';
        
        // Crear etiqueta
        const label = document.createElement('div');
        label.className = 'form-label';
        label.textContent = `e${i}`;
        colDiv.appendChild(label);
        
        // Crear el primer elemento select
        const select1 = document.createElement('select');
        select1.className = 'col-3 form-select nodoNl salida';
        select1.style.width = '25%';
        select1.setAttribute('aria-label', 'Default select example');
        
        // Crear el segundo elemento select
        const select2 = document.createElement('select');
        select2.className = 'col-3 form-select nodoNl entrada';
        select2.style.width = '25%';
        select2.setAttribute('aria-label', 'Default select example');
        
        
        
        // Crear y añadir las opciones a ambos selects
        for (let j = 1; j <= numVertices; j++) {
            const option1 = document.createElement('option');
            option1.value = j;
            option1.textContent = j;
            select1.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = j;
            option2.textContent = j;
            select2.appendChild(option2);
        }
        
        // Añadir la columna y los selects al contenedor de la fila
        rowDiv.appendChild(colDiv);
        rowDiv.appendChild(select1);
        rowDiv.appendChild(select2);
        
        // Añadir la fila al contenedor principal
        inputsContainer.appendChild(rowDiv);
    }
}
function obtenerDatosInputs() {
    const inputs = document.getElementsByClassName('salida');   //--------------------- Sale 
    const inpute = document.getElementsByClassName('entrada');  //--------------------- Llega 
    const Sale = [];
    const Llega = [];
    for (let in1 of inputs) {
        Sale.push(parseInt(in1.value));
    }
    for (let in2 of inpute) {
        Llega.push(parseInt(in2.value));
    }

    console.log("entrada:", Llega);
    console.log("salida:", Sale);

    return { Sale, Llega };
}

/* ------------------------------- Bucles función -------------------------------*/ 
function bucles(Sale, Llega, e) {
    for (let i = 0; i < e; i++) {
        if (Sale[i] === Llega[i]) {
            console.log(`La línea ${i + 1} es un bucle en el nodo ${Sale[i]}`);
        }
    }
}
/* ------------------------------- -------------------------------*/ 

/* ------------------------------- VALIDACION -------------------------------*/

boton.addEventListener('click', function() {

    
    // Obtener el valor del input
    // const valorNV = inputNV.value;
    const valorNV = parseInt(inputNV.value);
    const valorNL = parseInt(inputNL.value);
    const valorSeleccionado = selectElement.value;
    
    if(isNaN(valorNV) || isNaN(valorNL)){
        alert('Por favor ingresa valores válidos en los campos de número de vértices y número de líneas.');        
    }
    else{
        console.log('Número de vértices:', valorNV);
        console.log('Número de líneas:', valorNL);
        console.log('El valor seleccionado es:', valorSeleccionado);
        const datos = obtenerDatosInputs();
        const Sale = datos.Sale;
        const Llega = datos.Llega;
        bucles(Sale, Llega, valorNL);
    }
/* 

for (let i = 0; i < valorNV; i++) {
    verticesArray.push(i);
}

d3.select('.nodes')
.selectAll('.circle')
// .data(graphNode_example)
.data(verticesArray)
.enter()
.append('div')
.classed('circle', true);
// .text(dta => dta);
*/
});



const graphNode_example =[
    {id:1, value:4},
    {id:2, value:2}
]




/* ------------------------------- MATRIZ DE ACCESIBILIDAD -------------------------------*/
function accesibilidad(XG, n) {
    let MG = new Array(n)
    let potencia = new Array(n)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            MG[i][j] = XG[i][j]; // Copiar el valor de XG en la posición correspondiente de MG
            potencia[i][j] = XG[i][j];
        }
    }

    for (let k = 2; k < n-2; k++) {
        potencia = potencia * XG
        MG = MG + potencia
    }

    console.log("La matriz de Accesibilidad es")
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (MG[i][j] == 0) {
                console.log("0")
            }else{
                console.log("+")
            }
        }        
    }

}