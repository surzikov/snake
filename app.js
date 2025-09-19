let table = document.querySelector('#ererer').lastElementChild
let arr = []
let direction = ''
for(let a = 0; a < table.childElementCount; a++){
    let arr2 = []
    for(let b = 0; b<table.childNodes[a*2].childElementCount; b++){
        let td = table.childNodes[a*2].childNodes[b*2+1]
        td.style.backgroundColor = 'rgba(108, 180, 26, 1)'
        arr2.push(td)
    }
    arr.push(arr2)
}
console.log(arr)
let snake = [[10,3],[10,2],[10,1]]
function drawSnake(){
    for(let a = 0; a < snake.length; a++){
        console.log(arr[snake[a][0]][snake[a][1]])
        arr[snake[a][0]][snake[a][1]].style.backgroundColor = 'blue'
    }
}
drawSnake()

document.addEventListener('keydown',(e)=>{
    if(e.key == 'w'){
        direction = 'up'
    }
    if(e.key == 'a'){
        direction = 'left'
    }
    if(e.key == 's'){
        direction = 'down'
    }
    if(e.key == 'd'){
        direction = 'right'
    }
})
setInterval(nextFrame,1000)
function nextFrame(){
    if(direction == 'up'){
        arr[snake[snake.length-1][0]][snake[snake.length-1][1]].style.backgroundColor = 'rgba(108, 180, 26, 1)1)'
        for(let b = snake.length-1; b > 1; b--){
            
            snake[b][0] = snake[b-1][0]
            snake[b][1] = snake[b-1][1]
        }
        snake[0][0] -= 1
        
    }
    drawSnake()
}
