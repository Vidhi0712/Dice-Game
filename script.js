let randomNumber=Math.floor(Math.random()*6)+1;
console.log(randomNumber);
let changeImage=document.querySelector("img");
changeImage.setAttribute("src",`./images/dice${randomNumber}.png`);
let randomNumber1=Math.floor(Math.random()*6)+1;
let changeImage2=document.querySelector("img.img2")
changeImage2.setAttribute("src",`./images/dice${randomNumber1}.png`);
let heading=document.querySelector("h1");
if(randomNumber>randomNumber1)
{
    heading.textContent= "Player 1 Wins! 🚩"
}
else if(randomNumber<randomNumber1)
{
    heading.textContent= "Player 2 Wins! 🚩"
}
else{
     heading.textContent= "DRAW! 🚩"
}