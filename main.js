let yhteensa=0;
let vuoro=0;
pelaajat=[];
var pelaajat;
let kolmeparia=0;

var face0=new Image()
face0.src="img/d1.gif"
var face1=new Image()
face1.src="img/d2.gif"
var face2=new Image()
face2.src="img/d3.gif"
var face3=new Image()
face3.src="img/d4.gif"
var face4=new Image()
face4.src="img/d5.gif"
var face5=new Image()
face5.src="img/d6.gif"

function aloitaPeli(){
    if(pelaajat.length>1){
    yhteensa=0;
    document.querySelector('#pisteet').innerHTML='0';
    document.querySelector('#heittaja').innerHTML='';    
    let heittaja=document.createElement('p');
    let uusiheittaja=document.createTextNode("Heittovuorossa on "+pelaajat[vuoro].nimi);
    heittaja.appendChild(uusiheittaja);
    heittaja.className=('#kuka'); 
    document.querySelector('#heittaja').appendChild(heittaja);
    }else{
        alert("Syötä lisää pelaajia!")}       
}

function heita(){
    let nopanluvutyhteensa=0
   
    //create a random integer between 0 and 5
    var nopanluku=Math.round(Math.random()*5)
    var nopanluku2=Math.round(Math.random()*5)
    document.images["mydice"].src=eval("face"+nopanluku+".src") 
    document.images["mydice2"].src=eval("face"+nopanluku2+".src")    
    var oikeanopanluku=nopanluku+1
    var oikeanopanluku2=nopanluku2+1
        if(oikeanopanluku==1&&oikeanopanluku2==1){
            nopanluvutyhteensa=25;
            kolmeparia++
        }
        else if(oikeanopanluku==oikeanopanluku2){
            nopanluvutyhteensa=(oikeanopanluku+oikeanopanluku2)*2;
            kolmeparia++

        }else{
            nopanluvutyhteensa=oikeanopanluku+oikeanopanluku2;
            kolmeparia=0
        }

    yhteensa= yhteensa+nopanluvutyhteensa;  
    document.querySelector('#pisteet').innerHTML='';    
    let pisteet=document.createElement('p');
    let uusipisteet=document.createTextNode(yhteensa);
    pisteet.appendChild(uusipisteet);
    pisteet.className=('nimilista'); 
    document.querySelector('#pisteet').appendChild(pisteet);
if (kolmeparia==3){
    alert("Heitit kolmannet tuplat!\nVuoro siirtyy seuraavalle!");
}    
if (oikeanopanluku==1&&oikeanopanluku2>1||oikeanopanluku2==1&&oikeanopanluku>1){
        alert ("HEITIT YKKÖSEN! Vuoro siirtyy seuraavalle!")
        kolmeparia=0;
        ykkonen();    }    
}
let lomake=document.forms['syota'];
lomake.addEventListener('submit',tallennaPelaajat) 

function tallennaPelaajat(event){
    event.preventDefault()
    nimi=document.querySelector('#syota input[type="text"]').value;
    pisteet=0;   
    pelaajat.push({nimi,pisteet})
    console.log(pelaajat)
    document.getElementById('syota').reset(); 
    tulostaPelaajat();    
}
function ykkonen(){
    yhteensa=0;
    document.querySelector('#pisteet').innerHTML=yhteensa;
        lopeta();
        }        
    
function lopeta(){
    pelaajat[vuoro].pisteet=pelaajat[vuoro].pisteet+yhteensa; 
    
    if(pelaajat[vuoro].pisteet>=100){
        alert(" VOITTAJA ON "+pelaajat[vuoro].nimi+"\n"+ "Uusipeli alkaa automaattisesti!");
        for(let i=0;i<pelaajat.length;i++){
            pelaajat[i].pisteet=0;
            vuoro=0;}
            tulostaPelaajat();
    }else{    
        tulostaPelaajat(); 
            if(vuoro<pelaajat.length-1) {     
            vuoro++;
            }else{ 
            vuoro=0;}
    } 
    aloitaPeli();  
}
function tulostaPelaajat(){

    document.querySelector('#pelaajat').innerHTML='';
    for(let i=0;i<pelaajat.length;i++){
    let uusinimi=document.createElement('li');
    let uusinimiteksti=document.createTextNode(pelaajat[i].nimi+"  "+pelaajat[i].pisteet+ " pistettä");
    uusinimi.appendChild(uusinimiteksti);
    uusinimi.className=('pelaajalista'); 
    document.querySelector('#pelaajat').appendChild(uusinimi);}}





    