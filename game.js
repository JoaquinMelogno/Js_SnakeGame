import {Snake_speed,update as updateSnake,draw as drawSnake,getsnakehead,snakebite } from './snake.js'
import { draw as fooddraw, update as foodupdate} from './food.js'
import {outofthegrid} from './grid.js'
let lastrendertime = 0
let gameover = false
let gameover2 = false

const gameboard = document.getElementById('game-board')
function main(currentime){
    if(gameover){
        if(confirm('Perdiste presiona Ok para reiniciar')){
            window.location='/inicio.html'
        }
        return
    }
    if(gameover2){
        if(confirm('Te Mordiste y Perdiste presiona Ok para reiniciar')){
            window.location='/inicio.html'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsincelastrender = (currentime-lastrendertime) / 1000
    if(secondsincelastrender < 1 / Snake_speed) return
  
    lastrendertime = currentime
    console.log('render')

    update()
    draw()
}
function update(){
    updateSnake()
    foodupdate()
    checkdeath()
}
function draw(){
    gameboard.innerHTML=''
    drawSnake(gameboard)
    fooddraw(gameboard)
}
function checkdeath(){
    gameover = outofthegrid(getsnakehead())
    gameover2 = snakebite()
}


window.requestAnimationFrame(main)

