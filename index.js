const hidden_menu = document.querySelector('.rmenu_icon');
const show = document.querySelector(".rclose_menu");
hidden_menu.addEventListener('click', () => 
{
    show.classList.toggle('close');
    show.classList.toggle('open');
    hidden_menu.classList.toggle('close');
})
show.addEventListener('click', () => 
{
    show.classList.toggle('close');
    show.classList.toggle('open');
    hidden_menu.classList.toggle('close');
})