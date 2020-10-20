const burger = document.getElementsByClassName('burger')[0];
const burgermenu = document.getElementsByClassName('burgermenu')[0];

burger.addEventListener('click', function () {
    return burgermenu.classList.toggle('clear');
})