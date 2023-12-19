let burger = document.querySelector('.xs');
let navigation = document.querySelector('.navigation');

function popNavigation(nav) {
    nav.classList.toggle('navigation');
    nav.style.position = 'fixed';
    nav.style.zIndex = '10';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.height = '100vh';
    nav.style.width = '100%';
    nav.style.padding = '20% 5%';
    nav.style.verticalAlign = 'center';
    nav.style.background = 'linear-gradient(90deg,var(--blue),var(--green))';
}

function createList(div) {
    let list = document.createElement('ul');
    let arrayOfBullets = ['About me', 'Skills', 'Work experience', 'Education', 'Relevant courses', 'My interests', 'Contacts'];
    let arrayOfLinks = ['#info', '#skills', '#experience', '#education', '#additional-education', '#interests', '#contacts'];
    for (let i = 0; i <= arrayOfBullets.length - 1; i++) {
        let bullet = document.createElement('li');
        let link = document.createElement('a');
        bullet.style.margin = '10px'
        link.textContent = arrayOfBullets[i];
        link.setAttribute('href', arrayOfLinks[i]);
        bullet.append(link)
        list.append(bullet);
        bullet.addEventListener('click', () => {
            div.classList.toggle('navigation');
        })
        div.append(list)
}}

createList(navigation);
burger.addEventListener('click', () => popNavigation(navigation));
//ToDo animation
//ToDo hide number by click
//ToDO pdf download
//ToDO contacts by click
