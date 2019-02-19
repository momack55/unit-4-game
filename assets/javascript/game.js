//javaScript//
$(document).ready(function(){

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function randomNum(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) +min;
    }
    var targetNumber = randomNum(19,120);
    $("#target").html(targetNumber);

    var crystalOne = randomNum(1, 12);
    var crystalTwo = randomNum(1, 12);
    var crystalThree = randomNum(1, 12);
    var crystalFour = randomNum(1, 12);

    function reset (){
        counter = 0;
        $("#target").html(targetNumber);
        targetNumber = randomNum(19,120);
        $("#playerScore").text(counter);
        var crystalOne = randomNum(1, 12);
        var crystalTwo = randomNum(1, 12);
        var crystalThree = randomNum(1, 12);
        var crystalFour = randomNum(1, 12);
    }

    $("#pinkCrystal").on("click", function(){
        counter += crystalOne;
        WinLose();
        $(playerScore).text(counter);
    });

    $("#blueCrystal").on("click", function(){
        counter += crystalTwo;
        WinLose();
        $(playerScore).text(counter);
    });

    $("#redCrystal").on("click", function(){
        counter += crystalThree;
        WinLose();
        $(playerScore).text(counter);
    });

    $("#purpleCrystal").on("click", function(){
        counter += crystalFour;
        WinLose();
        $(playerScore).text(counter);
    });

    function WinLose (){
        if (counter === targetNumber){
            wins ++;
            alert("Winner Winner Chicken Dinner!");
            $(win).text(wins);
            reset();
        }

        else if(counter > targetNumber){
            losses ++;
            alert("You Lose :( Better Luck Next Time!");
            $(loss).text(losses);
            reset();
        }
    }

});