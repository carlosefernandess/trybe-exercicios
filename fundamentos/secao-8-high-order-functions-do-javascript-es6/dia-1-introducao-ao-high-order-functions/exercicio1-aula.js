const emailGenerator = (personName) => {
    const eMailFormat = (personName).toLocaleLowerCase().split(' ').join('_');
    return `${personName}, ${eMailFormat}@trybe.com`;
  };

const newEmployees = (personNameId) => {
    const employees = {
      id1: personNameId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: personNameId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: personNameId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(emailGenerator))