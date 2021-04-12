var monTableau = ['exercice_01', 'exercice_02', 'exercice_03', 'exercice_05', 'exercice_06'];
//fonction appelée au click du bouton voir
function displayContent() {
  /* Dans la boucle avec l'instruction for on initialise une variable i à zéro
  qui nous servira d'indice lors des ajouts de données par l'incrémentation.
  On exécute ensuite les deux instructions contenues dans la boucle :
  La vérification que i est strictement inférieur à la longueur avec La propriété .length,
  puis l'incrémentation i de 1, ce qui sera fait à chaque passage dans la boucle.*/
  for (i = 0; i < monTableau.length; i++) {

    alert(monTableau[i]);
  }
  // display du tableau dans une modale
}
