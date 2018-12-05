"use strict";

function miseEnFormeInconnu(inconnu) {
    let boutInconnu;
    if (inconnu.indexOf('le') == 0) {
        boutInconnu = "du " + inconnu.substring(3) + " ";
    }
    else {
        boutInconnu = "de " + inconnu + " ";
    }

    return boutInconnu.toLowerCase();
}

function auteurGen(nombre, emplacement) {

    let auteur = [
        'de Jean-Paul Sartre',
        'de Coluche',
        'de Victor Hugo',
        'd\'Albert Einstein',
        'de Confucius',
        'de Jules Renard',
        'd\'Edgar Allan Poe',
        'de Lamartine',
        'de Bob Marley',
        'de William Shakespeare',
        'de Pythagore',
        'de Mark Twain',
        'de Jean-Paul Sartre',
        'de Winston Churchill',
        'de Sigmund Freud',
        'de Jacques Chirac',
        'd\'Antoine de Saint-Exupéry'
    ];

    let inconnu = [
        'le beau frère',
        'la niece par alliance',
        'le coiffeur',
        'la concierge',
        'le demi frère',
        'le garagiste',
        'la tante',
        'le cousin eloigné',
        'la bouchère',
        'le fils éligitime',
        'la factrice',
        'le copain présumé',
        'la supposée arrière petite fille',
        'la tante',
        'le voisin',
        'la voisine',
        'le grand père',
        'le gendre',
        'le plombier',
        'le copain de régiment',
        'le confesseur',
        'la dentiste',
        'la maitresse'
    ];

    let typeCitation = $('input[name=radio-1]:checked').val();
    let auRevoir = "pasEncore";
    if (emplacement === "auRevoir") {
        auRevoir = 'auRevoir';
        typeCitation = "normale";
    }

    let indiceFixeInconnu= aleaTab(nombre,inconnu.length);
    let indiceFixeAuteur= aleaTab(nombre,auteur.length);

    for (let K = 1; K <= nombre; K++) {

        let indiceAleatoireInconnu = aleaTab(4, inconnu.length);
        let indiceAleatoireAuteur = Math.floor(Math.random() * auteur.length);
        let auteurCitation = [];

        if (typeCitation === "normale") {

            auteurCitation.push(miseEnFormeDebutPhrase(inconnu[indiceAleatoireInconnu[0]]) + " ");
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceAleatoireInconnu[1]]));
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceAleatoireInconnu[2]]));
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceAleatoireInconnu[3]]));
            auteurCitation.push(auteur[indiceAleatoireAuteur]);

        }
        else {

            auteurCitation.push(miseEnFormeDebutPhrase(inconnu[indiceFixeInconnu[K-1]]) + " ");
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceFixeInconnu[K-1]]));
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceFixeInconnu[K-1]]));
            auteurCitation.push(miseEnFormeInconnu(inconnu[indiceFixeInconnu[K-1]]));
            auteurCitation.push(auteur[indiceFixeAuteur[K-1]]);
        }


        if (auRevoir === 'auRevoir') {
            $('#auRevoir').html(auteurCitation.join("") + ", vous remercie d'avoir visité notre site !!!");
        }
        else {
            $('#auteur' + K).html('<i>AUTEUR PRESUME\n</i>');
            $('#auteur' + K).append('<p><i>' + auteurCitation.join("") + '</i></p><br>');
        }


    }


}