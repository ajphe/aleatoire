function onClick(num) {

    let nombrePremier = [1, 2, 3, 5, 7];

    clicks = clicks * nombrePremier[num - 1];
    let modClicks = clicks % 210;

    $("#cit" + num).css({"background-color": "green"});

    if (modClicks === 0) {
        $("#continuer").css({"visibility": "visible"});
        $("#arreter").css({"visibility": "visible"});
    }
};

$(function () {
    $("input").checkboxradio();
});

function generation(nombre) {

    citationGen(nombre);
    auteurGen(nombre, 'citation');

    let tabModulo = [210, 105, 35, 7, 1,]
    clicks = tabModulo[nombre - 1];

    for (let i = 1; i <= 5; i++) {
        if (i <= nombre) {
            $('#cit' + i).css({"visibility": "visible"});
            $('#citation' + i).css({"visibility": "visible"});
            $('#auteur' + i).css({"visibility": "visible"});
        }
        else {
            $('#cit' + i).css({"visibility": "hidden"});
            $('#citation' + i).css({"visibility": "hidden"});
            $('#auteur' + i).css({"visibility": "hidden"});
        }
    }

    for (i = 2; i <= 5; i++) {
        $('#cit' + i).css({"background-color": "purple"});
    }

    $('#proposition').css({"visibility": "hidden"});
    $('#proposition').css('height', '0px');

    $("#accordion").accordion({active: 0});
    $("#accordion").css({"visibility": "visible"});

    if (nombre === 1) {
        $("#continuer").css({"visibility": "visible"});
        $("#arreter").css({"visibility": "visible"});
    }

}

function effacerAccordeon() {
    $("#continuer").css({"visibility": "hidden"});
    $("#arreter").css({"visibility": "hidden"});
    $("#proposition").css({"visibility": "visible"});
    $("#accordion").css({"visibility": "hidden"});
    $('#typeCitation').html('');
    for (let i = 1; i <= 5; i++) {
        $('#cit' + i).css({"visibility": "hidden"});
        $('#citation' + i).css({"visibility": "hidden"});
        $('#auteur' + i).css({"visibility": "hidden"});
    }
}

function auRevoir() {

    $("#continuer").css({"visibility": "hidden"});
    $("#arreter").css({"visibility": "hidden"});
    $("#proposition").css({"visibility": "hidden"});
    $("#accordion").css({"visibility": "hidden"});
    $('#typeCitation').html('');
    for (let i = 1; i <= 5; i++) {
        $('#cit' + i).css({"visibility": "hidden"});
        $('#citation' + i).css({"visibility": "hidden"});
        $('#auteur' + i).css({"visibility": "hidden"});
    }
    auteurGen(1, 'auRevoir');
}

/****
 * Etat Initial
 */

var clicks = 1;

$("#cit1").css({"background-color": "green"});
$("#accordion").css({"visibility": "hidden"});
$("#continuer").css({"visibility": "hidden"});
$("#arreter").css({"visibility": "hidden"});

$('#radio-1').attr('checked', true);