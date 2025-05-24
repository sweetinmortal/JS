// Generar tres notas aleatorias entre 0 y 20
let parcial1 = 11;
let parcial2 = 17;
let proyectoFinal = 14;

// Calcular la nota final con los pesos respectivos
let notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (proyectoFinal * 0.4);

// Mostrar resultados en consola
console.log("Parcial 1:", parcial1);
console.log("Parcial 2:", parcial2);
console.log("Proyecto Final:", proyectoFinal);
console.log("Nota Final:", notaFinal.toFixed(2));

// Evaluar la nota final
if (notaFinal >= 14) {
    console.log("Aprobado directamente");
} else if (notaFinal >= 10) {
    console.log("Va a recuperación");
} else {
    console.log("Pierde la materia");
}
