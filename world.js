class World {


	constructor(worldGrid, rows, cols) {

		this.worldGrid=worldGrid;
		this.rows = rows;
		this.cols = cols;

		this.boxes = [];
		this.bricks = [];
		this.doors = [];
		this.keys = [];
		this.spikes = [];
		this.player;



		for (var i = 0; i < this.rows; i++)
		{
			for (var j = 0; j < this.cols; j++)
			{
				if(this.worldGrid[i][j]==="*"){
					this.bricks.push(new Brick(i,j));
				} else if (this.worldGrid[i][j]==="d"){
					this.doors.push(new Door(i,j));
				} else if (this.worldGrid[i][j]==="k"){
					this.keys.push(new Key(i,j));
				} else if (this.worldGrid[i][j]==="b"){
					this.boxes.push(new Box(i,j));
				} else if (this.worldGrid[i][j]==="p"){
					this.player = new Player(i,j);
				} else if (this.worldGrid[i][j]==="s"){
					this.spikes.push(new Spikes(i,j));
				}
			}
		}
	}

	draw(){
		document.querySelector("canvas").getContext("2d").clearRect(0,0,639,639);
		
		for (var i = 0; i < this.boxes.length; i++)
		{
			this.boxes[i].draw();
		}
		for (var i = 0; i < this.bricks.length; i++)
		{
			this.bricks[i].draw();
		}
		for (var i = 0; i < this.doors.length; i++)
		{
			this.doors[i].draw();
		}
		for (var i = 0; i < this.keys.length; i++)
		{
			this.keys[i].draw();
		}
		for (var i = 0; i < this.spikes.length; i++)
		{
			this.spikes[i].draw();
		}
		this.player.draw();
	}
}