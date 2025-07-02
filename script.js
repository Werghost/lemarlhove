const openSidebarButton = document.getElementById("open-sidebar-button");
var navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll('nav-links ul li a');
const mediaQuery = window.matchMedia("(max-width: 800px)");


mediaQuery.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile);
    if (isMobile) {
        navLinks.setAttribute('inert', '')

    } else {
        navLinks.removeAttribute('inert')
    }
}

function showSidebar() {
    navLinks.style.right = "0";
    navLinks.removeAttribute('inert')
    overlay.style.display = "block";
    overlay.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-expanded", "true");
    openSidebarButton.setAttribute("aria-expanded", "true");
}

function hideSidebar(){
    navLinks.style.right = "-100%";
    navLinks.setAttribute('inert', '')
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-expanded", "false");
    openSidebarButton.setAttribute("aria-expanded", "false");
}

navItems.forEach(link => {
    link.addEventListener("click", () => {
        hideSidebar();   
    });
});

updateNavbar(mediaQuery)

const activePage = window.location.pathname;
const navigationLinks = document.querySelectorAll('.nav-links ul li a').forEach(link => {
if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
    }
})    

var counter = 1;
function changeImage() {    
    document.getElementById("radio" + counter).checked = true; 
    document.getElementById("r_radio" + counter).checked = true;
    document.getElementById("ac_radio" + counter).checked = true; 
    counter++;
    if(counter > 4){
        counter = 1;
    }
}

setInterval(changeImage, 5000); // Change image every 5 seconds





/*var counter = 1;
electrical = setInterval(function electrical() {
    document.getElementById("radio" + counter).checked = true; 
    
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000); 

var r_counter = 1;
refrgeration = setInterval(function refrgeration() {
    document.getElementById("r_radio" + r_counter).checked = true; 
    
    r_counter++;
    if(r_counter > 4){
        r_counter = 1;
    }
}, 5000); // Change image every 5 seconds

var ac_counter = 1;
ac = setInterval(function ac() {
    document.getElementById("ac_radio" + ac_counter).checked = true; 
    
    ac_counter++;
    if(ac_counter > 4){
        ac_counter = 1;
    }
}, 5000);*/  // Change image every 5 seconds




