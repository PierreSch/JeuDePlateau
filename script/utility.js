//Fonction pour transformer les paramètres de classe IMG en balise HTML
function transformImg(img){
    return '<img src='+img+'>'
};
//fonction qui genere le theme
function generateTheme(){
    $('#ring').hide()
    $('#result').hide()
    $('body').css('background-image', 'url('+background+')');
    $('.box').css('background-image', 'url('+box+')');
    $('.skinPlayer1').html(transformImg(bigPlayer1));
    $('.skinPlayer2').html(transformImg(bigPlayer2));
    $('.currentWeaponPlayer1').html(transformImg(player1.weapon.img));
    $('.currentWeaponPlayer2').html(transformImg(player2.weapon.img));
    $('#hpPlayer1').html(player1.hp);
    $('#hpPlayer2').html(player2.hp);
    $('.ruleWeapon0').html(transformImg(skinWeapon0));
    $('.ruleWeapon1').html(transformImg(skinWeapon1));
    $('.ruleWeapon2').html(transformImg(skinWeapon2));
    $('.ruleWeapon3').html(transformImg(skinWeapon3));
    $('.ruleWeapon4').html(transformImg(skinWeapon4));
    $('.box').css('background-image', 'url('+box+')');
    $('.move').css('background-image', 'url('+move+')');
};
//skin des armes et des joueur
let bigPlayer1 = theme+"/joueur1.png";
let bigPlayer2 = theme+"/joueur2.png";
let skinPlayer1 = theme+"/board/player1.png";
let skinPlayer2 = theme+"/board/player2.png";
let skinWeapon0 = theme+"/board/weapon0.png";
let skinWeapon1 = theme+"/board/weapon1.png";
let skinWeapon2 = theme+"/board/weapon2.png";
let skinWeapon3 = theme+"/board/weapon3.png";
let skinWeapon4 = theme+"/board/weapon4.png";
//theme du jeu
let background = theme+"/background.jpg";
let box = theme+"/board/bg_box.gif";
let move = theme+"/board/box_move.gif";
let skinObstacle = theme+"/board/obstacle.png";




