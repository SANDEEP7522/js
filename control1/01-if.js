/*
let temperature = 16
  if (temperature < 20){
    console.log("it is really cold")
  }
  else{
        console.log("it is really hote")
    }

 console.log("a welcome message to game")
    let score = 110
    let life = 3
    let bullets = 2000
    if( score > 99){
        console.log("you get a life up");
        score = score - 100
        life = life + 1
        let bullets = 2000
        console.log(`your bullets are ${bullets}`)
    }
    else{
   console.log("below that you don't get it");
    }

    console.log(`Your score is ${score} and my life score ${life} and 
    my bullets points is ${bullets}`)

    */
// build a rating system for pizzahut

// 1 star - Poor
// 2 star - emm, ok
// 3 star - Average
// 4 star - cool
// 5 star - great
// 6 star - awesome
// 7 star - nailed

let myStartNumber = "8"
let myNumber = parseInt(myStartNumber);

if(myNumber == "1")
{
    console.log("Poor")
}
 else if(myNumber == "2")
{
    console.log("emm ok")
}
else if(myNumber == "3")
{
    console.log("Average")
}
else if(myNumber == "4")
{
    console.log("Cool")
}
else if(myNumber == "5")
{
    console.log("Great")
}
else if(myNumber == "6")
{
    console.log("awesome")
}
else if(myNumber == "")
{
    console.log("nailed")
}
else{
    console.log("Out of game rulls")
}













