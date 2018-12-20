class Box {

	constructor(i,j){
		this.sourceX= 0;
		this.sourceY=0;
		this.size= 64;
		this.image = new Image();
		this.image.src= "images/box.png";

		//x and y position
		this.i = i;
		this.j = j;

		this.isColliding= true;
		this.isFalling= false;

	}

	draw(){
		document.querySelector("canvas").getContext("2d").drawImage(
			this.image,
			0, 0, 64, 64,//source image
			//TODO!
			this.j*64,this.i*64,64,64 //dest,width
		)
	}

	rotateLeft() {
		var temp=this.i;
		
		this.i=9-this.j;
		this.j=this.temp;
	}

}