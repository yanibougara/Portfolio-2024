document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a"); // Sélectionnez tous les liens de la navbar

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Empêchez le comportement par défaut du lien
      const targetId = this.getAttribute("href").substring(1); // Obtenez l'ID de la cible
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop, // Défilement vers la position de l'élément cible
          behavior: "smooth", // Défilement fluide
        });
      }
    });
  });
});



