 let inputdirection ={x:0,y:0}
 let lastdirection ={x:0,y:0}
window.addEventListener('keydown',e=>{
    switch (e.key){
        case'ArrowUp':
        if(lastdirection.y !==0) break
        inputdirection={x:0,y:+1}
        break
        case'ArrowDown':
        if(lastdirection.y !==0) break
        inputdirection={x:0,y:-1}
        break
        case'ArrowRight':
        if(lastdirection.x !==0) break
        inputdirection={x:+1,y:0}
        break
        case'ArrowLeft':
        if(lastdirection.x !==0) break
        inputdirection={x:-1,y:0}
        break
    }
})
export function getinputdirection(){
    lastdirection = inputdirection
    return inputdirection
}


