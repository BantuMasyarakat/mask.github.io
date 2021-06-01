// selection 
const subcon1 = document.querySelector('.subcon1');
const subcon2 = document.querySelector('.subcon2');
// function
function one (){
    subcon1.style.gridArea = 'one';
    subcon2.style.gridArea = 'two';
}
function two(){
    subcon1.style.gridArea = 'two';
    subcon2.style.gridArea = 'one';
}



const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


burger.addEventListener('click', function(){
    menu.classList.toggle('appear');
})

console.log(window.pageYOffset);
