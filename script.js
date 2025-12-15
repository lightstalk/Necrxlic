const apximg = document.getElementById('aphex-img');
const apxlg = document.getElementById('aphex-logo');
const myimg = document.getElementById('my-img');
const mylg = document.getElementById('my-logo');

apximg.addEventListener('click', () => {
    apxlg.classList.toggle('visible');
    mylg.classList.remove('visible');
});

myimg.addEventListener('click', () => {
    mylg.classList.toggle('visible');
    apxlg.classList.remove('visible');
});
