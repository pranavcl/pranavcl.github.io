const toggleHamburgerMenu = () => {
    let main = document.querySelector("main");
        let hamburgerMenuPopup = document.getElementById("hamburger-menu-popup");
        let footer = document.querySelector("footer");

        if(main.style.display === "none") {
            main.style.display = "block";
            footer.style.display = "block";
            hamburgerMenuPopup.style.display = "none";
            return;
        }

        main.style.display = "none";
        footer.style.display = "none";
        hamburgerMenuPopup.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hamburger-menu").onclick = () => {
        toggleHamburgerMenu();
    }

    document.querySelectorAll("#hamburger-menu-popup>ul>li>a").forEach(link => link.onclick = toggleHamburgerMenu);
});