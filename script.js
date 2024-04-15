const sideNavCloseButton = document.querySelector("#snClose");
const sideNav = document.querySelector(".side-nav");
const sideNavToggleButton = document.querySelector("#scMenu");

const toggleSideNav = ()=> {
    sideNav.classList.toggle('active');
}

const hideSideNav = ()=> {
    sideNav.classList.remove('active');
}

sideNavToggleButton.addEventListener('click', toggleSideNav);
sideNavCloseButton.addEventListener('click', hideSideNav);