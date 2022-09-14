const btnProxima = document.querySelector('.proxima');
const conselho = document.querySelector('.conselho');
const advice = document.querySelector('.advice');

function puxarPost() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(slip => {
        conselho.innerText = slip.slip.advice;
        //  console.log(slip.slip.advice);
    })
  }
  
  
  btnProxima.addEventListener('click', puxarPost);



  puxarPost();