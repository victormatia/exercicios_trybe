//#01

let paragraph = document.getElementsByTagName('p');

paragraph[1].innerText = 'Me vejo trabalhando como dev'

//------------------------------------------------------------

//#02

let corBG = document.querySelector('.main-content');

corBG.style.background = 'rgb(76,164,109)';

//------------------------------------------------------------

//#03

let corBGCenter = document.querySelector('.main-content .center-content');

corBGCenter.style.background = 'white';

//------------------------------------------------------------

//#04

let title = document.querySelector('.title');

title.innerText = 'Exercício 5.1 - JavaScript';

//------------------------------------------------------------

//#05

let upperCaseP = document.getElementsByTagName('p');

for (let i = 0; i < upperCaseP.length; i +=1) {
    upperCaseP[i].style = 'text-transform: uppercase;'; 
}; //Essa declaração css tranforma o texto em maiúsculo

//------------------------------------------------------------

//#06

let prints = document.getElementsByTagName('p');

for (let i = 0; i < prints.length; i +=1) {
    console.log(prints[i].innerText); 
};
