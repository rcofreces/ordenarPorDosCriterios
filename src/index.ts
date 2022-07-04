let dimensionArreglo: number = Number(prompt("Ingrese el tamaño de los arreglos");
let arregloNombre: string[] = new Array(dimensionArreglo);
let arregloAnio: number[] = new Array(dimensionArreglo);
let arregloAltura: number[] = new Array(dimensionArreglo);

function cargarArreglos(
  nombres: string[],
  anio: number[],
  altura: number[],
  cantidad: number
) {
  let i: number = 0;
  for (i = 0; i < cantidad; i++) {
    nombres[i] = String(prompt(`Ingrese un nombre`));
    anio[i] = Number(prompt(`Ingrese su edad`));
    altura[i] = Number(prompt(`Ingrese su altura en cm`));
  }
}

function escribirPorPantalla(
  nombres: string[],
  anio: number[],
  altura: number[],
  cantidad: number
) {
  let i: number = 0;
  for (i = 0; i < cantidad; i++) {
    console.log(
      `${nombres[i]} tiene ${anio[i]} años y mide ${altura[i]} centímetros`
    );
  }
}

function compararValores(valorUno: number, valorDos: number): number {
  if (valorUno > valorDos) {
  return 1;
  } else if (valorUno < valorDos) {
  return -1;
  } else {
  return 0;
  }
}

function intercambiarDatos(nombres: string[], anio: number[], altura: number[], posicion1: number, posicion2: number) {
  let nombresAux: string;
  let anioAux, alturaAux: number;
  nombresAux = nombres[posicion1];
  anioAux = anio[posicion1];
  alturaAux = altura[posicion1];
  nombres[posicion1] = nombres[posicion2];
  anio[posicion1] = anio[posicion2];
  altura[posicion1] = altura[posicion2];
  nombres[posicion2] = nombresAux;
  anio[posicion2] = anioAux;
  altura[posicion2] = alturaAux;
}

function burbuja(nombres: string[], anio: number[], altura: number[], cantidad: number) {
  let i, j: number;
  let resultadoCompararAnio: number = 0;
  let resultadoCompararAltura: number = 0;
  for (i = 2; i < cantidad; i++) {
    for (j = 0; j < (cantidad - 1); j++) {
      resultadoCompararAnio = compararValores(anio[j], anio[j + 1]);
      if (resultadoCompararAnio === 1) {
        intercambiarDatos(nombres, anio, altura, j, j + 1);
      } else {
        if (resultadoCompararAnio === 0) {
          resultadoCompararAltura = compararValores(
            altura[j],
            altura[j + 1]
          );
          if (resultadoCompararAltura === 1) {
            intercambiarDatos(nombres, anio, altura, j, j + 1);
          }
        }
      }
    }
  }
}

cargarArreglos(arregloNombre, arregloAnio, arregloAltura, dimensionArreglo);
escribirPorPantalla(arregloNombre, arregloAnio, arregloAltura, dimensionArreglo);
burbuja(arregloNombre, arregloAnio, arregloAltura, dimensionArreglo);
console.log("ORDENADO");
escribirPorPantalla(arregloNombre, arregloAnio, arregloAltura, dimensionArreglo);