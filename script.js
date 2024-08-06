const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const a7 = document.getElementById("a7");
const a8 = document.getElementById("a8");
const a9 = document.getElementById("a9");
const xAlert = document.getElementById('xAlerts');
const oAlert = document.getElementById('oAlerts');
const xScoreText = document.getElementById('x');
const oScoreText = document.getElementById('o');
xAlert.innerHTML = '  '
oAlert.innerHTML = '  '
let draw = 0;
let turn = 1;
let oldTurn = 0;
let filled1 = 0;
let filled2 = 0;
let filled3 = 0;
let filled4 = 0;
let filled5 = 0;
let filled6 = 0;
let filled7 = 0;
let filled8 = 0;
let filled9 = 0;
let xacross1 = 0;
let xacross2 = 0;
let xacross3 = 0;
let xdown1 = 0;
let xdown2 = 0;
let xdown3 = 0;
let xcrossed1 = 0;
let xcrossed2 = 0;
let oacross1 = 0;
let oacross2 = 0;
let oacross3 = 0;
let odown1 = 0;
let odown2 = 0;
let odown3 = 0;
let ocrossed1 = 0;
let ocrossed2 = 0;
oScore = 0;
xScore = 0;
const checkTurn = setInterval(() => {
    if (turn == 0){
        return alreadyFilled()
    }else{
        if (turn % 2 == 0){
            oAlert.innerHTML = "O's Turn"
            xAlert.innerHTML = '  '
        }else{
            oAlert.innerHTML = '  '
            xAlert.innerHTML = "X's Turn"
        }
    }
}, 100)
function alreadyFilled(){
    console.log('ERRO')
}
function rematch(){
    draw = 0;
    filled1 = 0;
    filled2 = 0;
    filled3 = 0;
    filled4 = 0;
    filled5 = 0;
    filled6 = 0;
    filled7 = 0;
    filled8 = 0;
    filled9 = 0;
    xacross1 = 0;
    xacross2 = 0;
    xacross3 = 0;
    xdown1 = 0;
    xdown2 = 0;
    xdown3 = 0;
    xcrossed1 = 0;
    xcrossed2 = 0;
    oacross1 = 0;
    oacross2 = 0;
    oacross3 = 0;
    odown1 = 0;
    odown2 = 0;
    odown3 = 0;
    ocrossed1 = 0;
    ocrossed2 = 0;
    a1.innerHTML = ' '
    a2.innerHTML = ' '
    a3.innerHTML = ' '
    a4.innerHTML = ' '
    a5.innerHTML = ' '
    a6.innerHTML = ' '
    a7.innerHTML = ' '
    a8.innerHTML = ' '
    a9.innerHTML = ' '
    turn = oldTurn + 1
    xScoreText.innerHTML = `X score: ${xScore/31}`
    oScoreText.innerHTML = `O score: ${oScore/31}`
    console.log('New Game!')
}
function endGame(){
    setTimeout(rematch, 3000)
    oldTurn = turn
    turn = 0
}
const checkScore = setInterval(() => {
    if (draw == 9){
        xAlert.innerHTML = 'Draw!'
        oAlert.innerHTML = 'Draw!'
        turn++
        endGame()
    }
    if (xacross1 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        endGame()
        xScore++
    }
    if (xacross2 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xacross3 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xdown1 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xdown2 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xdown3 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xcrossed1 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }if (xcrossed2 == 3){
        console.log('X Wins!')
        xAlert.innerHTML = 'X wins!'
        oAlert.innerHTML = 'X wins!'
        xScore++
        endGame()
    }
    if (oacross1 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (oacross2 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (oacross3 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (odown1 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (odown2 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (odown3 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (ocrossed1 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
    if (ocrossed2 == 3){
        console.log('O Wins!')
        xAlert.innerHTML = 'O wins!'
        oAlert.innerHTML = 'O wins!'
        oScore++
        endGame()
    }
}, 100)
const b1 = document.getElementById("b1");
b1.addEventListener('click', () => {
    if (filled1 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a1.innerHTML = "O"
            oacross1++
            odown1++
            ocrossed1++
        }else{
            a1.innerHTML = "X"
            xacross1++
            xdown1++
            xcrossed1++
        }
        turn++
        filled1 = 1
        draw++
    }
})
const b2 = document.getElementById("b2");
b2.addEventListener('click', () => {
    if (filled2 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a2.innerHTML = "O"
            oacross2++
            odown1++
        }else{
            a2.innerHTML = "X"
            xacross2++
            xdown1++
        }
        turn++
        filled2 = 1
        draw++
    }
})
const b3 = document.getElementById("b3");
b3.addEventListener('click', () => {
    if (filled3 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a3.innerHTML = "O"
            oacross3++
            odown1++
            ocrossed2++
        }else{
            a3.innerHTML = "X"
            xacross3++
            xdown1++
            xcrossed2++
        }
        turn++
        filled3 = 1
        draw++
    }
})
const b4 = document.getElementById("b4");
b4.addEventListener('click', () => {
    if (filled4 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a4.innerHTML = "O"
            oacross1++
            odown2++
        }else{
            a4.innerHTML = "X"
            xacross1++
            xdown2++
        }
        turn++
        filled4 = 1
        draw++
    }
})
const b5 = document.getElementById("b5");
b5.addEventListener('click', () => {
    if (filled5 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a5.innerHTML = "O"
            oacross2++
            odown2++
            ocrossed1++
            ocrossed2++
        }else{
            a5.innerHTML = "X"
            xacross2++
            xdown2++
            xcrossed1++
            xcrossed2++
        }
        turn++
        filled5 = 1
        draw++
    }
})
const b6 = document.getElementById("b6");
b6.addEventListener('click', () => {
    if (filled6 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a6.innerHTML = "O"
            oacross3++
            odown2++
        }else{
            a6.innerHTML = "X"
            xacross3++
            xdown2++
        }
        turn++
        filled6 = 1
        draw++
    }
})
const b7 = document.getElementById("b7");
b7.addEventListener('click', () => {
    if (filled7 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a7.innerHTML = "O"
            oacross1++
            odown3++
            ocrossed2++
        }else{
            a7.innerHTML = "X"
            xacross1++
            xdown3++
            xcrossed2++
        }
        turn++
        filled7 = 1
        draw++
    }
})
const b8 = document.getElementById("b8");
b8.addEventListener('click', () => {
    if (filled8 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a8.innerHTML = "O"
            oacross2++
            odown3++
        }else{
            a8.innerHTML = "X"
            xacross2++
            xdown3++
        }
        turn++
        filled8 = 1
        draw++
    }
})
const b9 = document.getElementById("b9");
b9.addEventListener('click', () => {
    if (filled9 == 1){
        return alreadyFilled()
    }else{
        if (turn  % 2 == 0) {
            a9.innerHTML = "O"
            oacross3++
            odown3++
            ocrossed1++
        }else{
            a9.innerHTML = "X"
            xacross3++
            xdown3++
            xcrossed1++
        }
        turn++
        filled9 = 1
        draw++
    }
})