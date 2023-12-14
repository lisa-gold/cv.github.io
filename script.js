let burger = document.querySelector('.xs');
let container = document.querySelector('.container')

function createNavigation() {
    let div = document.createElement('div');
    div.className = 'navigation';
    createList(div);
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.height = '100vh';
    div.style.width = '85%';
    div.style.padding = '20% 5%';
    div.style.verticalAlign = 'center';
    div.style.background = 'linear-gradient(90deg,var(--blue),var(--green))';
    container.append(div);
}

burger.addEventListener('click', () => createNavigation());
//ToDo animation
//ToDo toggle
//ToDo hide number by click
//ToDO pdf download

function createList(div) {
    div.classList.toggle('display-none');
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
            div.style.display = 'none';
        })
        div.append(list)
}}