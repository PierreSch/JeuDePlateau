
//Recupere les valeur des parametre
let nbrColumn = $('#nbrColumn option:selected').val();
$("#nbrColumn").change(function(){
    nbrColumn = $(this).children("option:selected").val();   
    sessionStorage.setItem("column",nbrColumn) 
});
let nbrRow = $('#nbrRow option:selected').val();
$("#nbrRow").change(function(){
    nbrRow = $(this).children("option:selected").val();   
    sessionStorage.setItem("row",nbrRow) ;
});
let nbrObs = $('#nbrObstacle option:selected').val();
$("#nbrObstacle").change(function(){
    nbrObs = $(this).children("option:selected").val();   
    sessionStorage.setItem("obstacle",nbrObs) ;
});
let choiceTheme = $('#theme option:selected').val();
$("#theme").change(function(){
    choiceTheme = $(this).children("option:selected").val();   
    sessionStorage.setItem("theme",choiceTheme) ;
});
let choiceNbrWeapons = $('#moreWeapons option:selected').val();
$("#moreWeapons").change(function(){
    choiceNbrWeapons = $(this).children("option:selected").val();   
    sessionStorage.setItem("weapons",choiceNbrWeapons) ;
});
//Vérifie qu'une valeur est stocke sinon par defaut
if (sessionStorage.getItem("column") == null || sessionStorage.getItem("column") == "-"){
    column =  10;
} else {
    column = sessionStorage.getItem("column");
};
if (sessionStorage.getItem("row") == null || sessionStorage.getItem("row") == "-"){
    row =  10;
} else {
    row = sessionStorage.getItem("row");
};

if (sessionStorage.getItem("obstacle") == null || sessionStorage.getItem("obstacle") == "-"){
    obstacle =  10;
} else {
    obstacle = sessionStorage.getItem("obstacle");
};
if (sessionStorage.getItem("theme") == null || sessionStorage.getItem("theme") == "-"){
    theme =  "medieval";
} else {
    theme = sessionStorage.getItem("theme");
};
if (sessionStorage.getItem("weapons") == null || sessionStorage.getItem("weapons") == "-"){
    moreWeapons =  0;
} else {
    moreWeapons = sessionStorage.getItem("weapons");
};
//Genere le nouveau board
$('#genBoard').on('click', function(){
    location.reload();
});