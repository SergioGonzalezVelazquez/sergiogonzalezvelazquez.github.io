var lang = {
    "python": "80%",
    "typescript": "70%",
    "java": "60%",
    "javascript": "70%",
    "dart": "50%",

    "flutter": "70%",
    "android": "60%",

    "html": "70%",
    "css": "60%",
    "elm": "70%",
    "nestjs": "80%",
    "prestashop": "80%",
    "spring": "40%",

    "mysql": "90%",
    "postgresql": "70%",
    "neo4j": "50%",

    "linux": "70%",
    "graphql": "80%",
    "firebase": "80%",
    "latex": "60%",

    "espanol": "Nativo",
    "ingles": "B1",
};

var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 500;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});