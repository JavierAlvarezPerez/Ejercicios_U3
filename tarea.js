//Ejer 1 some()
const numeros = [3, 7, 10, 18, 21];

function verificarSome(arreglo) {
  const mayorQue15 = arreglo.some(num => num > 15);
  const algunPar = arreglo.some(num => num % 2 === 0);

  console.log("¿Hay algún número mayor que 15?", mayorQue15);
  console.log("¿Hay algún número par?", algunPar);
}

verificarSome(numeros);



//Ejer 2 every()
const edades = [18, 22, 30, 25, 19];

function verificarEvery(arreglo) {
  const todosMayores = arreglo.every(edad => edad >= 18);
  const todosPares = arreglo.every(edad => edad % 2 === 0);

  console.log("¿Todos son mayores o iguales a 18?", todosMayores);
  console.log("¿Todos son pares?", todosPares);
}

verificarEvery(edades);



//Ejer3 fill()
let letras = ['a', 'b', 'c', 'd', 'e'];

function aplicarFill() {
  let copia1 = [...letras].fill('x', 0, 3);
  let copia2 = [...letras].fill('z', 2, 5); 

  console.log("Relleno con 'x' las tres primeras:", copia1);
  console.log("Relleno con 'z' desde la posición 2 hasta 4:", copia2);
}

aplicarFill();



//Ejer4 filter()
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
  ];
  
  function filtrarProductos(lista) {
    const caros = lista.filter(p => p.precio > 100);
    const nombreLargo = lista.filter(p => p.nombre.length > 5);
  
    console.log("Productos que cuestan más de 100:", caros);
    console.log("Productos con nombre de más de 5 letras:", nombreLargo);
  }
  
  filtrarProductos(productos);



  //Ejer5 find()
  const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
  ];
  
  function buscarAlumno(lista) {
    const mayor18 = lista.find(a => a.edad > 18);
    const buscarLuis = lista.find(a => a.nombre === 'Luis');
  
    console.log("Primer alumno mayor de 18:", mayor18);
    console.log("Alumno con nombre 'Luis':", buscarLuis);
  }
  
  buscarAlumno(alumnos);



  //Ejer6 findIndex()
  const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];

function buscarFruta(lista) {
  const indicePera = lista.findIndex(f => f === 'pera');
  const indiceLargo = lista.findIndex(f => f.length > 5);

  console.log("Índice de 'pera':", indicePera);
  console.log("Índice de la primera fruta con más de 5 letras:", indiceLargo);
}

buscarFruta(frutas);



//Ejer7 Set
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];

function trabajarConSet(arreglo) {
  const setNumeros = new Set(arreglo);
  const arregloSinDuplicados = [...setNumeros];

  console.log("Set sin duplicados:", setNumeros);
  console.log("Convertido a arreglo sin duplicados:", arregloSinDuplicados);

  setNumeros.add(3);
  console.log("¿El número 3 ya existe?", setNumeros.has(3));
}

trabajarConSet(numerosDuplicados);



//Ejer8 Practica
const personas = [
    { nombre: "Ana", edad: 17, ciudad: "Madrid" },
    { nombre: "Luis", edad: 25, ciudad: "México" },
    { nombre: "Carmen", edad: 30, ciudad: "Sevilla" },
    { nombre: "Pedro", edad: 20, ciudad: "Madrid" }
  ];
  
  function practicarArreglos(lista) {
    const mayores = lista.filter(p => p.edad > 18);
    const hayMadrid = lista.some(p => p.ciudad === "Madrid");
    const todosMayores = lista.every(p => p.edad >= 18);
    const primeraMexico = lista.find(p => p.ciudad === "México");
    const indiceAna = lista.findIndex(p => p.nombre === "Ana");
  
    console.log("Personas mayores de 18:", mayores);
    console.log("¿Hay alguien de Madrid?", hayMadrid);
    console.log("¿Todos son mayores de edad?", todosMayores);
    console.log("Primera persona de México:", primeraMexico);
    console.log("Posición de Ana:", indiceAna);
  }
  
  practicarArreglos(personas);
  



  
  

