$(window).on('load', function(){
    $("#hs").text("Highscore: " + localStorage.getItem("lshs") )
   
    if(localStorage.getItem("lshs")=null){
        localStorage.getItem("lshs")= 0
    }
})



var wins = 0

function win(){
    $(".a").addClass("aactive")
    $(".a").removeClass("oactive")
    $(".a").removeClass("xactive")
    wins++
    $("#currentWins").text("Current Wins: " + wins)
    $("#status").css("color", "green");
    $("#status").text("Winner!")
    $("#status").css("opacity", "1");
    $("#status").fadeTo(1500,0);
    hsCheck()

    
}


var losses = 0

function lose(){
    $(".a").addClass("aactive")
    $(".a").removeClass("oactive")
    $(".a").removeClass("xactive")
    losses++
    $("#currentLosses").text("Current losses: " + losses)
    $("#status").css("color", "red");
    $("#status").text("Loser!")
    $("#status").css("opacity", "1");
    $("#status").fadeTo(1500,0);
hsCheck()
}

function hsCheck(){
    var hs = wins-losses
    var currentHS = localStorage.getItem("lshs")
    if(hs>=currentHS){
        localStorage.setItem("lshs", hs)
        console.log( localStorage.getItem("lshs"))
        $("#hs").text("Highscore: " + localStorage.getItem("lshs") )
    }
}

function reset(){
    wins=0
    losses=0
    $("#currentWins").text("Current Wins: " + wins)
    $("#currentLosses").text("Current losses: " + losses)
    $(".a").addClass("aactive")
    $(".a").removeClass("oactive")
    $(".a").removeClass("xactive")
   

}

function boxSelected(event){
    $(event.target).toggleClass("xactive")
    $(event.target).toggleClass("aactive")
  

    var idArray = [];
    $('.aactive').each(function () {
    idArray.push(this.id);
    console.log(idArray) });

    const randomElement = idArray[Math.floor(Math.random() * idArray.length)];
    console.log(randomElement)

    $("#" + randomElement ).toggleClass("oactive")
    $("#" + randomElement ).toggleClass("aactive")

    if($("#a1").hasClass("xactive") && $("#a2").hasClass("xactive") && $("#a3").hasClass("xactive")){
        console.log("winner!");  win() }
     

        if($("#a1").hasClass("xactive") && $("#a4").hasClass("xactive") && $("#a7").hasClass("xactive")){
            console.log("winner!"); win()}
            
            
            if($("#a3").hasClass("xactive") && $("#a6").hasClass("xactive") && $("#a9").hasClass("xactive")){
                console.log("winner!");  win()}
              

                if($("#a7").hasClass("xactive") && $("#a8").hasClass("xactive") && $("#a9").hasClass("xactive")){
                    console.log("winner!");  win()}
                   

                    if($("#a4").hasClass("xactive") && $("#a5").hasClass("xactive") && $("#a6").hasClass("xactive")){
                        console.log("winner!"); win()}
                        

                        if($("#a2").hasClass("xactive") && $("#a5").hasClass("xactive") && $("#a8").hasClass("xactive")){
                            console.log("winner!"); win()}
                          

                            
                             if($("#a3").hasClass("xactive") && $("#a5").hasClass("xactive") && $("#a7").hasClass("xactive")){
                                 console.log("winner!"); win()}

                                      if($("#a1").hasClass("xactive") && $("#a5").hasClass("xactive") && $("#a9").hasClass("xactive")){
                                        console.log("winner!"); win()}





                                         if($("#a1").hasClass("oactive") && $("#a2").hasClass("oactive") && $("#a3").hasClass("oactive")){
                                            console.log("Loser!") ;lose() }
                                    
                                            if($("#a1").hasClass("oactive") && $("#a4").hasClass("oactive") && $("#a7").hasClass("oactive")){
                                                console.log("Loser!") ;lose() }
                                                
                                                if($("#a3").hasClass("oactive") && $("#a6").hasClass("oactive") && $("#a9").hasClass("oactive")){
                                                    console.log("Loser!");lose() }
                                    
                                                    if($("#a7").hasClass("oactive") && $("#a8").hasClass("oactive") && $("#a9").hasClass("oactive")){
                                                        console.log("Loser!");lose() }
                                    
                                                        if($("#a4").hasClass("oactive") && $("#a5").hasClass("oactive") && $("#a6").hasClass("oactive")){
                                                            console.log("Loser!");lose() }
                                    
                                                            if($("#a2").hasClass("oactive") && $("#a5").hasClass("oactive") && $("#a8").hasClass("oactive")){
                                                                console.log("Loser!");lose() }
                                    
                                                                
                                                                 if($("#a3").hasClass("oactive") && $("#a5").hasClass("oactive") && $("#a7").hasClass("oactive")){
                                                                     console.log("Loser!");lose() }
                                    
                                                                          if($("#a1").hasClass("oactive") && $("#a5").hasClass("oactive") && $("#a9").hasClass("oactive")){
                                                                            console.log("Loser!");lose() }
                                    
if(!$("#a1").hasClass("aactive") && !$("#a2").hasClass("aactive") && !$("#a3").hasClass("aactive") && !$("#a4").hasClass("aactive") && !$("#a5").hasClass("aactive") && !$("#a6").hasClass("aactive") && !$("#a7").hasClass("aactive") && !$("#a8").hasClass("aactive") && !$("#a9").hasClass("aactive") ){
    $(".a").addClass("aactive")
    $(".a").removeClass("oactive")
    $(".a").removeClass("xactive")
    $("#status").css("color", "black");
    $("#status").text("Draw!")
    $("#status").css("opacity", "1");
    $("#status").fadeTo(1500,0);
}

}







//* remember when you get back you need to create a function that targets the aactive 
//* then randomizes thse into a string and assign them a number
//*then through the randomly selected id, the class oactive wll be addded
//* the final thing you need to do is set up a winning function that checks evreytime a move finishes if it was a winning move 
//* do this by setting up a class+id varyable then put those varyables in a winning combinations in an if loop 
