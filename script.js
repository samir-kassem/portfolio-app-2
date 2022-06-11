const hamburger = document.querySelector('#header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('#header .nav-bar .nav-list ul');
const menu_links = document.querySelectorAll('#header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});


menu_links.forEach(link => {
    link.addEventListener('click', () => {
        if(mobile_menu.classList.contains('active')){
            mobile_menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    });
})


window.onbeforeunload = () => {
    if(window.scrollY > 250){
        header.style.backgroundColor = "#29323c";
    }
};

document.addEventListener('scroll', () => {
    let scroll_y = window.scrollY;
    if(scroll_y > 250){
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});




