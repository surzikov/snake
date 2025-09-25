let table = document.querySelector('#ererer')
let arr = []
let direction = 'right'
function random(max){
    return Math.floor(Math.random()*max)
}
console.log(arr)
let snake = [[0,1], [0,0]]
function drawSnake(){
    for(let a = 0; a < snake.length; a++){
        arr[snake[a][0]][snake[a][1]].style.backgroundColor = 'blue'
        arr[snake[0][0]][snake[0][1]].style.backgroundColor = 'purple'
    }
}
let apple
function drawApple(){
    apple = [random(table_height), random(table_width)]
    console.log(apple)
    if((arr[apple[0]][apple[1]].style.backgroundColor == 'rgb(108, 180, 26)')){
        arr[apple[0]][apple[1]].style.backgroundColor = 'red'
    }else{
        drawApple()
    }
}



document.addEventListener('keypress',(e)=>{
    if(e.key == 'w' & direction != 'down'){
        direction = 'up'
    }
    if(e.key == 'a' & direction != 'right'){
        direction = 'left'
    }
    if(e.key == 's' & direction != 'up'){
        direction = 'down'
    }
    if(e.key == 'd' & direction != 'left'){
        direction = 'right'
    }
})

function nextFrame(){

    arr[apple[0]][apple[1]].style.backgroundColor = 'red'
    let lastElement = [snake[snake.length-1][0], snake[snake.length-1][1]]
    for(let b = snake.length-1; b > 0; b--){
        arr[snake[b][0]][snake[b][1]].style.backgroundColor = 'rgb(108, 180, 26)'
        snake[b][0] = snake[b-1][0]
        snake[b][1] = snake[b-1][1]
    }
    if(direction == 'up'){
        snake[0][0] -= 1
    }
    if(direction == 'down'){
        snake[0][0] += 1
    }
    if(direction == 'left'){
        snake[0][1] -= 1
    }
    if(direction == 'right'){
        snake[0][1] += 1
    }
    for(let a = 1; a<snake.length; a++){
        if(((snake[0][0] == snake[a][0]) & (snake[0][1] == snake[a][1])) || ((snake[0][0] < 0 || snake[0][0] > table_height-1) || (snake[0][1] < 0 || snake[0][1]>table_width-1))){
            location.reload()
        }
    }
    drawSnake()
    if(snake[0][0] == apple[0] & snake[0][1] == apple[1]){
        snake.push(lastElement)
        drawApple()
    }
    
    
}
let button = document.querySelector('#btn')
let table_height
let table_width
button.addEventListener('click',()=>{
    document.querySelector('.snake_create').style.display = 'none'
    table_height = document.querySelector('#inpHeight').value
    table_width = document.querySelector('#inpWidth').value
    for(let rows = 0; rows<table_height; rows++){
        let arr2 = []
        let row = document.createElement('tr')
        for(let cols = 0; cols<table_width; cols++){
            let col = document.createElement('td')
            col.style.backgroundColor = 'rgb(108, 180, 26)'
            row.appendChild(col)
            arr2.push(col)
        }
        arr.push(arr2)
        table.appendChild(row)
    }
    setInterval(nextFrame,200)
    drawApple()
})
