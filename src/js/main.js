// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
//Une variable c'est un objet qui peut etre modifié en eccecutant du code
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
let firstName = "Ethan";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 18; // Remplacez 30 par votre âge réel

// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <input>
// - Classe(s): card-input
// - Attribut(s):
//type="text"
//name="password"
//id="password-input"
//class="card-input"
// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE:
// Une id c'est pour celectionner un eleement en particulier et une class c'est pour celectionner un groupe d'elements.
// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:
// C'est pour celectionner le premier element d'un document.
// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
document.querySelector("p");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.
classList(add(".highlight"))(
  // -----------------------
  // 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
  getAttribute("placeholder")
);
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:
//C'est une fonction qui attent qu'un événement se produise, puis y répond
// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateuriceconst button = document.getElementById("card-btn");

button.addEventListener("click", function () {
  const toggleText = document.getElementById("toggle-text");
  toggleText.classList.toggle("hide");
});
