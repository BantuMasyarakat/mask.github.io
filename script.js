// selection 
const subcon1 = document.querySelector('.subcon1');
const subcon2 = document.querySelector('.subcon2');
const subcon3 = document.querySelector('.subcon3');
// function
function one (){
    subcon1.style.gridArea = 'one';
    subcon2.style.gridArea = 'two';
    subcon3.style.gridArea = 'three';
}
function two(){
    subcon1.style.gridArea = 'two';
    subcon2.style.gridArea = 'one';
    subcon3.style.gridArea = 'three';
}

function three(){
    subcon1.style.gridArea = 'three';
    subcon2.style.gridArea = 'two';
    subcon3.style.gridArea = 'one';
}