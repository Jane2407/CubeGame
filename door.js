class Door {

	constructor(i,j) {
		this.i = i;
		this.j = j;

		this.image = new Image();
		this.image.src= "images/door.png";

		this.isOpen= false;

	}

	draw() {
		if(!this.isOpen){
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
		};	
	}

	rotate() {
		//to do
		//var img=document.getElementById('image');
		//img.setAttribute('style','transform:rotate(90deg)');
	}

}