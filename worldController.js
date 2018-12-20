class WorldController 
{
	constructor(world) 
	{
		this.world = world;
		this.playerLostLife = false;
	}

	movePlayer(keyCode){



		var collidableObj = [];

		for (var i = 0; i < this.world.bricks.length; i++)
		{
			collidableObj.push(this.world.bricks[i]);
		}

		for (var i = 0; i < this.world.boxes.length; i++)
		{
			collidableObj.push(this.world.boxes[i]);
		}

		for (var i = 0; i < collidableObj.length; i++)
		{ 
			if (collidableObj[i].i === this.world.player.i && collidableObj[i].j === this.world.player.j-1)
			{  
				this.world.player.collidingLeft=true;
				break;
			} else {
				this.world.player.collidingLeft=false;
			}
		}

		for (var i = 0; i < collidableObj.length; i++)
		{ 
			if (collidableObj[i].i === this.world.player.i && collidableObj[i].j === this.world.player.j+1)
			{  
				this.world.player.collidingRight=true;
				break;
			} else {
				this.world.player.collidingRight=false;
			}
		}


		if (keyCode=="97"&& !this.world.player.collidingLeft) 
		{


			for (var i = 0; i < this.world.spikes.length; i++)
			{
				if(this.world.spikes[i].i==this.world.player.i && this.world.spikes[i].j==this.world.player.j-1) {
					this.world.player.lifes--;
					this.playerLostLife = true;
					console.log("you lost life");
				
					break;
				}
			}
			this.world.player.j--;

		} else if (keyCode=="100" &&!this.world.player.collidingRight) {


			for (var i = 0; i < this.world.spikes.length; i++)
			{
				if(this.world.spikes[i].i==this.world.player.i && this.world.spikes[i].j==this.world.player.j+1) {
					this.world.player.lifes--;
					console.log("you lost life");
					this.playerLostLife = true;
					break;
				}
			}
			this.world.player.j++;
		}
	}



	rotateLevel (keyCode) {

		if (keyCode=="113") {

			for (var i = 0; i < this.world.boxes.length; i++)
			{

				var temp= this.world.boxes[i].i;
				this.world.boxes[i].i= 9 - this.world.boxes[i].j;
				this.world.boxes[i].j=temp;

			}
			for (var i = 0; i < this.world.bricks.length; i++)
			{
				var temp= this.world.bricks[i].i;
				this.world.bricks[i].i= 9 - this.world.bricks[i].j;
				this.world.bricks[i].j=temp;
			}
			for (var i = 0; i < this.world.doors.length; i++)
			{
				var temp= this.world.doors[i].i;
				this.world.doors[i].i= 9 - this.world.doors[i].j;
				this.world.doors[i].j=temp;
			}
			for (var i = 0; i < this.world.keys.length; i++)
			{
				var temp= this.world.keys[i].i;
				this.world.keys[i].i= 9 - this.world.keys[i].j;
				this.world.keys[i].j=temp;
			}
			for (var i = 0; i < this.world.spikes.length; i++)
			{
				var temp= this.world.spikes[i].i;
				this.world.spikes[i].i= 9 - this.world.spikes[i].j;
				this.world.spikes[i].j=temp;
			}
			var temp= this.world.player.i;
			this.world.player.i= 9 - this.world.player.j;
			this.world.player.j=temp;

		} else if (keyCode==101) {

			for (var i = 0; i < this.world.boxes.length; i++)
			{
				var temp= this.world.boxes[i].j;
				this.world.boxes[i].j= 9 - this.world.boxes[i].i;
				this.world.boxes[i].i=temp;
			}
			for (var i = 0; i < this.world.bricks.length; i++)
			{
				var temp= this.world.bricks[i].j;
				this.world.bricks[i].j= 9 - this.world.bricks[i].i;
				this.world.bricks[i].i=temp;
			}
			for (var i = 0; i < this.world.doors.length; i++)
			{
				var temp= this.world.doors[i].j;
				this.world.doors[i].j= 9 - this.world.doors[i].i;
				this.world.doors[i].i=temp;
			}
			for (var i = 0; i < this.world.keys.length; i++)
			{
				var temp= this.world.keys[i].j;
				this.world.keys[i].j= 9 - this.world.keys[i].i;
				this.world.keys[i].i=temp;
			}
			for (var i = 0; i < this.world.spikes.length; i++)
			{
				var temp= this.world.spikes[i].j;
				this.world.spikes[i].j= 9 - this.world.spikes[i].i;
				this.world.spikes[i].i=temp;
			}
			var temp= this.world.player.j;
			this.world.player.j= 9 - this.world.player.i;
			this.world.player.i=temp;
		}

	}

	draw()
	{
		this.world.draw();
	}


	playerFall()
	{
		if(this.world.player.isFalling && !this.world.player.isColliding) {
			this.world.player.i++;

			for (var i=0; i<this.world.spikes.length;i++){
				if(this.world.spikes[i].i==this.world.player.i+1 && this.world.spikes[i].j==this.world.player.j) {
					this.world.player.lifes--;
					console.log('you lost life');
					this.playerLostLife = true;
					break;
				}
			}
		}

	}

	boxFall()
	{
		for (var i=0; i < this.world.boxes.length; i++){

			if(this.world.boxes[i].isFalling && !this.world.boxes[i].isColliding) {
				this.world.boxes[i].i++;
			}
		}
	}

	checkPlayerColliding() {

		var collidableObj = [];
		for (var i = 0; i < this.world.bricks.length; i++)
		{
			collidableObj.push(this.world.bricks[i]);
		}

		for (var i = 0; i < this.world.boxes.length; i++)
		{
			collidableObj.push(this.world.boxes[i]);
		}




		for (var i = 0; i < collidableObj.length; i++)
		{
			if (collidableObj[i].i === this.world.player.i + 1 && collidableObj[i].j === this.world.player.j)
			{
				this.world.player.isColliding = true;
				this.world.player.isFalling = false;
				break;
			} else {
				this.world.player.isColliding = false;
				this.world.player.isFalling = true;
			}
		}
	}

	checkBoxColliding() {

		var collidableObj = [];
		for (var i = 0; i < this.world.bricks.length; i++)
		{
			collidableObj.push(this.world.bricks[i]);
		}

		for (var i = 0; i < this.world.boxes.length; i++)
		{
			collidableObj.push(this.world.boxes[i]);
		}

		for (var i = 0; i < this.world.keys.length; i++)
		{
			collidableObj.push(this.world.keys[i]);
		}

		for (var i = 0; i < this.world.doors.length; i++)
		{
			collidableObj.push(this.world.doors[i]);
		}

		for (var i = 0; i < this.world.spikes.length; i++)
		{
			collidableObj.push(this.world.spikes[i]);
		}

		collidableObj.push(this.world.player);


		for (var j=0; j < this.world.boxes.length; j++){

			for (var i = 0; i < collidableObj.length; i++)
			{

				if (collidableObj[i].i === this.world.boxes[j].i + 1 && collidableObj[i].j === this.world.boxes[j].j)
				{
					this.world.boxes[j].isColliding = true;
					this.world.boxes[j].isFalling = false;
					break;
				} else {
					this.world.boxes[j].isColliding = false;
					this.world.boxes[j].isFalling = true;
				}
			}
		}
	}

	checkKey(){
		for (var i = 0; i < this.world.keys.length; i++)
		{
			if(this.world.keys[i].i==this.world.player.i && this.world.keys[i].j==this.world.player.j){
				this.world.player.hasKey=true;
				this.world.keys[i].isTaken=true;
				for (var i = 0; i < this.world.doors.length; i++){
					this.world.doors[i].isOpen=true;
				}
			}
		}
	}

	checkWin(){

		for (var i = 0; i < this.world.doors.length; i++)
		{
			if(this.world.doors[i].i==this.world.player.i && this.world.doors[i].j==this.world.player.j){

				console.log("you win!");
			}

		}
	}


}

