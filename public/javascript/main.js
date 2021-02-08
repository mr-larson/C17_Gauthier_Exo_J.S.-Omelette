//EXO-Omelette
//------------ les Class ---------------
class Personne{
    constructor(nom, lieu, argent, mainDroite=[], mainGauche=[]){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche
        this.seDeplacer = (depart, destination) => {
            
        }
        this.payerAtricle = (articles) => {
            
        }
        this.couper = (ingredients, outils) => {
            
        }
    }
}

class Lieu{
    constructor(nom, personnes){
        this.nom = nom
        this.personnes = personnes
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
let sabrina = new Personnes ("Sabrina", maison, 100)

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

    }
} 
let bol = {
    nom = "bol",
    contenu = [],
    melanger = () => {

    }
}


//ingredients
let oeuf = new Ingredients ("Oeufs", "entier", 2)
let oignon = new Ingredients ("Oignon", "entier", 2)
let lait = new Ingredients ("Lait", "liquide", 3)
let sel = new Ingredients ("Sel", "moulu", 1)
let poivre = new Ingredients ("Poivre", "moulu", 1)
let fromage = new Ingredients ("Fromage", "entier", 4)

epicerie.ingredients = [oeuf, oignon, lait, sel, poivre, fromage]