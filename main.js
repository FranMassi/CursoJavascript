//Variables de HTML
let promedioForm = document.getElementById("promedio-form");
let alumnos = [];

//Llamo a la función para crear el formulario y Creo el objeto alumno
promedioForm.addEventListener("submit", cargarFomulario);

function cargarFomulario(e) {
  e.preventDefault();

  const form = new FormData(promedioForm);
  const nombreA = form.get("nombre");
  const notaUno = Number(form.get("nota-1"));
  const notaDos = Number(form.get("nota-2"));
  const notaTres = Number(form.get("nota-3"));
  const notaFinal = (notaUno + notaDos + notaTres) / 3;

  const promedioFinal = notaFinal.toFixed(2);

  // Creo un objeto literal con cada tarea
  const alumno = {
    nombre: nombreA,
    nota1: notaUno,
    nota2: notaDos,
    nota3: notaTres,
    notaFinal: promedioFinal
  };

  crearAlumno(alumno);
};

// Imprimo el objeto alumno en el documento
function crearAlumno(alumno) {
  const alumnList = document.getElementById("alumn-list");
  const div = document.createElement("div");
  alumnos.push(alumno);

  div.innerHTML += `
      <div class="card text-center mb-4">
          <div class="card-body">
              <strong>Nombre</strong>: ${alumno.nombre} -
              <strong>Nota 1</strong>: ${alumno.nota1}
              <strong>Nota 2</strong>: ${alumno.nota2}
              <strong>Nota 3</strong>: ${alumno.nota3}
              <strong>Promedio Final</strong>: ${alumno.notaFinal}
              <button href="#" class="btn btn-danger" id="${alumno.nombre}" name="delete" value="${alumno.nombre}">Delete</button>
          </div>
      </div>
  `;

  alumnList.appendChild(div);

  //Vaciamos el formulario con el método reset()
  promedioForm.reset();

   //Guardamos los alumnos en el localStorage
   guardarAlumnosStorage(alumnos);

  //Llamamos a la función de eliminar alumno
  alumnList.addEventListener("click", (e) => {
    eliminarAlumno(e.target.value);
  });
}

function eliminarAlumno(eliminar) {
  alumnos.forEach((alumno, index) => {
    if (alumno.nombre === eliminar) {
      alumnos.splice(index, 1);
    }
  });

  mostrarAlumnos(alumnos);
  guardarAlumnosStorage(alumnos)
}

//Guardar y recuperar alumnos del Storage
const guardarAlumnosStorage = (alumnos) => {
  localStorage.setItem("Alumnos", JSON.stringify(alumnos));
};

function recuperarAlumnosStorage () {
  const alumnosStorage = JSON.parse(localStorage.getItem("Alumnos"));
  return alumnosStorage;
}

//Actualizar lista de alumnos impresa en el HTML
function mostrarAlumnos(alumnos) {
  const alumnList = document.getElementById("alumn-list");
  const div = document.createElement("div");

  // Limpiamos el contenedor de las tareas
  alumnList.innerHTML = "";

  alumnos.forEach(alumno => {
    div.innerHTML += `
      <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${alumno.nombre} -
            <strong>Nota 1</strong>: ${alumno.nota1}
            <strong>Nota 2</strong>: ${alumno.nota2}
            <strong>Nota 3</strong>: ${alumno.nota3}
            <strong>Nota 3</strong>: ${alumno.notaFinal}
            <button href="#" class="btn btn-danger" id="${alumno.nombre}" name="delete" value="${alumno.nombre}">Delete</button>
        </div>
    </div>
  `;

    alumnList.appendChild(div);
  });

  //Llamamos a la función de eliminar alumno
  alumnList.addEventListener("click", (e) => {
    eliminarAlumno(e.target.value);
  });
}

//Comprobar si existen alumnos guardados en el storage
document.addEventListener("DOMContentLoaded", verStorage);

function verStorage() {
  if (localStorage.getItem("Alumnos")) {
    alumnos = recuperarAlumnosStorage();
    mostrarAlumnos(alumnos);
  }
}