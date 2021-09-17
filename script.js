//PASO1: REALIZO LA CREACION DE DOS COMANDOS OPTION A TRAVÉS DE DOS ARREGLOS CON LA FUNCION APPENCHILD (MONEDAS),
//asigno variables obteniendolos del ids correspondientes
let div1 = document.querySelector('#moneda1');
let div2 = document.querySelector('#moneda2');

//Se crea dos objetos DocumentFragment vacio, para que pueda insertarse nodos en el (tipos de monedas).
let fragmento1 = document.createDocumentFragment();
let fragmento2 = document.createDocumentFragment();

//Se declara los arreglos con sus nodos, para las dos listas desplegables
let divisa1 = ['Moneda Uno','(USD)Dolar','(MXN)Peso_Mexicano','(COP)Peso_Colombiano','(UE)Euro','(GBP)Libra_Esterlina'];
let divisa2 = ['Moneda Dos','(USD)Dolar','(MXN)Peso_Mexicano','(COP)Peso_Colombiano','(UE)Euro','(GBP)Libra_Esterlina'];

//Se crea dos arreglos,y por cada nodo(moneda), se hace una funcion. Que es crear un option, con el texto del nodo(moneda)
//Luego se va agregando al fragmento
divisa1.forEach(function(divisauno){
    let option1 = document.createElement('option');
    option1.textContent = divisauno;
    fragmento1.appendChild(option1); })
divisa2.forEach(function(divisados){
    let opcion2 = document.createElement('option');
    opcion2.textContent = divisados;
    fragmento2.appendChild(opcion2);})

//Se relaciona la funcion appendChild con el html a traves de las variable div2 y div1.
div1.appendChild(fragmento1);
div2.appendChild(fragmento2);

let form=document.querySelector("#formulario")
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
}

//PASO2: SE REALIZA 
 //asigno variables obteniendolos del ids correspondientes
let total = document.querySelector('#total');
let factor=0;
let factorDual=0;

function seleccionar(){   
    let select = div1.options[div1.selectedIndex];   
    console.log(select);  
     switch(select.value){
        case "(USD)Dolar":
            factor=1; 
        break; 
        case "(MXN)Peso_Mexicano":
            factor=0.050;
        break;
        case "(COP)Peso_Colombiano":
            factor=0.00026;
        break;    
        case "(UE)Euro":
            factor=1.18;
        break;
        case "(GBP)Libra_Esterlina":
            factor=1.38;
        break;
        }
       ;
    console.log(factor);
    }
    function seleccionar2(){      
        let selectedOption2 = div2.options[div2.selectedIndex];
        console.log(selectedOption2);  
         switch(selectedOption2.value){
            case "(USD)Dolar":
                factorDual=1; 
            break; 
            case "(MXN)Peso_Mexicano":
                factorDual=0.050;
            break;
            case "(COP)Peso_Colombiano":
                factorDual=0.000261;
            break;    
            case "(UE)Euro":
                factorDual=1.18;
            break;
            case "(GBP)Libra_Esterlina":
                factorDual=1.38;
            break;
            };
        }
        function calculo(){  
        let montoValor = document.getElementById("valor").value;
         total=(factor/factorDual)*montoValor;
         document.getElementById('resultado').innerHTML=total;
    }
div1.addEventListener('change',
  seleccionar);
div2.addEventListener('change',
  seleccionar2);
total.addEventListener('click', calculo);

 
           


