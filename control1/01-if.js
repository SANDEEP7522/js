
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