document.querySelector

var diceeNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Player 1: " + diceeNumber1);

var diceeNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Player 2: " + diceeNumber2);

if (diceeNumber1 > diceeNumber2) {
    document.querySelector('.title').innerHTML = "🚩Player 1 WIN!";

} else if (diceeNumber1 < diceeNumber2) {
    document.querySelector('.title').innerHTML = "Player 2 WIN! 🚩";

} else {
    document.querySelector('.title').innerHTML = "DRAW!";
}


/* DICEE 1  */

if(diceeNumber1 === 1) {
    document.querySelector('.img1').setAttribute('src', 'assets/dice1.png');
   
} else if(diceeNumber1 === 2) {
    //document.getElementsByClassName('.dice', 'img1');
    document.querySelector('.img1').setAttribute('src', 'assets/dice2.png');
    
 } else if(diceeNumber1 === 3) {
    //document.getElementsByClassName('.dice', 'img1');
    document.querySelector('.img1').setAttribute('src', 'assets/dice3.png');
    
 } else if(diceeNumber1 === 4) {
    //document.getElementsByClassName('.dice', 'img1');
    document.querySelector('.img1').setAttribute('src', 'assets/dice4.png');
    
 } else if(diceeNumber1 === 5) {
    //document.getElementsByClassName('.dice', 'img1');
    document.querySelector('.img1').setAttribute('src', 'assets/dice5.png');
    
 } else if(diceeNumber1 === 6) {
    //document.getElementsByClassName('.dice', 'img1');
    document.querySelector('.img1').setAttribute('src', 'assets/dice6.png');
 }

 /* DICEE 2 */

  if(diceeNumber2 === 1) {
   // document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice1.png');
   
} else if(diceeNumber2 === 2) {
    //document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice2.png');
    
 } else if(diceeNumber2 === 3) {
    //document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice3.png');
    
 } else if(diceeNumber2 === 4) {
    //document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice4.png');
    
 } else if(diceeNumber2 === 5) {
    //document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice5.png');
    
 } else if(diceeNumber2 === 6) {
    //document.getElementsByClassName('.dice', 'img2');
    document.querySelector('.img2').setAttribute('src', 'assets/dice6.png');
 }



 

 