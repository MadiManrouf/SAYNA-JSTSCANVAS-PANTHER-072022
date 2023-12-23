//zoomer le titre dans la section accueil
const titre1 = document.getElementById("titre1");
const titre2 = document.getElementById("titre2");

titre1.addEventListener("mouseover", zoomerTitres);
titre1.addEventListener("mouseout", dezoomerTitres);

titre2.addEventListener("mouseover", zoomerTitres);
titre2.addEventListener("mouseout", dezoomerTitres);

function zoomerTitres() {
titre1.style.transform = "scale(1.1)";
titre2.style.transform = "scale(1.1)";
}

function dezoomerTitres() {
titre1.style.transform = "scale(1)";
titre2.style.transform = "scale(1)";
}

// Sélectionnez tous les éléments h1 et h2 
const headings = document.querySelectorAll('h1, h2:not(#sec1-accueil h1, #sec1-accueil h2)');

// Parcourez chaque élément et ajoutez les écouteurs d'événements
headings.forEach((heading) => {
  heading.addEventListener('mouseover', () => {
    heading.style.transform = 'scale(1.1)';
  });

  // Ajoutez l'écouteur d'événement lorsque le curseur quitte l'élément
  heading.addEventListener('mouseout', () => {
    heading.style.transform = 'scale(1)';
  });
});

// Ajout du zoom sur les images corespondantes au  hover
let zoom = document.querySelectorAll(".zoom");
zoom.forEach((agrandir) => {
  agrandir.addEventListener("mouseover", () => {
    agrandir.style.transform = "scale(1.1)"
  });
});

zoom.forEach((retrecir) => {
  retrecir.addEventListener("mouseout", () => {
    retrecir.style.transform = "scale(1)"
  });
});

// Fonction pour gérer le défilement et l'apparition progressive
function handleScrollFadeZoom() {
  fadeZoomImages.forEach((image) => {
    if (isImageVisible(image)) {
      image.style.opacity = '1';
      image.style.visibility = 'visible';
      image.style.transform = 'scale(1)';
    }
  });
}