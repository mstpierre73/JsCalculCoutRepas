// Variables globales
var vBudget = 20;
var vRepas  = 0;

// Affiche le budget
document.getElementById("hBudget").innerHTML = vBudget;

// Capte la passation de commande
document.getElementById("btnCommander").addEventListener("click", acheterSW);

/* Achète le nombre de sandwiches par jour au prix du jour */
function acheterSW() {
  reinitFormu();
  var jour = 0;
  while (vBudget > 0) {
    jour++;
    var prixDuJour = calculerPrixDuJour();
    var nbrSandwiches = document.getElementById("hNSandwiches").value;
    if (nbrSandwiches < 1) {
      nbrSandwiches = 1000;
    }
    var prixTotal = prixDuJour * nbrSandwiches;
    if (vBudget >= prixTotal) {
      vBudget = vBudget - prixTotal;
      vRepas++;
      document.getElementById("hTicket").innerHTML += "<p>Le jour " + jour + ", les sandwiches sont à " + prixDuJour + "$. Il te reste " + vBudget.toFixed(2) + "$.</p>";
      
      if(jour == 5) {
        document.getElementById("hTicket").innerHTML += "<p><em>Mais tu as tenu CINQ jours au moins. Bravo&nbsp;!</em></p>";
      }}
      else {
        document.getElementById("hTicket").innerHTML += "<p>Aujourd'hui, les sandwiches sont à " + prixDuJour + "$. Tu n'as plus assez d'argent. Demand à un copain de partager son sandwich.</p>";
        vBudget = 0;
      }
    
  }
  document.getElementById("hTicket").innerHTML += "<p>Tu as pu faire " + vRepas + " repas cette semaine.</p>";
}

/* Etablit le prix des sandwiches pour un jour */
function calculerPrixDuJour() {
    var prixSW = (Math.random() * (5 - 1) + 1).toFixed(2);
    return prixSW;
}

/* Réinitialise le jeu pour la prochaine commande */
function reinitFormu() {
    vBudget = 20;
    vRepas  = 0;
    document.getElementById("hTicket").innerHTML = "";

}