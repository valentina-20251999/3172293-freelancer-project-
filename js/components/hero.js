document.addEventListener("DOMContentLoaded", function(){
    const heroElement = document.querySelector(".hero-container")

    if(!heroElement) return;

        fetch("/views/components/hero.html")
        .then(response => response.text())
         .then(data => {
           heroElement.innerHTML = data;
        })
        .catch (error => console.log ("error cargando el hero",error));

    });
