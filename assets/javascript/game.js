var tarScore = 0
var wins = 0
var losses = 0
var redGem
var blueGem
var yellGem
var greenGem
var currScore = 0

function genGemScore(){
    var randomNumber = Math.random()*12
    return Math.floor(randomNumber)
}
function genTarScore(){
    var randomNumber = Math.random()*120
    return Math.floor(randomNumber)
}
redGem = genGemScore()
blueGem = genGemScore()
yellGem = genGemScore()
greenGem = genGemScore()
tarScore = genTarScore()
console.log(redGem,blueGem,yellGem,greenGem);
console.log(tarScore)

$(".blueGem").on("click", function (){
    console.log("blue gem was clicked")
    console.log(blueGem)
    currScore = currScore + blueGem
    console.log(currScore);
    
})
$(".redGem").on("click", function (){
    console.log("red gem was clicked")
    
    })
$(".greenGem").on("click", function (){
    console.log("green gem was clicked")

})
$(".yellGem").on("click", function (){
    console.log("yellow gem was clicked")
    
    })
