

function showhide(use) {
      var texte = document.getElementById("texte");
      if (use === "show") {
            texte.style.display = "block";
      } else if (use === "hide") {
            texte.style.display = "none";
      }
}