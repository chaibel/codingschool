class Personnage{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom,
        this.lieu = "",
        this.argent = argent,
        this.mainDroite = [],
        this.mainGauche = [],
        this.seDeplacer = ()=>{
            console.log("Vous etes dans le lieu suivant: ", this.lieu)
        }
        this.payerArticle =()=>{
            console.log("Voici le prier a payer:", this.argent);
        }
        this.couper =()=>{
            console.log(); //revoir sa ici !//
        }
    }
}

class Maison{
    constructor(nom, personnes){
        this.nom = nom
        this.personnes = []
    }
}

class Outils{
    constructor(nom, action){
        this.nom = nom
        this.action = action
    }
}


///
class Ingredients{
    constructor(nom,etats,prix){
        this.nom=nom
        this.etats=[]
        this.prix=prix
    }

}



class Poele extends Outils{
    constructor(nom,contenu){
        super(nom,action)
        this.contenu=contenu
    }
    cuire(){

    }

}


class Bol extends Outils{
    constructor(nom,action,contenu){
        super(nom,action)
        this.contenu=contenu
    }
    melanger(nomDuMelange){
        let resultat=new Ingredients(nomDuMelange)
    }
}

let momo = new Personnage("momo",100,[],[])
Personnage.seDeplacer("maison")

