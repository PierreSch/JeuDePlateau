class Player {
    constructor (name, hp, img, style, weapon, id) {
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.style = style;
        this.weapon = weapon;
        this.id = id;
        
    }
    //Fonction pour vérifier les case libre pour le déplacement
    checkBox(direction, id){
    //Récupération de la valeur de x et y    
        let regExX = /y[0-9]{1,}_x/;
        let regExY = /(y|_x[0-9]{1,})/g;
        let y = parseInt($('#'+id).attr('id').toString().replace(regExY,''));
        let x = parseInt($('#'+id).attr('id').toString().replace(regExX,''));
        for (let i=1; i<4;i++){
            if (direction === 'bas'){
                if ($('#y'+(y+i)+'_x'+x).hasClass('empty')){
                    $('#y'+(y+i)+'_x'+x).toggleClass('move');                  
                } else {                   
                break;
                }
            } else if (direction === 'haut'){
                if ($('#y'+(y-i)+'_x'+x).hasClass('empty')){
                    $('#y'+(y-i)+'_x'+x).toggleClass('move');                  
                } else {                   
                break;
                }
            } else if (direction === 'droite'){
                if ($('#y'+y+'_x'+(x+i)).hasClass('empty')){
                    $('#y'+y+'_x'+(x+i)).toggleClass('move');                  
                } else {                   
                break;
                }
            } else if (direction === 'gauche'){
                if ($('#y'+y+'_x'+(x-i)).hasClass('empty')) {
                    $('#y'+y+'_x'+(x-i)).toggleClass('move');                  
                } else {                   
                break;
                }
            }
        }
    }
    //Affichage des case libre pour déplacement    
    viewRoad(player) {
        if (player === newGame.currentPlayer.name) {
            this.checkBox('gauche',newGame.currentPlayer.id);
            this.checkBox('haut',newGame.currentPlayer.id); 
            this.checkBox('droite',newGame.currentPlayer.id); 
            this.checkBox('bas',newGame.currentPlayer.id);                           
        }
    }
    //Fonction pour déplacer le joueur sur les case libre
    movePlayer(click){
        let id = newGame.currentPlayer.id;
        $('#'+id).removeClass('player').addClass('box').addClass('empty');
        $('#'+id+' img:first-child').remove();
        $(click).addClass(newGame.currentPlayer.style).removeClass('empty');       
        $(transformImg(newGame.currentPlayer.img)).appendTo(click);
        newGame.currentPlayer.id = $(click).attr('id');
    }    
};
