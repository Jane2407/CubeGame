setInterval(gameLoop, 250);
var keyCode;
var worldGrid = [
	['*','*','*','*','*','*','*','*','*','*'],
	['*','-','k','*','-','-','-','s','s','*'],
	['*','-','-','*','-','-','-','-','s','*'],
	['*','-','-','*','-','-','-','-','-','*'],
	['*','s','-','-','-','-','-','-','-','*'],
	['*','s','-','-','-','-','*','-','-','*'],
	['*','b','-','-','-','-','*','-','-','*'],
	['*','*','*','-','-','-','*','-','-','*'],
	['*','-','b','-','p','-','*','b','d','*'],
	['*','*','*','*','*','*','*','*','*','*'],
];

var world = new World(worldGrid,10,10);
var worldController = new WorldController(world);



function gameLoop()
{

	
	worldController.draw();
	worldController.checkPlayerColliding();
	worldController.checkBoxColliding();
	worldController.playerFall();
	worldController.boxFall();
	if(worldController.playerLostLife&&worldController.world.player.lifes>0)
	{
		var temp = worldController.world.player.lifes;
		var worldGrid = [
			['*','*','*','*','*','*','*','*','*','*'],
			['*','-','k','*','-','-','-','s','s','*'],
			['*','-','-','*','-','-','-','-','s','*'],
			['*','-','-','*','-','-','-','-','-','*'],
			['*','s','-','-','-','-','-','-','-','*'],
			['*','s','-','-','-','-','*','-','-','*'],
			['*','b','-','-','-','-','*','-','-','*'],
			['*','*','*','-','-','-','*','-','-','*'],
			['*','-','b','-','p','-','*','b','d','*'],
			['*','*','*','*','*','*','*','*','*','*'],
		];
		worldController= new WorldController(new World(worldGrid,10,10));
		worldController.world.player.lifes = temp;
	}

	if(worldController.world.player.lifes>0){
		document.getElementById("lives").innerHTML="You have "+ worldController.world.player.lifes+" lives";
	} else {
		document.getElementById("lives").innerHTML="You don't have any lives";
	}

	if (worldController.world.player.hasKey){
		document.getElementById("key").innerHTML="You have the key";
	}

}

document.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
	if (!worldController.world.player.isFalling){
		if(event.which=="101" || event.which=="113"){
			worldController.rotateLevel(event.which);
		} else if (event.which=="97" || event.which=="100"){
			worldController.movePlayer(event.which);
		}
	}
	if(!worldController.world.player.hasKey){
		worldController.checkKey();
	} else {
		worldController.checkWin();
	}


}

