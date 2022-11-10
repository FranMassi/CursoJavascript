// Objetos: Alumnos
class Alumno {
  constructor(nombre, nota1, nota2, nota3, notaFinal) {
    this.nombre = nombre;
    this.nota1 = Number(nota1);
    this.nota2 = Number(nota2);
    this.nota3 = Number(nota3);
    this.notaFinal = notaFinal;
  }

  recojerNotaFinal() {
    let division = 3;
    let promedioFinal = (this.nota1 + this.nota2 + this.nota3) / division;
    this.notaFinal = Number(promedioFinal.toFixed(2));

    return this.notaFinal;
  }
}

const alumnos = [];

function crearAlumnos() {
  alumnos.push(
    new Alumno(
      (nombre = prompt("Inserte un nombre")),
      (nota1 = prompt("Inserte la primer nota, un número del 0 al 10")),
      (nota2 = prompt("Inserte la segunda nota, un número del 0 al 10")),
      (nota3 = prompt("Inserte la tercer nota, un número del 0 al 10"))
    )
  );

  comprobarNombre(nombre);
  comprobarNota(nota1);
  comprobarNota(nota2);
  comprobarNota(nota3);

  for (const alumno of alumnos) {
    alumno.recojerNotaFinal();
  }
}

function comprobarNombre(valor) {
  if (!isNaN(valor)) {
    alert(
      "Usted ingreso un número en ves de un nombre. Por favor, ingrese el nombre correcto."
    );
    alumnos.pop();
    crearAlumnos();
  }
}

function comprobarNota(valor) {
  if (isNaN(valor) || valor == "" || valor > 10 || valor < 0 || valor == null) {
    alert(
      "Una de las notas ingresadas no es un dato valido. Intentelo nuevamente."
    );
    alumnos.pop();
    crearAlumnos();
  }
}

crearAlumnos();
crearAlumnos();
crearAlumnos();

console.log (alumnos);
let aprobaron = alumnos.filter((alumno) => alumno.notaFinal >= 6);
console.log (aprobaron);



if (aprobaron.length === 0) {
  alert("Nadie aprobó");
} else {
  for (const aprobados of aprobaron) {
    alert("Aprobó: " + aprobados.nombre + " con " + aprobados.notaFinal);
  }
}