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

function filtrar () {
    let filtrarPorNota = prompt("Selecciona la nota minima - del 0 al 10 - para aprpobar, para ver quienes aprobaron");
    let nadieAprobo = alumnos.some(el => el.notaFinal >= filtrarPorNota);
    let aprobaron = alumnos.filter(alumno => alumno.notaFinal >= filtrarPorNota);
    
    if (isNaN(filtrarPorNota) || filtrarPorNota == "" || filtrarPorNota > 10 || filtrarPorNota < 0 || filtrarPorNota == null) {
      alert(
        "La nota minima ingresada no es un dato valido. Ingreselo nuevamente."
      );
      filtrar()
    } else if (nadieAprobo === false){
      alert("Nadie aprobó");
    }
    else {
      aprobaron.forEach(aprobo => alert(aprobo.nombre + " aprobó con " + aprobo.notaFinal))
    }

    let repetir = confirm("Quíeres ingresar un nuevo alumno")
    if(repetir == true){
      crearAlumnos();
      filtrar();
    }
}


crearAlumnos();
crearAlumnos();
crearAlumnos();
filtrar();