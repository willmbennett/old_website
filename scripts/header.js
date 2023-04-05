class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <div class="topnav" id="myTopnav">
        <a class="nav-option topnav-left" href="blog.html">Blog</a>
        <a href="https://www.linkedin.com/in/will-bennett-8a24b747/" target="_blank" class="nav-option topnav-left fa fa-linkedin"></a>
        <!-- Centered link -->
        <div class="topnav-centered">
            <a class="nav-option" href="index.html">William Bennett</a>
        </div>
        <div class="topnav-right">
            <a href="https://www.linkedin.com/in/will-bennett-8a24b747/" target="_blank" class="fa fa-linkedin"></a>
            <a href="javascript:void(0);" class="icon" onclick="navbarfun()">
                <i class="fa fa-bars"></i>
            </a>
        </div> 
    </div>
    `;
  }
}

  customElements.define('header-component', Header);

/*----Navbar-----*/
function navbarfun() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}