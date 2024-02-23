
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
        //    01                         02            04 
For([initiatalExpretion/declretion]; [condition]; [changer]){
           //  body          03
 }

 */

//  for( let userScore = 1 ; userScore <= 10 ; userScore = userScore + 1 ){
//     console.log(`UserScoure is ${userScore}`)
//  }


 // if score hits 5, don't print anything after that
 let userScore = 10
 const minValue = 0
let userName = "sandeep"

 for (userScore; userScore >= minValue; userScore = userScore -1){
    // if(userScore == 5){
    //     break;
    // }

    if(userScore == 5){
        continue;
    }
    console.log(`userScore is ${userScore}`)
   console.log("userName");
 }