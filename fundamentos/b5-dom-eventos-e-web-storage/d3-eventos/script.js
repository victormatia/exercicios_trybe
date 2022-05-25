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
        } else if (days === 4 || days === 11 || days === 18 || days === 25) {
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