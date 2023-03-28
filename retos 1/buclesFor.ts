function evenNumbers (num:number){

    for( let i = 0; i<=num; i++ ){

        if( i % 2 == 1 ){

            console.log(i)
        }
    }

}

function myRevert (myArr:number[]):number[] {

    let myEmpyArr:number[] = []

    for (let i = myArr.length - 1; i >= 0; i--){

        myEmpyArr.push(myArr[i])

    }

    return myEmpyArr

}

// let newarray = [10,20,30,40,50]

// let imprimeArray = myRevert(newarray)

// console.log(imprimeArray)

function isRainbow(colors:string[]){

    for ( let i = 0; i < colors.length; i++ ){

        if (colors[i] == "Rojo" || colors[i] == "Naranja" || colors[i] == "Amarillo" || colors[i] == "Verde" || colors[i] == "Añil" || colors[i] == "Azul" || colors[i] == "Violeta"){

            console.log(colors[i] + " esta en el arcoiris")

        }

        else{

            console.log(colors[i] + " no esta en el arcoiris")
        }

    }

}

// isRainbow(["Rojo", "Negro", "Blanco", "Amarillo", "Verde Fosforito"])

function add(myWords:string[]):number{

    let wordsNum:number = 0

    for( let i = 0; i < myWords.length ; i++){

        wordsNum += myWords[i].length

    }

    return wordsNum

}


