class Player {

	constructor(i,j){
		this.sourceX= 0;
		this.sourceY=0;
		this.size= 64;
		this.curFrame=0;
		this.numFrames=1;
		this.image = new Image();
		this.image.src= "images/monster.png";

		//x and y position
		this.i = i;
		this.j = j;

		this.isFalling= false;
		this.hasKey= false;
		this.isDead= false;
		this.lifes= 3;
		this.maxLives= 3;
		this.isColliding=true;
		this.collidingLeft=false;
		this.collidingRight=false;
	}

	draw(){
		if(!this.isFalling){
			document.querySelector("canvas").getContext("2d").drawImage(
				this.image,
				0, 0, 64, 64,//source image
				this.j*64,this.i*64,64,64 //dest,width
			)
		} else {
			document.querySelector("canvas").getContext("2d").drawImage(
				this.image,
				64, 0, 64, 64,//source image
				this.j*64,this.i*64,64,64 //dest,width
			)
		}
	}

	checkKey() {
		if (Player instanceof key) {
			this.hasKey=true;
		}	
	}


}
