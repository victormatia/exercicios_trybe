const wayToSend = document.querySelector('#send');
const wayToInputName = document.querySelector('#input-name');



function stopSend(event) {
    if (wayToInputName.value == '') {
        event.preventDefault();  // "cancela o evento, se for cancelável, sem parar a propagação do mesmo" - MDN
    }
}

wayToSend.addEventListener('click', stopSend);