let cantidad: number = 3;
let arregloNombre: string[] = new Array(cantidad);
let arregloAnio: number[] = new Array(cantidad);
let arregloAltura: number[] = new Array(cantidad);

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

cargarArreglos(arregloNombre, arregloAnio, arregloAltura, cantidad);
escribirPorPantalla(arregloNombre, arregloAnio, arregloAltura, cantidad);

function comparar(
  anio: number[],
  altura: number[],
  i: number,
  j: number
): number {
  let comparacion: number;
  if (anio[i] === anio[j]) {
    if (altura[i] === altura[j]) {
      comparacion = 0;
    } else if (altura[i] < altura[j]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  } else if (anio[i] < anio[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function intercambiar(arreglo: number[], n: number, m: number) {
  let aux: number;
  aux = arreglo[n];
  arreglo[n] = arreglo[m];
  arreglo[m] = aux;
}

function burbuja(
  nombres: string[],
  anio: number[],
  altura: number[],
  cantidad: number
) {
  let i: number, j: number;
  for (i = 2; i <= cantidad; i++) {
    for (j = 0; j < cantidad - 1; j++) {
      if (comparar(anio, altura, j, j + 1) === 1) {
        intercambiar(nombres, j, j + 1);
        intercambiar(anio, j, j + 1);
        intercambiar(altura, j, j + 1);
      }
      escribirPorPantalla(arregloNombre, arregloAnio, arregloAltura, 3);
    }
  }
}

burbuja(arregloNombre, arregloAnio, arregloAltura, 3);
