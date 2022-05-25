function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //#1 ---------------------------------------------------------

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const wayToUl = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const createLi = document.createElement('li');
        let days = dezDaysList[i];

        // createLi.innerText = days; // você pode atribuir valores a um elemento mesmo sem criar um caminho pra ele, dessa forma.
        // createLi.classList.add('day');  // classList.add faz a mesma coisa do .className.

        // wayToUl.appendChild(createLi) // lembre de não adicionar aspas quando usar uma variável como parâmetro.

        if (days === 24 || days === 25 || days === 31) {
            createLi.innerText = days;
            createLi.classList.add('day')
            createLi.classList.add('holiday')
        } else if (days === 4 || days === 11 || days === 18 || days === 25) { //obs.: o dia 25 não esta recebendo a classe friday.
            createLi.innerText = days;
            createLi.classList.add('day');
            createLi.classList.add('friday')
        } else {
            createLi.innerText = days;
            createLi.classList.add('day');
        }

        wayToUl.appendChild(createLi);
    }
  }

  createDaysOfTheMonth()

//---------------------------------------------------------------

//#2 ---------------------------------------------------------

function createAButton (string) {
    const fatherOfButton = document.querySelector('.buttons-container'); // lembre-se que querySelector retorna apens um elemento.

    const createAElement = document.createElement('button');

    createAElement.innerText = string;
    createAElement.classList.add('bnt-holiday')

    fatherOfButton.appendChild(createAElement);
}

createAButton('Feriado');

//---------------------------------------------------------------

//#3 ---------------------------------------------------------

const wayToButton = document.querySelector('.bnt-holiday');

function changeColorHolidays(event) {  // o parâmetro dessa função é o evento disparado pela função addEventListener na linha 93.
    const wayToHolidays = document.querySelectorAll('.holiday');

    for (let day of wayToHolidays) {
        if (day.style.background === 'green') {
            day.style.background = '#eee'
            day.style.color = '#777'
        } else {
            day.style.background = 'green';
            day.style.color = 'white';
        }
    }
}

wayToButton.addEventListener('click', changeColorHolidays) // não precisa usar () para chamar a função

//---------------------------------------------------------------

//#4 ---------------------------------------------------------

function createAButton2 (string) {
    const fatherOfButton = document.querySelector('.buttons-container'); // lembre-se que querySelector retorna apens um elemento.

    const createAElement = document.createElement('button');

    createAElement.innerText = string;
    createAElement.classList.add('btn-friday')

    fatherOfButton.appendChild(createAElement);
}

createAButton2('Sexta-feira');

//---------------------------------------------------------------

//#5 ----------------------------------------------------------------

const wayToButton2 = document.querySelector('.btn-friday');

function sextou(event) {
    const wayToFriday = document.querySelectorAll('.friday');
    var days = [4, 11, 18, 25];

    for (let i = 0; i < wayToFriday.length; i += 1) {
        wayToFriday[i].innerText = 'SEXTOU!!!';

        //a função está funcionando perfeitamente mas precisa fazer o processo contrário quando acionada novamente. 
        
        // if (wayToFriday[i].innerText === 'SEXTOU!!!') {
        //     for (let secI = 0; secI < days.length; secI += 1) {
        //         wayToFriday[i].innerText = days[i];
        //     }
        // } else if (wayToFriday[i].innerText === 4 || wayToFriday[i].innerText === 11 || wayToFriday[i].innerText === 18 || wayToFriday[i].innerText === 25){
        //     wayToFriday[i].innerText = 'SEXTOU!!!';
        // }
    }

    
    console.log('click')
}

wayToButton2.addEventListener('click', sextou);



