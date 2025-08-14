function cambiarIdioma() {
    const es = document.getElementById("texto-es");
    const en = document.getElementById("texto-en");

    if (es.style.display === "none") {
        es.style.display = "block";
        en.style.display = "none";
    } else {
        es.style.display = "none";
        en.style.display = "block";
    }
}
