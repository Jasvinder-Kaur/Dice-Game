var randomNumber1 = Math.floor( 6 * Math.random()) + 1;

var randomSource = "Images/dice" + randomNumber1 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomSource);

var randomNumber2 = Math.floor( 6 * Math.random()) + 1;

randomSource = "Images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber1 < randomNumber2 )
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}
