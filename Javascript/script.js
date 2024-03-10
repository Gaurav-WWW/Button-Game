var count = 0;
var checkNum = 0;
var highScore = localStorage.getItem("highScoreKey");
$("#high-score").html("High Score : "+highScore);

var buttonTextCheck = $("button").html();

if(buttonTextCheck === "click me to begin!"){
    console.log("does this work?");
    $(".btn").addClass("button-override");
}

function probability() {
   var randomNum = (Math.floor(100*Math.random())) + 1;
  if(randomNum <= (100-count)){
    $("button").html(count);
    checkNum = 1;
   }
   else {
     count = 0;
     $("button").html(count);
     checkNum = 0;
   } 
}

$("button").on("click", function(){
    $(".btn").removeClass("button-override");
    probability();
    if (checkNum === 1){
        count++;
        if(highScore < count){
            highScore = count;
            localStorage.setItem("highScoreKey", highScore);
        }
        $("#high-score").html("High Score : "+highScore);
    }
    else {
        count = 0;
    }
});

$("a").on("click", function(){
    highScore = 0;
    localStorage.setItem("highScoreKey", highScore);
    $("#high-score").html("High Score : "+highScore);
});
