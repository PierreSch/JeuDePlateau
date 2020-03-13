class Game {
    constructor (){
        this.currentPlayer = player1;
        this.currentEnemy = player2   
    } 
    //Changement de joueur   
    turn(){
        if (this.currentPlayer == player1){
            this.currentEnemy = player1;
            this.currentPlayer = player2;
        } else if (this.currentPlayer == player2 ){
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        }               
    }
    // Gestion du deplacement des joueur
    displacement(weapons){
        $('div.box').on('click',function(){
            if ($(this).hasClass('move')) {                       
                newGame.currentPlayer.viewRoad(newGame.currentPlayer.name);
                newGame.currentPlayer.movePlayer(this);
                newGame.takeWeapon(this,weapons);
                $('.currentWeaponPlayer1').html(transformImg(player1.weapon.img));
                $('.currentWeaponPlayer2').html(transformImg(player2.weapon.img));
                newGame.turn();
                newGame.startFight();     
                newGame.currentPlayer.viewRoad(newGame.currentPlayer.name);
                $('.box').css('background-image', 'url('+box+')');
                $('.move').css('background-image', 'url('+move+')');                                
            }
        });        
    }
    //Fonction pour récuperer les armes sur le board
    takeWeapon(click,weapons){
        //Modifie la position de l'arme équipé au joueur
        newGame.currentPlayer.weapon.id = newGame.currentPlayer.id;
        const weaponDefault = [weaponP1, weaponP2, weapon1, weapon2, weapon3, weapon4];
        const allWeapons = weaponDefault.concat(weapons);
        //filtre les armes qui ont l'id du joueur
        let currentWeapon = allWeapons.filter(weapon => ($(weapon).attr('id') == $(click).attr('id'))) 
        if($(click).hasClass('weapon')){
            $('#'+$(click).attr('id')+' img:first-child').remove();
            $(transformImg(newGame.currentPlayer.weapon.img)).appendTo(click)
            //filtre pour récuperer l'arme qui n'est pas équiper par le joueur
            let newWeapon = currentWeapon.filter(weapon => (weapon) != newGame.currentPlayer.weapon)
            newGame.currentPlayer.weapon = newWeapon[0];
        }       
    }
    //Lancement du combat
    startFight(){
        let regExX = /y[0-9]{1,}_x/;
        let regExY = /(y|_x[0-9]{1,})/g;
        let y = parseInt($('#'+newGame.currentPlayer.id).attr('id').toString().replace(regExY,''));
        let x = parseInt($('#'+newGame.currentPlayer.id).attr('id').toString().replace(regExX,''));
        if ($('#y'+(y+1)+'_x'+x).hasClass('player') || $('#y'+(y-1)+'_x'+x).hasClass('player') || $('#y'+y+'_x'+(x+1)).hasClass('player') || $('#y'+y+'_x'+(x-1)).hasClass('player')){
            $('.statuPlayer').fadeOut('slow');
            $('#board').slideUp('slow');                    
            $('#ring').delay(800).slideDown('slow');
            $('.currentPlayer').html(newGame.currentPlayer.name);
            newGame.fight();                       
        }
    }
    //Fonction pour le combat (attaque/défense)
    fight(){
    let defense = false
    $('#defense').on('click', function(){
        defense = true;
        newGame.turn();
        $('.currentPlayer').html(newGame.currentPlayer.name)
    });
    $('#attack').on('click', function(){
        if (defense === false){
            newGame.currentEnemy.hp = newGame.currentEnemy.hp - newGame.currentPlayer.weapon.dmg;
            $('#hpPlayer1').html(player1.hp);
            $('#hpPlayer2').html(player2.hp);
            newGame.victory();   
            newGame.turn();
        $('.currentPlayer').html(newGame.currentPlayer.name);
        defense = false;
            
        } else if ( defense === true){
            newGame.currentEnemy.hp = newGame.currentEnemy.hp - (newGame.currentPlayer.weapon.dmg / 2);
            $('#hpPlayer1').html(player1.hp);
            $('#hpPlayer2').html(player2.hp);
            newGame.victory(); 
            newGame.turn();
            $('.currentPlayer').html(newGame.currentPlayer.name)
            defense = false;        
        }
    }); 
    }
    //Fonction pour afficher le joueur qui a gagné la partie et affichage du bouton pour recommencer une partie 
    victory(){
        if (newGame.currentEnemy.hp <= 0){
            $('#attack').fadeOut('fast');
            $('#defense').fadeOut('fast');
            $('#ring').slideUp('slow');                    
            $('#result').delay(800).slideDown('slow');
            $('#winner').html(newGame.currentPlayer.name+' a gagné la partie !!!')
            $('#retry').on('click', function(){
                location.reload();
            });
        }
    }  
}