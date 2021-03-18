//CREATE CLASS
class Header {
    //CREARE CONSTRUCTOR
    constructor() {

    }

    Logo(l) { //ADD LOGO BY METHOD
        return l;
    }

}
//CREATE NAV (CHILD CLASS)  EXTENDS IN HEADER (PARENT CLASS) BY INHARITANCE
class Nav extends Header {
    //CREATE CUNSTRUCTOR
    constructor() {
        super();
        //CRAETE VAR BY IN ENCAPSULATION
        var tabName;
        var tabLink;

    }

    gettabName() {
        return this.tabName;
    }
    settabName(tabName) {
        this.tabName = tabName;
    }
    gettabLink() {
        return this.tabLink;
    }
    settabLink(tabLink) {
        this.tabLink = tabLink;
    }


}

//CREATE ONJECT FOR HEADER (PARENT CLASS)
var lo = new Header();

//CREATE OBKECTS FOR NAV (CHILD CLASS)
var nav01 = new Nav();
var nav02 = new Nav();
var nav03 = new Nav();
var nav04 = new Nav();
var nav05 = new Nav();
var nav06 = new Nav();

//ADDING VALUE IN OBJECT.PROPERTY METHOD
nav01.settabName("Home");
nav01.settabLink("index.html");

nav02.settabName("Key Features");
nav03.settabLink("key.html");

nav03.settabName("Pricing");
nav03.settabLink("price.html");

nav04.settabName("Testimonial");
nav04.settabLink("testi.html");

nav05.settabName("FAQ");
nav05.settabLink("faq.html");


//CREATE ARRAY
var nav_arr = [nav01, nav02, nav03, nav04, nav05];

//ACCESS HEADER FROM INDEX.HTML
document.querySelector('header').innerHTML += `
     <div class="container">
           <div class="row">
               <div class="col-md-4">
                     <div class="logo">
                         <h1><strong>${lo.Logo("<span class='orange'>App</span>Lab")}</strong></h1>
						 <i class="fa fa-bars menu" style="font-size:34px" onclick="my_menu()"></i>
                     </div>
                     <!--//logo-->
               </div>
               <!--//col-md-4-->
               <div class="col-md-8">
                     <nav>
                         <ul class="navbar-nav nav"></ul>
						<a href="#" class="blue_btn">Try for free</a>
                     </nav>
                     <!--//nav-->
               </div>
               <!--//col-md-8-->
           </div>
           <!--//row-->
     </div>
     <!--//container-->
`;


for (var i in nav_arr) {
    document.querySelector('nav>ul').innerHTML += `
       <li><a href="${nav_arr[i].gettabLink()}">${nav_arr[i].gettabName()}</a></li>
    `;

}


