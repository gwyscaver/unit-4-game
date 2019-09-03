var tarScore = 0
var wins = 0
var losses = 0
var currScore = 0

var blueGem
var redGem
var greenGem
var purpGem

function genGemScore(){
    var randomNumber = Math.random()*12
    return Math.floor(randomNumber)
}
function genTarScore(){
    var randomNumber = Math.random()*120
    return Math.floor(randomNumber)
}
//checks currScore against tarScore
function checkScore(){
    if (currScore == tarScore){
        wins ++
        resetGame()
        updateHtml()
    }
    if (currScore > tarScore) {
      console.log("you've lost")
      losses ++
      resetGame()
      updateHtml()
    } //else {
        //console.log("keep guessing")

    //}
}
//update the html
function updateHtml(){
    $("#tarScore").text("Target Score:" + tarScore)
    $("#currScore").text("Current Score:" + currScore)
    $("#losses").text("Losses:" + losses)
    $("#wins").text("Wins:" + wins)
}
//rest game
function resetGame(){
    currScore = 0
    tarScore = genTarScore()
}


redGem = genGemScore()
blueGem = genGemScore()
purpGem = genGemScore()
greenGem = genGemScore()
tarScore = genTarScore()
updateHtml()

//log(redGem,blueGem,purpGem,greenGem);
//log(tarScore)

$("#blueGem").on("click", function (){
    //log("blue gem was clicked")
    //log(blueGem)
    currScore = currScore + blueGem;
    //log(currScore);
    checkScore();
    updateHtml()   
})
$("#redGem").on("click", function (){
    //log("red gem was clicked")
    //log(redGem)
    currScore = currScore + redGem;
    //log(currScore);
    checkScore();
    updateHtml()   
})
$("#greenGem").on("click", function (){
    //log("green gem was clicked")
    //log(greenGem)
    currScore = currScore + greenGem;
    //log(currScore);
    checkScore();
    updateHtml()   
})
$("#purpGem").on("click", function (){
    //console.log("purp gem was clicked")
    //console.log(purpGem)
    currScore = currScore + purpGem;
    //console.log(currScore);
    checkScore();
    updateHtml()   
})
