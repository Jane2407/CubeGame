class Level {


	constructor(worldGrid, rows, cols) {

		this.platform=worldGrid;
		this.rows = rows;
		this.cols = cols;

		for (var i = 0; i < this.rows; i++)
		{
			for (var j = 0; j < this.cols; j++)
			{
				if(this.platform[i][j]==="*"){
					//bricks.push(new newBrick(j*64,i*64));
					this.platform[i][j]=new Brick(j*64,i*64);
				} else if (this.platform[i][j]==="-"){
					this.platform[i][j]=new Background(j*64,i*64);
				} else if (this.platform[i][j]==="p"){
					this.platform[i][j]=new Player(j*64,i*64);
				}
			}
		}
	}

	getElement(r,c) {
		return this.platform[r][c];
	}

	setElement(r,c,e) {
		return this.platform[r][c]= e;
	}

	getRows() {
		return this.rows;
	}

	getColumns() {
		return this.cols;
	}

	draw() {
		for (var i = 0; i < this.rows; i++)
		{
			for (var j = 0; j < this.cols; j++)
			{
				this.platform[j][i].draw();
			}
		}
	}
}