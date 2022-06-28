// #1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

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
