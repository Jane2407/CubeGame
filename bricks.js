class Brick {

	constructor(i,j) {
		this.i = i;
		this.j = j;

		this.image = new Image();
		this.image.src= "images/brick.png";


	}

	draw() {
			document.querySelector("canvas").getContext("2d").drawImage(
			this.image,
			0, 0, 64, 64,//source image
			this.j*64,this.i*64,64,64 //dest,width
		);	
	}
}