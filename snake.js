export const Snake_speed = 5
let newsegments = 0

import { getinputdirection } from "./input.js"
const snakebody = [
    {x:11,y:11}
]

export function update(){
    addsegments()
    const  inputdirection = getinputdirection()
    
    for(let i = snakebody.length - 2;i>=0;i--){
        snakebody[i+1] = {...snakebody[i]}
    }
    snakebody[0].x += inputdirection.x
    snakebody[0].y += -inputdirection.y
}
export function draw(gameboard){
    snakebody.forEach(segment=>{
        const snakeelement = document.createElement('div')
        snakeelement.style.gridColumnStart = segment.x
        snakeelement.style.gridRowStart= segment.y
        snakeelement.classList.add('snake')
        gameboard.appendChild(snakeelement)
    })
}

export function expandsnake(amount){
    newsegments += amount
}

export function onsnake(position,{ignorehead = false}={}){
    return snakebody.some((segment,index)=>{
        if(ignorehead && index===0) return false
        return equalposition(position,segment)
    })
}

export function getsnakehead(){
    return snakebody[0]
}
export function snakebite(){
    return onsnake(snakebody[0], {ignorehead:true})
}

function equalposition(pos1,pos2){
    return pos1.x===pos2.x&&pos1.y===pos2.y
}

function addsegments(){
    for(let i = 0;i<newsegments;i++){
        snakebody.push({...snakebody[snakebody.length-1]})
    }
    newsegments = 0
}