var imageArray1 = ["assets/images/cultural_fests/float0.jpg", "assets/images/cultural_fests/float1.jpg", "assets/images/cultural_fests/jallikattu0.jpg", "assets/images/cultural_fests/jallikattu1.jpeg", "assets/images/cultural_fests/pongal0.jpg", "assets/images/cultural_fests/pongal1.jpg", "assets/images/places/athisayam0.jpeg", "assets/images/places/athisayam1.jpg", "assets/images/places/athisayam2.jpg", "assets/images/places/meenakshi0.jpg", "assets/images/places/meenakshi1.jpg", "assets/images/places/meenakshi2.jpg", "assets/images/places/tn-palace0.jpg", "assets/images/places/tn-palace1.jpg", "assets/images/places/tn-palace2.jpg"];
var imageArray2 = ["assets/images/places/tn-palace0.jpg", "assets/images/places/tn-palace1.jpg", "assets/images/places/tn-palace2.jpg"];
var imageArray3 = ["assets/images/places/meenakshi0.jpg", "assets/images/places/meenakshi1.jpg", "assets/images/places/meenakshi2.jpg"];
var imageArray4 = ["assets/images/places/athisayam0.jpeg", "assets/images/places/athisayam1.jpg", "assets/images/places/athisayam2.jpg"];
var imageArray5 = ["assets/images/cultural_fests/jallikattu0.jpg", "assets/images/cultural_fests/jallikattu1.jpeg"];
var imageArray6 = ["assets/images/cultural_fests/pongal0.jpg", "assets/images/cultural_fests/pongal1.jpg"];
var imageArray7 = ["assets/images/cultural_fests/float0.jpg", "assets/images/cultural_fests/float1.jpg"];

setInterval(runit, 2000);

var x1 = 1;
var x2 = 1;
var x3 = 1;
var x4 = 1;
var x5 = 1;
var x6 = 1;
var x7 = 1;

//Function runit play slideshow when called 
function runit() {
    runit_home();
    runit_places();
    runit_cultural();

}
function runit_home(){
    
    if(document.getElementById('slideshow_home'))
    {
        document.getElementById('slideshow_home').src = imageArray1[x1];
        x1++;
    }
    if (x1 === imageArray1.length) {
        x1 = 0;
    }
}
function runit_places(){
    if(document.getElementById('slideshow_tn'))
    {
        document.getElementById('slideshow_tn').src = imageArray2[x2];
        x2++;
    }
    if (x2 === imageArray2.length) {
        x2 = 0;
    }
    if(document.getElementById('slideshow_ma'))
    {
        document.getElementById('slideshow_ma').src = imageArray3[x3];
        x3++;
    }
    if (x3 === imageArray3.length) {
        x3 = 0;
    }
    if(document.getElementById('slideshow_at'))
    {
        document.getElementById('slideshow_at').src = imageArray4[x4];
        x4++;
    }
    if (x4 === imageArray4.length) {
        x4 = 0;
    }
}
function runit_cultural(){
    if(document.getElementById('slideshow_jk'))
    {
        document.getElementById('slideshow_jk').src = imageArray5[x5];
        x5++;
    }
    if (x5 === imageArray5.length) {
        x5 = 0;
    }
    if(document.getElementById('slideshow_pf'))
    {
        document.getElementById('slideshow_pf').src = imageArray6[x6];
        x6++;
    }
    if (x6 === imageArray6.length) {
        x6 = 0;
    }
    if(document.getElementById('slideshow_ff'))
    {
        document.getElementById('slideshow_ff').src = imageArray7[x7];
        x7++;
    }
    if (x7 === imageArray7.length) {
        x7 = 0;
    }
}

