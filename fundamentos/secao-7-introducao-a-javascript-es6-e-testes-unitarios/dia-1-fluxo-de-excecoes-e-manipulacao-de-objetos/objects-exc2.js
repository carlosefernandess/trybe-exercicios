const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addNightTurnToLesson2 (object, key, value) {
    object.key = value
  };

  function listAllObjectKeys (object) {
    Object.keys(object)
};

addNightTurnToLesson2(lesson2, turno, "noite")