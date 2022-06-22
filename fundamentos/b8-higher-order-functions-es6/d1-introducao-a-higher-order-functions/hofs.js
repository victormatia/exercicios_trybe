const gerateEmails = (name) => `${name.toLowerCase().replace(' ', '_')}@trybe.com`;

const saveInfos = (name) => ({ nomeCompleto: name, email: gerateEmails(name) });

const newEmployess = (fun) =>  {
  const employees = {
    id1: fun('Pedro Guerra'),
    id2: fun('Luiza Drumond'),
    id3: fun('Carla Paiva')
  }
  return employees;
};

console.log(newEmployess(saveInfos));
