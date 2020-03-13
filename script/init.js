//Création des instance de classe pour les armes, les personnages et le board
const weaponP1 = new Weapon(10, skinWeapon0, "weapon");
const weaponP2 = new Weapon(10, skinWeapon0, "weapon");
const weapon1 = new Weapon(15, skinWeapon1, "weapon");
const weapon2 = new Weapon(20, skinWeapon2, "weapon");
const weapon3 = new Weapon(25, skinWeapon3, "weapon");
const weapon4 = new Weapon(30, skinWeapon4, "weapon");
const player1 = new Player("Joueur 1", 100, skinPlayer1, "player", weaponP1);
const player2 = new Player("Joueur 2", 100, skinPlayer2, "player", weaponP2);
const newGame = new Game();
const newBoard = new Board(row,column);
//utilisation des methodes generer le board et faire apparaitre les element
newBoard.generateGrid(row,column);
newBoard.generateObstacle(obstacle);
const weapons = newBoard.spawnMoreWeapons(moreWeapons);
newBoard.generateWeaponAndPlayer(weapons);
newGame.currentPlayer.viewRoad(player1.name);
newGame.displacement(weapons);
//genere le theme
generateTheme();




























