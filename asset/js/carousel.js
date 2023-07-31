const slider = document.querySelector('.slider');

const rightA = document.querySelector('.right');
const leftA = document.querySelector('.left');
const rightm = document.querySelector('.rightm');
const leftm = document.querySelector('.leftm');
let section = 0;

leftA.addEventListener('click', function(){
    section = (section > 0) ? section - 1 : 0;
    slider.style.transform = 'translate(' + (section) * -16.7 + '%)';
});
rightA.addEventListener('click', function(){
    section = (section < 4) ? section + 1 : 4;
    slider.style.transform = 'translate(' + (section) * -16.7+ '%)';
});

leftm.addEventListener('click', function(){
    section = (section > 0) ? section - 1 : 0;
    slider.style.transform = 'translate(' + (section) * -16.7 + '%)';
});
rightm.addEventListener('click', function(){
    section = (section < 4) ? section + 1 : 4;
    slider.style.transform = 'translate(' + (section) * -16.7+ '%)';
});
