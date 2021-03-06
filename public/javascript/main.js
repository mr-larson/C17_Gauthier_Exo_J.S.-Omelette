//EXO-Omelette
//------------ les Class ---------------
class Personnes{
    constructor(nom, lieu, argent){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = []
        this.mainGauche = []
        this.seDeplacer = (depart, destination) => {
            depart.personnes.splice (depart.personnes.indexOf(this),1)
            destination.personnes.push(this)
            console.log (`${this.nom} va à ${destination.nom}`)
        }
        this.payerArticle = (ingredients) => {
            this.argent -= ingredients.prix
        }
        this.couper = () => {
            bol.contenu.forEach(element => {
                couteau.couper(element)
            })
        }
        this.vider = () => {
            while(this.mainDroite[0].contenu.length > 0){
                console.log(`${this.nom} avez ajouté ${this.mainDroite[0].contenu[0].nom} dans le bol`);
                bol.contenu.push(this.mainDroite[0].contenu.shift());
            }
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
    nom : "Couteau",
    couper () {
        setTimeout(() => {
            bol.contenu.forEach(element => {
                couteau.couper(element);
            })
        }, 4000)
    }
}
let poele = {
    nom : "Poele",
    contenu : [],
    cuire () {
        setTimeout(() => {
            this.contenu [0].etat = "cuit"
            console.log (`${this.contenu[0].nom} est ${this.contenu[0].etat} !`)
        }, 4000)
    }
} 
let bol = {
    nom : "bol",
    contenu : [],
    melanger (nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "cru"
        }
        while (this.contenu.length>0){
            this.contenu.shift()
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
maison.personnes.push(sabrina)
sabrina.seDeplacer(maison, epicerie)

//Sabrina récupère son panier de course
sabrina.mainDroite.push (epicerie.panier[0])
epicerie.panier.shift()
console.log(`${sabrina.nom} a pris un ${sabrina.mainDroite[0].type}`)
console.log(`Il reste donc ${epicerie.panier.length} panier dans le stock des paniers de ${epicerie.nom}`)

//Sabrina ajoute ses courses
for (let i=0; i < epicerie.ingredients.length; i++){
    sabrina.mainDroite[0].contenu.push(epicerie.ingredients[i])
    console.log(`${sabrina.nom} a pris ${sabrina.mainDroite[0].contenu[i].nom}`)
    sabrina.payerArticle(epicerie.ingredients[i]);
}

//Sabrina paye les courses
console.log(`${sabrina.nom} a ${sabrina.argent} euros`)

//Sabrina rentre à la maison
sabrina.seDeplacer(epicerie, maison)
sabrina.vider()

//Sabrina ramène le panier
sabrina.seDeplacer(maison, epicerie)
console.log (`${sabrina.nom} ramène le panier`)
epicerie.panier.push(sabrina.mainDroite.shift())
console.log (epicerie.panier)

//Sabrina retourne à la maison
sabrina.seDeplacer(epicerie, maison)
console.log (`${sabrina.nom} retourne à la maison`)

//Sabrina prépare à manger
sabrina.couper(bol.contenu,couteau)
console.log(bol.contenu);
epicerie.ingredients.push (bol)
console.log(bol)
bol.melanger("omelette")
console.log(`le bol contient une ${bol.contenu[0].nom} qui a l'état: ${bol.contenu[0].état}`)
console.log(`le bol contient ${bol.contenu.nom} élément(s)`)

poele.contenu.push(bol.contenu[0])
console.log(`${poele.contenu[0].nom} à été ajouté dans la poele`)
console.log(`la poele contient ${poele.contenu.length} élément(s)`)

console.log(`le bol contient ${bol.contenu.length} élément(s)`)

poele.cuire(); 