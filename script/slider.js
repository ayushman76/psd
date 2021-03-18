//CREATE CLASS (PARENT CLASS)
class Slider {
	 constructor(content){
	     this.content = content;
		 
	 }
}
class Image extends Slider{
	  constructor(img){
			super();
			this.img = img;
	  }
	 
}

var t01 = new Slider("#1 Editiors Choice App of 2020");
var h01 = new Slider("Best app for your modern lifestyle");
var para01 = new Slider("Increase your productivity with a simple to-do app.app for managing your personal budgets ");
var b01 = new Slider("Try for free")

var img01 = new  Image("images/phone.png");


document.querySelector('section').innerHTML+=`
    <div class="container">
	     <div class="row">
				  <div class="col-md-8">
					   <div class="my_content">
						<p class="tag"><i class="fa fa-check-circle" style="font-size:24px"></i> <b>${t01.content}</b></p>
						<h1 class="content_head"><b>${h01.content}</b></h1>
						<p>${para01.content}</p>
						 <div class="rotatetime">
						     <img src="images/shape.svg">
						 </div>
						
						<a href="#" class="blue_btn">${b01.content}</a><span ></span>
						
				      </div>
				  </div>
				  <div class="col-md-4">
				      <div class="my_phone">
					       <img src="${img01.img}" class="img-responsive phone">
					  </div>
				  </div>
		 </div>
	</div>
`;

