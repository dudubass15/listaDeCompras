let btnFilter = document.querySelector('#btnFilter');
let containerFilter = document.querySelector('#filter');

btnFilter.addEventListener('click', () => {
    console.log('Clicou!');
    containerFilter.classList.toggle('active-filter');
});