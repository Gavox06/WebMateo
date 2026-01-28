// Creates a variable with a value of True and then we will change its value
let claro = true;
// Creates the event on click on the icon
document.getElementById("change_style").addEventListener("click", function () {
    let link = document.getElementById("estilo");
    let img = document.getElementById("change_style");
    // Checks if it is in the original CSS and change it to the other mode
    if (claro) {
        link.href = "gtaV_claro.css";
        img.src = "../img/luna.png";
    // Checks if it is in the other CSS and change it to the original
    } else {
        link.href = "gtaV.css";
        img.src = "../img/sol.png";
    }
    // Changes the value of the variable created at the beginning to alternate between CSS files
    claro = !claro;
});

