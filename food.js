import {onsnake,expandsnake} from './snake.js'
import {randomgridposition} from './grid.js'

let food = randomgridposition()
const Expansion_rate=5
export function update(){
        if(onsnake(food)){
                expandsnake(Expansion_rate)
                food = randomgridposition()
        }
}

export function draw(gameboard){
        const foodelemnt = document.createElement('div')
        foodelemnt.style.gridColumnStart = food.x
        foodelemnt.style.gridRowStart= food.y
        foodelemnt.classList.add('food')
        gameboard.appendChild(foodelemnt)
}

function getrandomfood(){
        let newpositionfood
        while(newpositionfood =null ||onsnake(newpositionfood)){
                newpositionfood = randomgridposition()
        }
        return newpositionfood
}