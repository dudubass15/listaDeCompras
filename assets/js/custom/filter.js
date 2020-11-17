let btnFilter = document.querySelector('#btnFilter');
let containerFilter = document.querySelector('#filter');

btnFilter.addEventListener('click', () => {
    containerFilter.classList.toggle('active-filter');
});