var btn = document.getElementById("btn")
var sidebar = document.getElementsByClassName("sidebar")[0];
var container = document.getElementsByClassName("container")[0];

btn.onclick = function() {
    if (sidebar.style.display == "none") {
        sidebar.style.display = "block";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "25% 75%";

    } 
    else {
        sidebar.style.display = "none";
        container.style.display = "flex";
        container.style.gridTemplateColumns = "100%";
    }
    
}