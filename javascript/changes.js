var show = document.getElementById("hi")
var hide = document.getElementById("bye")
var sidebar = document.getElementsByClassName("sidebar")[0];
var container = document.getElementsByClassName("container")[0];
var main = document.getElementsByClassName("main")[0];

show.onclick = function() {
    sidebar.style.display = "block";
    // container.style.display = "grid";
    container.style.gridTemplateColumns = "100%";
    main.style.display = "none";
    show.style.display = "none";
    hide.style.display = "block";
    sidebar.style.boxShadow = "none"
}

hide.onclick = function hideSide() {
    sidebar.style.display = "none";
    // container.style.display = "flex";
    container.style.gridTemplateColumns = "100%";
    main.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    sidebar.style.boxShadow = "3px 0 3px rgba(0, 0, 0, 0.19);"
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 900) { // desktop
        container.style.display = "grid";
        container.style.gridTemplateColumns = "25% 75%";
        sidebar.style.display = "block";
        main.style.display = "block";
    }
    else if (window.innerWidth >= 600) {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "100%";
        main.style.display = "block";
        show.style.display = "block";
        hide.style.display = "none";
        sidebar.style.boxShadow = "3px 0 3px rgba(0, 0, 0, 0.19);"
        sidebar.style.display = "none";

    }
    else {
        sidebar.style.display = "none";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "100%";
        main.style.display = "block";
        show.style.display = "block";
        hide.style.display = "none";
        sidebar.style.boxShadow = "3px 0 3px rgba(0, 0, 0, 0.19);"
    }
})