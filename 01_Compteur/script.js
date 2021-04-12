// Votre script JS
const value = document.getElementById('value');
    document.querySelector('.increase').addEventListener('click',_ =>{value.innerText++ ;value.style.color="#080"});
    document.querySelector('.decrease').addEventListener('click',_ =>{value.innerText--; value.style.color="#F50"});
    document.querySelector('.reset').addEventListener('click',_ =>{value.innerText=0; value.style.color="#333"});



