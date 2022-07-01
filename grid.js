const GRID_SIZE=21
export function randomgridposition(){
    return{
        x: Math.floor(Math.random()*GRID_SIZE) + 1,
        y: Math.floor(Math.random()*GRID_SIZE) + 1
    }
}

export function outofthegrid(position){
    return (
    position.x > GRID_SIZE || position.x < 1 ||
    position.y > GRID_SIZE || position.y < 1)
}