//un ciclo para agregar las notas
let nota1, nota2, nota3;
let dato1, dato2, dato3, media;

function sacarPromedio (valor1, valor2, valor3) {
    let division = 3;
    let promedioFinal = parseFloat(((valor1 + valor2 + valor3) / division));

    if (promedioFinal >= 6){
        alert("El promedio final es " + promedioFinal + ". El alumno aprobó la materia.");
    } else {alert("El promedio final es " + promedioFinal + ". El alumno no aprobó la materia.")};
}

for (let i = 0; i < 3; i++) {
    if (i=1){
        dato1 = prompt("Resultado del primer examen:");
    } 
    if (i=2) {
        dato2 = prompt("Resultado del segundo examen:");
    }
    if (i=3) {
        dato3 = prompt("Resultado del tercer examen:");
    }
}

nota1 = parseInt(dato1);
nota2 = parseInt(dato2);
nota3 = parseInt(dato1);

sacarPromedio (nota1, nota2, nota3);