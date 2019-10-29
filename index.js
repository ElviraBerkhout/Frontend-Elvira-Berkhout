var foto = document.querySelector("#elviraFoto");

foto.addEventListener("mouseover", function () {
   foto.classList.add("shake");
});

foto.addEventListener("mouseout", function () {
    foto.classList.remove("shake");
});
