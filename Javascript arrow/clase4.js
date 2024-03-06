//Arreglos (arrow)



// let numeros =[10,1,27,45.5,111]
// let Nombres = ["Juan","Pedro","Maria","Julian"]

// //Cualquier tipo de dato
// const Varios =["Juan",true,10,null,3.0]

// console.log(numeros);
// console.log(Varios[0]);
// console.log(Varios.length);
// //Agrego una linea
// numeros.push("Colombia");
// console.log(numeros);

//quito el ultimo
// numeros.pop();
// console.log(numeros)

//poner al inicio
// numeros.unshift("Brasil");
// console.log(numeros);

//quitar al primero
// numeros.shift();
// console.log(numeros);



// //metodos para arreglos

// //1 .reduce

// let reducido = numeros.reduce((acumulador,valoractual) =>{
// return acumulador + valoractual;
// })

// console.log(reducido);

// //2 .filter

// let filtrado = numeros.filter(dato =>{
//     return dato > 11;
// })

// console.log(filtrado);

// let strings =["Colombia","Brasil","Comoros","Conecticut"]

// console.log(strings.filter(dato =>{
//     return dato.startsWith("Co")
// }));

// //3 .map()

// let mapeo = strings.map(pais =>{
//     return pais.concat(" Hola");
// })

// console.log(mapeo);

// let mapped = numeros.map(numero =>{
//     return Math.pow(numero,2);
// })

// console.log(mapped);


// //4 .forEach()

// numeros.forEach(numero =>{
//     console.log(numero);
// })






//Crear arreglos - - - usando funciones(tipo flecha)- - - Minimo 4 arreglos
//- - - Usar los metodos de arreglos que vimos en clase y mostrar sus resultados
//- - - Para cada arreglo que usted construyo, minimo un metodo (Distintos)- - -(callbackfn)
// arreglo global y aplicar los metodos, mostrar los resultados


const Arrow1 = [[1,2],[3,4],[5,6]]
let Arrow2 = ["Manzana", "banana", "Pera", "mango", "Naranja","Fresa"];
let Arrow3 = [1,2,3,4,5];
const Arrow5 = ["A", , "C", ,"E"];

console.log(Arrow1);
console.log(Arrow2);
console.log(Arrow3);
console.log(Arrow5)

// 1. reduce
let Primero = Arrow1.reduce((a,b) =>{
    return a.concat(b);
    })
    
    console.log(Primero);

//2. filter    
function Segundo(query) {
  return Arrow2.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(Segundo("n")); 
console.log(Segundo("a")); 

//3. Map

let Tercero = Arrow3.map(numero =>{
    return Math.sqrt(numero);
})

console.log(Tercero)

//4. From

let Cuarto = Array.from({ length: 6 }, (v, i) => i);
console.log(Cuarto)

//5. Keys


const Space = Object.keys(Arrow5);
const Rellen = [...Arrow5.keys()];
console.log(Space); 
console.log(Rellen); 