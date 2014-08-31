var n = prompt("Enter an Integer. Ten Digits or Less.", "");

var nsize = n.toString()
var nsizehun = nsize.slice(-2)
var nsizethous = nsize.slice(-3)
var nsizetenthous = nsize.slice(-4)
var nsizehunthous = nsize.slice(-5)
var nsizemil = nsize.slice(-6)
var nsizetenmil = nsize.slice(-7)
var nsizehunmil = nsize.slice(-8)
var nsizebil = nsize.slice(-9)
var nsizetenbil = nsize.slice(-10)

var nsizehunb = nsizehun.slice(0,1)
var nsizethousb = nsizethous.slice(0,1)
var nsizetenthousb = nsizetenthous.slice(0,1)
var nsizehunthousb = nsizehunthous.slice(0,1)
var nsizemilb = nsizemil.slice(0,1)
var nsizetenmilb = nsizetenmil.slice(0,1)
var nsizehunmilb = nsizehunmil.slice(0,1)
var nsizebilb = nsizebil.slice(0,1)
var nsizetenbilb = nsizetenbil.slice(0,1)

var nsizehunnum = parseInt(nsizehunb)
var nsizethousnum = parseInt(nsizethousb)
var nsizetenthousnum = parseInt(nsizetenthousb)
var nsizehunthousnum = parseInt(nsizehunthousb)
var nsizemilnum = parseInt(nsizemilb)
var nsizetenmilnum = parseInt(nsizetenmilb)
var nsizehunmilnum = parseInt(nsizehunmilb)
var nsizebilnum = parseInt(nsizebilb)
var nsizetenbilnum = parseInt(nsizetenbilb)


var tens = n % 10;

var hundreds = n %  100
   
 var thous = n %     1000  
var tenthous = n %  10000

var hunthous = n %  100000;
var mil		= n %   1000000;
var tenmil    = n % 10000000;
var hunmil    = n % 100000000;
var bil    = n %    1000000000;
var tenbil  = n %   10000000000;





var hundig = hundreds.toString();
var hundigvalue = hundig.slice(0,1);
var hundignum = parseInt(hundigvalue);
var hundignumcalc = hundignum;


if (nsize.length < 2) {
hundignumcalc = 0
}
else if (nsizehun.length < 2) {
hundignumcalc = 0
}
else if (nsizehunnum === 0) {
hundignumcalc = 0
}
else {

}








var thousdig = thous.toString();
var thousdigvalue = thousdig.slice(0,1);
var thousdignum = parseInt(thousdigvalue);
var thousdignumcalc = thousdignum;



if (nsize.length < 3) {
thousdignumcalc = 0
}
else if (nsizethous.length < 3) {
thousdignumcalc = 0
}
else if (nsizethousnum === 0) {
thousdignumcalc = 0
}
else {

}









var tenthousdig = tenthous.toString();
var tenthousdigvalue = tenthousdig.slice(0,1);
var tenthousdignum = parseInt(tenthousdigvalue);
var tenthousdignumcalc = tenthousdignum;



if (nsize.length < 4) {
tenthousdignumcalc = 0
}
else if (nsizetenthous.length < 4) {
tenthousdignumcalc = 0
}
else if (nsizetenthousnum === 0) {
tenthousdignumcalc = 0
}
else {
}




var hunthousdig = hunthous.toString();
var hunthousdigvalue = hunthousdig.slice(0,1);
var hunthousdignum = parseInt(hunthousdigvalue);
var hunthousdignumcalc = hunthousdignum;



if (nsize.length < 5) {
hunthousdignumcalc = 0
}
else if (nsizehunthous.length < 5) {
hunthousdignumcalc = 0
}
else if (nsizehunthousnum === 0) {
hunthousdignumcalc = 0
}
else {
}



var mildig = mil.toString();
var mildigvalue = mildig.slice(0,1);
var mildignum = parseInt(mildigvalue);
var mildignumcalc = mildignum;

if (nsize.length < 6) {
mildignumcalc = 0
}
else if (nsizemil.length < 6) {
mildignumcalc = 0
}
else if (nsizemilnum === 0) {
mildignumcalc = 0
}
else {
}





var tenmildig = tenmil.toString();
var tenmildigvalue = tenmildig.slice(0,1);
var tenmildignum = parseInt(tenmildigvalue);
var tenmildignumcalc = tenmildignum;

if (nsize.length < 7) {
tenmildignumcalc = 0
}
else if (nsizetenmil.length < 7) {
tenmildignumcalc = 0
}
else if (nsizetenmilnum === 0) {
tenmildignumcalc = 0
}
else {
}





var hunmildig = hunmil.toString();
var hunmildigvalue = hunmildig.slice(0,1);
var hunmildignum = parseInt(hunmildigvalue);
var hunmildignumcalc = hunmildignum;

if (nsize.length < 8) {
hunmildignumcalc = 0
}
else if (nsizehunmil.length < 8) {
hunmildignumcalc = 0 
}
else if (nsizehunmilnum === 0) {
hunmildignumcalc = 0
}
else {
}




var bildig = bil.toString();
var bildigvalue = bildig.slice(0,1);
var bildignum = parseInt(bildigvalue);
var bildignumcalc = bildignum;

if (nsize.length < 9) {
bildignumcalc = 0 
}
else if (nsizebil.length < 9) {
bildignumcalc = 0
}
else if (nsizebilnum === 0) {
bildignumcalc = 0
}
else {
}




var tenbildig = tenbil.toString();
var tenbildigvalue = tenbildig.slice(0,1);
var tenbildignum = parseInt(tenbildigvalue);
var tenbildignumcalc = tenbildignum;

if (nsize.length < 10) {
tenbildignumcalc = 0
}
else if (nsizetenbil.length < 10) {
tenbildignumcalc = 0
}
else if (nsizetenbilnum === 0) {
tenbildignumcalc = 0
}
else {
}









var calc = (tens * 1) + (hundignumcalc *2) + (thousdignumcalc * 4) + 
(tenthousdignumcalc * 8) + (hunthousdignumcalc * 16) + (mildignumcalc * 32) + (tenmildignumcalc *64)
+ (hunmildignumcalc * 128) + (bildignumcalc * 256) + (tenbildignumcalc * 512);


document.write("This is the number you entered.")
document.write("<br />")
document.write(n);
	document.write("<br />")
	
	
	
document.write("This is the equivalent in Binary Multiplier Cipher")
document.write("<br />")
document.write(calc);
document.write("<br />")
