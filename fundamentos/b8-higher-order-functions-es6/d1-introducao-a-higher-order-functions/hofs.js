// #1

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

// ---

// #2

const gerateNumber = () => Math.floor(Math.random() * 5);

const verifyNumber = (num) => num === gerateNumber() ? `Parabéns você ganhou` : `Tente novamente`;

const returnResult = (num, verify) => verify(num);

console.log(returnResult(2, verifyNumber));