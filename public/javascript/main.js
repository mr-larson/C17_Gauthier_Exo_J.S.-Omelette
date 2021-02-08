//EXO-Omelette
//------------ les Class ---------------
class Personne{
    constructor(nom, lieu, argent){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = []
        this.mainGauche = []
        this.seDeplacer = (depart, destination) => {
            depart.personnes.splice (depart.personnes.indexOf(this),1)
            destination.personnes.push(this)
            console.log (`${this.nom} va à  ${this.lieu.nom}`)
        }
        this.payerAtricle = (ingredients) => {
            this.argent -= ingredients.prix
        }
        this.couper = (ingredients, outils) => {
            console.log(`${this.nom} prend ${this.mainDroite.nom} pour ${mainDroite.action}`);
            for (let i=0; i<bol.contenu.length; i++){
            if (ingredients[i].etat != "entier"){
                console.log(`${ingredients[i].nom} est déjà coupé`);
            }else{
                ingredients[i].etat = "coupé"
                console.log(`${ingredients[i].nom} a été coupé avec ${this.mainDroite.nom}`)
            }
        }
        this.mainDroite = ""
        }
    }
}

class Lieu{
    constructor(nom, personnes, panier){
        this.nom = nom
        this.personnes = personnes
        this.panier = panier
    }
}

class Ingredients{
    constructor(nom, etat, prix){
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}

//------- les objets ----------

//Lieux
let maison = new Lieu ("Maison", [])
let epicerie = new Lieu ("Epicerie", [], [
    {type : "panier1", contenu : []},
    {type : "panier2", contenu : []},
    {type : "panier3", contenu : []},
])

//personnes
let sabrina = new Personnes ("Sabrina", maison.nom, 100, [], [])

//outils
let couteau = {
    nom = "Couteau",
    couper = () => {

    }
}
let poele = {
    nom = "Poele",
    contenu = [],
    cuire = () => {
        setTimeout(() => {
            this.contenu [0].etat = "cuit"
            console.log (`${this.contenu[0].nom} est ${this.contenu[0].etat} !`)
        }, 4000)
    }
} 
let bol = {
    nom = "bol",
    contenu = [],
    melanger = (nomMelange) => {
        let newMelange = {
            nom: nomMelange,
            etat: "cru"
        }
        this.contenu.push(newMelange)
    }
}

//ingredients
let oeuf = new Ingredients ("Oeufs", "entier", 2)
let oignon = new Ingredients ("Oignon", "entier", 2)
let lait = new Ingredients ("Lait", "liquide", 3)
let sel = new Ingredients ("Sel", "moulu", 1)
let poivre = new Ingredients ("Poivre", "moulu", 1)
let fromage = new Ingredients ("Fromage", "entier", 4)

//------------- étape Omelette ------------------ 
//liste course
epicerie.ingredients = [oeuf, oignon, lait, sel, poivre, fromage]

//Sabrina se déplace
personne.push(maison)
personne.seDeplacer(epicerie)

//Sabrina récupère son panier de course
personne.mainDroite = epicerie.panier[0];
epicerie.panier.shift();
console.log(`${personne.nom} a pris un ${personne.mainDroite.nom}`);
console.log(`Il reste donc ${epicerie.panier.length} panier dans le stock des paniers de ${epicerie.nom}`)

//Sabrina ajoute ses courses
for (let i=0; i < epicerie.ingredients.length; i++){
    personne.mainDroite.contenu.push(epicerie.ingredients[i])
    console.log(`${personne.nom} a pris ${personne.mainDroite.contenu[i].nom}`)
}

//Sabrina paye les courses
personne.payerArticle();
console.log(`${personne.nom} a ${personne.argent} euros`)

//Sabrina rentre à la maison
personne.seDeplacer(maison)

//Sabrina prépare à manger
couteau.couper()
bol.melanger()