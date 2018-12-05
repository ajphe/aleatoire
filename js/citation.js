"use strict";

function aleaTab(tailleVoulu, grandeurListe) {

    let tableau = [];
    tableau.push(Math.floor(Math.random() * grandeurListe));
    while (tableau.length < tailleVoulu) {

        let aleatoire = Math.floor(Math.random() * grandeurListe);
        if (tableau.indexOf(aleatoire) === -1) {
            tableau.push(aleatoire);
        }

    }


    return tableau;
}

function miseEnFormeDebutPhrase(bout) {
    let miseEnForme = "";
    miseEnForme = bout.trim().toLowerCase();
    return miseEnForme.charAt(0).toUpperCase() + miseEnForme.substring(1);

}

function miseEnFormeMilieuPhrase(bout) {
    return bout.trim().toLowerCase();
}

function miseEnFormeFinPhrase(bout) {
    return bout.trim().toLowerCase() + ".";
}

function miseEnFormeConjonction(conj) {
    return " " + conj.trim().toLowerCase() + " ";
}

function creerPhrase(liste) {


    let commmenceParVoyelle = RegExp('^[aeiou]');
    let finiParQue = RegExp('que$');

    let incr = [1, 3];
    for (let I of incr) {


        if (finiParQue.test(liste[I].trim()) && commmenceParVoyelle.test(liste[I + 1])) {

            let newConj = liste[I].substring(0, liste[I].length - 2) + "\'";
            liste[I] = newConj;

        }
    }
    return liste;
}


function citationGen(nombre) {


    let boutDePhrase = [
        'Dans la vie on ne fait pas ce que l\'on veut',
        'on est responsable de ce que l\'on est',
        'la règle d\'or de la conduite est la tolérance mutuelle',
        'nous ne penserons jamais tous de la même façon',
        'nous ne verrons qu\'une partie de la vérité et sous des angles différents',
        'On passe une moitié de sa vie à attendre ceux qu\'on aimera',
        'Pour critiquer les gens il faut les connaître',
        'La vie, c\'est comme une bicyclette',
        'il faut avancer pour ne pas perdre l\'équilibre',
        'il faut choisir un travail que l\'on aime',
        'nous ne souffrons jamais que du mal que nous font ceux qu\'on aime',
        'Le mal qui vient d\'un ennemi ne compte pas',
        'la femme est plus barbare que l\'homme',
        'L\'homme veut être le premier amour de la femme',
        'la femme veut être le dernier amour de l\'homme',
        'La nature fait les hommes semblables',
        'Il ne faut avoir aucun regret pour le passé',
        'Un homme ne doit jamais rougir d\'avouer qu\'il a tort',
        'Dieu a créé les gens en technicolor',
        'S\'endormir au volant, c\'est très dangereux',
        'on résiste à n\'importe quels maux,' +
        'Toute méchanceté vient de faiblesse'
    ];

    let conjonction = [
        ' à condition que ',
        ' afin que ',
        ' ainsi que ',
        ' alors que ',
        ' à mesure que',
        ' à moins que ',
        ' Ainsi ',
        ' Car ',
        ' Cependant ',
        ' comme ',
        ' Donc ',
        ' Si ',
        ' Et ',
        ' Quand ',
        ' Ni ',
        ' Ou ',
        ' Or ',
        ' Puis ',
        ' que ',
        ' Pourtant ',
        ' Lorsque ',
        ' Néanmoins ',
        ' Toutefois ',
        ' Sinon ',
        ' Mais ',
        ' Soit ',
        ' Enfin ',
        ' Puisque ',
        ' Au reste ',
        ' Au surplus ',
        ' Ainsi que ',
        ' À moins que ',
        ' Bien que ',
        ' Tandis que ',
        ' Aussitôt que ',
        ' De peur que ',
        ' Par conséquent ',
        ' C’est-à-dire ',
        ' d \’ailleurs ',
        ' Vu que '];

    let typeCitation = $('input[name=radio-1]:checked').val();
    $('#typeCitation').html('<p><b> Type Citation : ' + typeCitation + '</b></p>');

    let indiceFixe = aleaTab(nombre, boutDePhrase.length);

    for (let K = 1; K <= nombre; K++) {


        let indiceAleatoirePhrase = aleaTab(3, boutDePhrase.length);
        let indiceAleatoireConjonction = aleaTab(2, conjonction.length);
        let citationAleatoire = [];

        if (typeCitation === 'normale') {
            citationAleatoire.push(miseEnFormeDebutPhrase(boutDePhrase[indiceAleatoirePhrase[0]]));
            citationAleatoire.push(miseEnFormeConjonction(conjonction[indiceAleatoireConjonction[0]]));
            citationAleatoire.push(miseEnFormeMilieuPhrase(boutDePhrase[indiceAleatoirePhrase[1]]));
            citationAleatoire.push(miseEnFormeConjonction(conjonction[indiceAleatoireConjonction[1]]));
            citationAleatoire.push(miseEnFormeFinPhrase(boutDePhrase[indiceAleatoirePhrase[2]]));
            citationAleatoire = creerPhrase(citationAleatoire);
        }
        else {
            citationAleatoire.push(miseEnFormeDebutPhrase(boutDePhrase[indiceFixe[K - 1]]));
            citationAleatoire.push('. Oh oui c\'est bien vrai, ');
            citationAleatoire.push(miseEnFormeMilieuPhrase(boutDePhrase[indiceFixe[K - 1]]));
            citationAleatoire.push('.');


        }

        $('#citation' + K).html('<p><b>' + citationAleatoire.join("") + '</b></p>');
    }


}




