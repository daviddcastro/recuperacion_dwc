let dias = [
  { id: 1, nombre: "L" },
  { id: 2, nombre: "M" },
  { id: 3, nombre: "X" },
  { id: 4, nombre: "J" },
  { id: 5, nombre: "V" },
];

let tramos = [
  { id: 1, hora: "8:00-9:00", descripcion: "1ª Hora" },
  { id: 2, hora: "9:00-10:00", descripcion: "2ª Hora" },
  { id: 3, hora: "10:00-11:00", descripcion: "3ª Hora" },
  { id: 4, hora: "11:00-11:30", descripcion: "RECREO" },
  { id: 5, hora: "11:30-12:30", descripcion: "4ª Hora" },
  { id: 6, hora: "12:30-13:30", descripcion: "5ª Hora" },
  { id: 7, hora: "13:30-14:30", descripcion: "6ª Hora" },
];

let asignaturas = [
  { id: 1, nombre: "", grupo: "", aula: "", color: "white" },
  { id: 2, nombre: "Música", grupo: "1º ESO A", aula: "Aula 6", color: "blue" },
  {
    id: 3,
    nombre: "Entorno Desarrollo",
    grupo: "1ºDAW",
    aula: "Aula 9C",
    color: "magenta",
  },
  {
    id: 4,
    nombre: "Comput. y robótica",
    grupo: "1ºESO D",
    aula: "Aula 10A",
    color: "cyan",
  },
  {
    id: 5,
    nombre: "Comput. y robótica",
    grupo: "1ºESO B",
    aula: "Aula VII",
    color: "yellow",
  },
  {
    id: 6,
    nombre: "Despl. Aplic. Web",
    grupo: "2ºDAW",
    aula: "Aula 10B",
    color: "green",
  },
  {
    id: 7,
    nombre: "Guardia Mant.",
    grupo: "",
    aula: "Taller Informática",
    color: "SteelBlue",
  },
  {
    id: 8,
    nombre: "Música",
    grupo: "1º ESO B",
    aula: "Aula 7",
    color: "brown",
  },
  { id: 9, nombre: "RECREO", grupo: "", aula: "", color: "LightGrey" },
];

let horario = [
  {
    idTramo: 1,
    asignaturas: [
      { idDia: 1, idAsignatura: 2 },
      { idDia: 2, idAsignatura: 3 },
      { idDia: 3, idAsignatura: 3 },
      { idDia: 4, idAsignatura: 1 },
      { idDia: 5, idAsignatura: 7 },
    ],
  },
  {
    idTramo: 2,
    asignaturas: [
      { idDia: 1, idAsignatura: 7 },
      { idDia: 2, idAsignatura: 2 },
      { idDia: 3, idAsignatura: 3 },
      { idDia: 4, idAsignatura: 1 },
      { idDia: 5, idAsignatura: 4 },
    ],
  },
  {
    idTramo: 3,
    asignaturas: [
      { idDia: 1, idAsignatura: 1 },
      { idDia: 2, idAsignatura: 4 },
      { idDia: 3, idAsignatura: 7 },
      { idDia: 4, idAsignatura: 1 },
      { idDia: 5, idAsignatura: 5 },
    ],
  },
  {
    idTramo: 4,
    asignaturas: [
      { idDia: 1, idAsignatura: 9 },
      { idDia: 2, idAsignatura: 9 },
      { idDia: 3, idAsignatura: 9 },
      { idDia: 4, idAsignatura: 9 },
      { idDia: 5, idAsignatura: 9 },
    ],
  },
  {
    idTramo: 5,
    asignaturas: [
      { idDia: 1, idAsignatura: 1 },
      { idDia: 2, idAsignatura: 1 },
      { idDia: 3, idAsignatura: 1 },
      { idDia: 4, idAsignatura: 8 },
      { idDia: 5, idAsignatura: 6 },
    ],
  },
  {
    idTramo: 6,
    asignaturas: [
      { idDia: 1, idAsignatura: 1 },
      { idDia: 2, idAsignatura: 1 },
      { idDia: 3, idAsignatura: 1 },
      { idDia: 4, idAsignatura: 8 },
      { idDia: 5, idAsignatura: 6 },
    ],
  },
  {
    idTramo: 7,
    asignaturas: [
      { idDia: 1, idAsignatura: 1 },
      { idDia: 2, idAsignatura: 1 },
      { idDia: 3, idAsignatura: 1 },
      { idDia: 4, idAsignatura: 1 },
      { idDia: 5, idAsignatura: 6 },
    ],
  },
];

// Escribe aquí tu código
function obtenerAsignaturas(id) {
  if (id < 1 || id > 9) {
    console.log("ID incorrecto.");
    return null;
  } else {
    for (let index = 0; index < asignaturas.length; index++) {
      if (asignaturas[index].id == id) {
        return asignaturas[index].nombre;
      }
    }
  }
}

function obtenerTramoHorario(id) {
  if (id < 1 || id > 7) {
    console.log("ID incorrecto.");
    return null;
  } else {
    for (let index = 0; index < tramos.length; index++) {
      if (tramos[index].id == id) {
        return tramos[index].hora + '<br>' + tramos[index].descripcion;
      }
    }
  }
}

function obtenerDiaSemana(id) {
  if (id < 1 || id > 5) {
    console.log("ID incorrecto.");
    return null;
  } else {
    for (let index = 0; index < dias.length; index++) {
      if (dias[index].id == id) {
        return dias[index];
      }
    }
  }
}

function obtenerGrupo(idAsignatura) {
    if (idAsignatura < 1 || idAsignatura > 9) {
      console.log("ID incorrecto.");
      return null;
    } else {
      for (let index = 0; index < dias.length; index++) {
        if (asignaturas[index].id == idAsignatura) {
          return asignaturas[index].grupo;
        }
      }
    }
  }

console.log(obtenerAsignaturas(6));
console.log(obtenerTramoHorario(3));
console.log(obtenerDiaSemana(3));
console.log(obtenerAula(3));

function crearHorario() {
    let tabla = document.getElementById("horario");
    tabla.innerHTML = ''; 

    let header = '<tr>';
    dias.forEach(dia => {
        header += `<th>${dia.nombre}</th>`;
    });
    header += '</tr>';
    tabla.innerHTML += header;

    for (let i = 0; i < horario.length; i++) {
        let fila = '<tr>';

        fila += `<td>${obtenerTramoHorario(horario[i].idTramo)}</td>`;

        for (let j = 0; j < dias.length; j++) {
            let asignaturaId = horario[i].asignaturas[j].idAsignatura;
            let asignatura = obtenerAsignaturas(asignaturaId);
            let color = asignaturas.find(a => a.id === asignaturaId)?.color || 'white';
            fila += `<td style="background-color:${color};">${asignatura}<br>${obtenerGrupo(asignaturaId)}</td>`;
        }

        fila += '</tr>';
        tabla.innerHTML += fila;
    }
}

