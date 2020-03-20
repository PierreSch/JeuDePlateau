class Board {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    //Fonction pour créer la grille du board
    generateGrid(row, column) {
        for(let y = 0; y < row; y++){        
            $('#grid').append('<div id="y'+y+'" class = "row rowBox justify-content-center" style="overflow: hidden;"></div>');
            for(let x = 0; x < column; x++){
                $('#y'+y).append('<div id="y'+y+'_x'+x+'" class = "box empty"></div>');  
            }
        }
    }
    //Fonction pour faire apparaitre les obstacle sur les case libre
    generateObstacle(nbrObstacle) {
        for(let i = 0; i < nbrObstacle; i++){
            let x = Math.floor(Math.random() * (this.column));
            let y = Math.floor(Math.random() * (this.row));
            if ($('#y'+y+'_x'+x).hasClass('empty')) {
                $('#y'+y+'_x'+x).addClass('obstacle').removeClass('empty').append(transformImg(skinObstacle));
            } else {
                i--;
            }
        } 
    }
    //Fonction pour faire apparaitre les joueurs et les armes
    spawn(element){
        let x = Math.floor(Math.random() * (this.column));
        let y = Math.floor(Math.random() * (this.row));
        if ($('#y'+y+'_x'+x).not('.adjacentBox').not('.player').not('.weapon').hasClass('empty')) {
            $('#y'+y+'_x'+x).append(transformImg(element.img)).addClass(element.style)
            element.id = 'y'+y+'_x'+x;
            //Ajoute la classe adjacent pour que les joueuer ne spawn pas cote a cote
            if(element == player1 || element == player2){
                $('#y'+y+'_x'+x).removeClass('empty');
                $('#y'+y+'_x'+(x-1)).addClass('adjacentBox');
                $('#y'+y+'_x'+(x+1)).addClass('adjacentBox');
                $('#y'+(y+1)+'_x'+x).addClass('adjacentBox');
                $('#y'+(y-1)+'_x'+x).addClass('adjacentBox');
            }
        } else {
            this.spawn(element)
        }
    }
    //Fonction qui envoi les joueurs et les armes dans la méthode pour les faire apparaitre
    generateWeaponAndPlayer(weapons){
        const element = [weapon1, weapon2, weapon3, weapon4, player1, player2];
        //Ajoute le tableau des armes supplementaire
        const allElement = element.concat(weapons);
        allElement.forEach(element => {
            this.spawn(element);
        });
    }
    //Methode pour ajouter des armes sur le board
    spawnMoreWeapons(number){
    let weapons = [];
    for (let i=0; i<number; i++){          
        let randomNumber = Math.floor(Math.random() * (4));
        if (randomNumber == 0){
            weapons.push(new Weapon(15, skinWeapon1, "weapon"))
        } else if (randomNumber == 1){
            weapons.push(new Weapon(20, skinWeapon2, "weapon"))
        } else if (randomNumber == 2){
            weapons.push(new Weapon(25, skinWeapon3, "weapon"))
        } else if (randomNumber == 3){
            weapons.push(new Weapon(30, skinWeapon4, "weapon"))
        }
    }
    return weapons;       
    } 
};



