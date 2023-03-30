function hasEven(myNums:number[]){

    let i = 0

    while( i < myNums.length){

        i++

        if(myNums[i] % 2 == 0){

            return "Hay un numero par"
        }

    }

}

function startsWithM(myNames:string[]){

    let i = 0

    while (i < myNames.length){

        

        if(myNames[i][0] == "M"){

            return true
        }

        i++

    }

    return false

}

console.log(startsWithM(["Mavid", "Gara", "Raquel"]))