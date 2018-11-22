/*----Navbar-----*/
function navbarfun() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function hidefeaturedpost() {
    document.getElementById("featured-post").style.opacity = (screen.height - 1.35*document.documentElement.scrollTop)/screen.height;
}