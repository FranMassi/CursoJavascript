//Pedimos las notas que se promediara
function obtenerNotas() {
    let nota1, nota2, nota3;


    for (let index = 0; index < 3; index++) {

//Primera Nota
        if(index = 1) {
            nota1 = prompt("Resultado del primer examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)")
            if (nota1 === null) {
                alert("Ha cancelado la operación");
                if (confirm("¿Quiere reiniciar el programa?")){
                        obtenerNotas();
                    } else {die(obtenerNotas)}; ;        
                } else if ((isNaN(nota1) || nota1 == "" || nota1 > 10 || nota1 < 0)) {
                do {
                    alert ("El valor ingresado no es un dato valido.");
                    nota1 = prompt("Resultado del primer examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)");
                    if (nota1 === null) {
                        alert("Ha cancelado la operación");
                        if (confirm("¿Quiere reiniciar el programa?")){
                                obtenerNotas();
                            } else {die(obtenerNotas)}; 
                    }
                } while ((isNaN(nota1) || nota1 == "" || nota1 > 10 || nota1 < 0));
            }
        }

//Segunda Nota
        if(index = 2) {
            nota2 = prompt("Resultado del segundo examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)")
            if (nota2 === null) {
                alert("Ha cancelado la operación");
                if (confirm("¿Quiere reiniciar el programa?")){
                        obtenerNotas();
                    } else {die(obtenerNotas)}; ;        
            } else if ((isNaN(nota2) || nota2 == "" || nota2 > 10 || nota2 < 0)) {
                do {
                    alert ("El valor ingresado no es un dato valido.");
                    nota2 = prompt("Resultado del segundo examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)");
                    if (nota2 === null) {
                        alert("Ha cancelado la operación");
                        if (confirm("¿Quiere reiniciar el programa?")){
                                obtenerNotas();
                            } else {die(obtenerNotas)}; 
                    }
                } while ((isNaN(nota2) || nota2 == "" || nota2 > 10 || nota2 < 0));
            }
        }

//Terecera nota
        if(index = 3) {
            nota3 = prompt("Resultado del tercer examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)")
            if (nota3 === null) {
                alert("Ha cancelado la operación");
                if (confirm("¿Quiere reiniciar el programa?")){
                        obtenerNotas();
                    } else {die(obtenerNotas)}; ;        
                } else if ((isNaN(nota3) || nota3 == "" || nota3 > 10 || nota3 < 0)) {
                do {
                    alert ("El valor ingresado no es un dato valido.");
                    nota3 = prompt("Resultado del tercer examen. Ingrese un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)");
                    if (nota3 === null) {
                        alert("Ha cancelado la operación");
                        if (confirm("¿Quiere reiniciar el programa?")){
                                obtenerNotas();
                            } else {die(obtenerNotas)}; 
                    }
                } while ((isNaN(nota3) || nota3 == "" || nota3 > 10 || nota3 < 0));
            }
        }
    }

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    sacarPromedio(nota1, nota2, nota3);
}

//Sacamos el promedio
function sacarPromedio (valor1, valor2, valor3) {
    let division = 3;
    let promedioFinal = (valor1 + valor2 + valor3) / division;
    promedioFinal = Number(promedioFinal.toFixed(2));

    aprobarAlumno(promedioFinal);
};


//Vemos si el alumno aprobo
function aprobarAlumno (promedio) {
    let calificaciónMinima = 6;

    if (promedio >= calificaciónMinima){
        alert("El promedio final es " + promedio + ". El alumno aprobó la materia.");
    } else {alert("El promedio final es " + promedio + ". El alumno no aprobó la materia.")};
};

obtenerNotas();






















































// let notaMinimaParaAprobar = prompt("Ingrese la nota minima para que el alumno pueda aprobar la materia")

// function obtenerNotas() {
//     let nota1, nota2, nota3 = 0;

//     for (let index = 0; index < 3; index++) {
//         if(index = 1) {
//             nota1 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: \n (Precione 'Cancelar' para finalizar la operación)")
//             if (nota1 === null) {
//                 alert("Ha cancelado la operación");
//                 if (confirm("¿Quiere reiniciar el programa?")){
//                         obtenerNotas();
//                     } else {break}; ;        
//                 } else if ((isNaN(nota1) || nota1 == "" || nota1 > 10 || nota1 < 0)) {
//                 do {
//                     alert ("El valor ingresado no es un dato valido.");
//                     nota1 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: ");
//                     if (nota1 === null) {
//                         alert("Ha cancelado la operación");
//                         if (confirm("¿Quiere reiniciar el programa?")){
//                                 obtenerNotas();
//                             } else {die(obtenerNotas)}; 
//                     }
//                 } while ((isNaN(nota1) || nota1 == "" || nota1 > 10 || nota1 < 0));
//             }
//         }
//         if(index = 2) {
//             nota2 = prompt("Resultado del segundo examen. Ingrese un número del 1 al 10: ")
//             if (nota2 === null) {
//                 alert("Ha cancelado la operación");
//                 if (confirm("¿Quiere reiniciar el programa?")){
//                         obtenerNotas();
//                     } else {die(obtenerNotas)}; ;        
//             } else if ((isNaN(nota2) || nota2 == "" || nota2 > 10 || nota2 < 0)) {
//                 do {
//                     alert ("El valor ingresado no es un dato valido.");
//                     nota2 = prompt("Resultado del segundo examen. Ingrese un número del 1 al 10: ");
//                     if (nota2 === null) {
//                         alert("Ha cancelado la operación");
//                         if (confirm("¿Quiere reiniciar el programa?")){
//                                 obtenerNotas();
//                             } else {die(obtenerNotas)}; 
//                     }
//                 } while ((isNaN(nota2) || nota2 == "" || nota2 > 10 || nota2 < 0));
//             }
//         }

//         if(index = 3) {
//             nota3 = prompt("Resultado del tercer examen. Ingrese un número del 1 al 10: ")
//             if (nota3 === null) {
//                 alert("Ha cancelado la operación");
//                 if (confirm("¿Quiere reiniciar el programa?")){
//                         obtenerNotas();
//                     } else {die(obtenerNotas)}; ;        
//                 } else if ((isNaN(nota3) || nota3 == "" || nota3 > 10 || nota3 < 0)) {
//                 do {
//                     alert ("El valor ingresado no es un dato valido.");
//                     nota3 = prompt("Resultado del tercer examen. Ingrese un número del 1 al 10: ");
//                     if (nota3 === null) {
//                         alert("Ha cancelado la operación");
//                         if (confirm("¿Quiere reiniciar el programa?")){
//                                 obtenerNotas();
//                             } else {die(obtenerNotas)}; 
//                     }
//                 } while ((isNaN(nota3) || nota3 == "" || nota3 > 10 || nota3 < 0));
//             }
//         }
//     }

//     nota1 = Number(nota1);
//     nota2 = Number(nota2);
//     nota3 = Number(nota3);

//     sacarPromedio(nota1, nota2, nota3);
// }

// function sacarPromedio (valor1, valor2, valor3) {
//     let division = 3;
//     let promedioFinal = (valor1 + valor2 + valor3) / division;
//     promedioFinal = Number(promedioFinal.toFixed(2));

//     aprobarAlumno (promedioFinal);
// };

// function aprobarAlumno (promedio) {
//     if (promedio >= 6){
//         alert("El promedio final es " + promedio + ". El alumno aprobó la materia.");
//     } else {alert("El promedio final es " + promedio + ". El alumno no aprobó la materia.")};
// }

// obtenerNotas();








































// let notaMinimaParaAprobar = prompt("Ingrese la nota minima para que el alumno pueda aprobar la materia")

// function obtenerNotas() {
//     let nota1, nota2, nota3 = 0;

//     for (let index = 0; index < 3; index++) {
//         if(index = 1) {
//             nota1 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: ")
//             if (nota1 == null) {
//                 alert("Ha cancelado la operación");
//                 confirm("¿Quiere reiniciar el programa?")
//                 obtenerNotas();
//             }
//             while (isNaN(nota1) || nota1 == "" || nota1 > 10 || nota1 < 0) {
//                 alert ("El valor ingresado no es un dato valido.");
//                 nota1 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: ");
//             }
//         }
//         if(index = 2) {
//             nota2 = prompt("Resultado del segundo examen. Ingrese un número del 1 al 10: ")
//             while (isNaN(nota2) || nota2 == "" || nota2 > 10 || nota2 < 0 || nota2 == null) {
//                 alert ("El valor ingresado no es un dato valido.");
//                 nota2 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: ");
//             }
//         }
//         if(index = 3) {
//             nota3 = prompt("Resultado del tercer examen. Ingrese un número del 1 al 10: ")
//             while (isNaN(nota3) || nota3 == "" || nota3 > 10 || nota3 < 0 || nota3 == null) {
//                 alert ("El valor ingresado no es un dato valido.");
//                 nota3 = prompt("Resultado del primer examen. Ingrese un número del 1 al 10: ");
//             }
//         }
//     }

//     nota1 = Number(nota1);
//     nota2 = Number(nota2);
//     nota3 = Number(nota3);

//     sacarPromedio (nota1, nota2, nota3);
// }

// function sacarPromedio (valor1, valor2, valor3) {
//     let division = 3;
//     let promedioFinal = (valor1 + valor2 + valor3) / division;
//     promedioFinal = Number(promedioFinal.toFixed(2));

//     aprobarAlumno (promedioFinal);
// };

// function aprobarAlumno (promedio) {
//     if (promedio >= notaMinimaParaAprobar){
//         alert("El promedio final es " + promedio + ". El alumno aprobó la materia.");
//     } else {alert("El promedio final es " + promedio + ". El alumno no aprobó la materia.")};
// }

// obtenerNotas();