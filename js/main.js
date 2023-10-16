const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
const hamburgerSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
            <!-- Hamburger SVG code -->
            <g fill="#242D52" fill-rule="evenodd">
                <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
        </svg>
    `;
const closeSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22">
            <!-- Close-icon SVG code -->
            <path fill="#242D52" fill-rule="evenodd"
                d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z" />
        </svg>
    `;

let isMenuOpen = false;

menuIcon.addEventListener("click", () => {
  if (isMenuOpen) {
    menuIcon.innerHTML = hamburgerSVG;
  } else {
    menuIcon.innerHTML = closeSVG;
  }
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  isMenuOpen = !isMenuOpen;
});
