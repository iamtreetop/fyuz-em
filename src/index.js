// const Game = require("./game")
const Background = require("./background");
// import Background from "./background";

document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.querySelector('canvas')
    // const ctx = canvas.getContext('2d');
    const backgroundEl = document.getElementById("background");
    // const ctxBg = backgroundEl.getContext("2d");
    // const background = new Background();
    backgroundEl();

    // ctx.rect(0, 0, canvas.width, canvas.height);
    // const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // grd.addColorStop(0, '#8ED6FF');
    // grd.addColorStop(1, '#004CB3');
    // ctx.fillStyle = grd;
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(300, 250, 150, 0, Math.PI * 2, false);
    // ctx.strokeStyle = "lightgrey"
    // ctx.stroke();

    // for(let i = 0; i < 20; i++) {
    //     let x = Math.random() * 250;
    //     let y = Math.random() * 250;

    //     ctx.beginPath();
    //     ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    //     ctx.strokeStyle = "blue"
    //     ctx.stroke();
    // }

    // $('.start-button').click(() => {
    //     const game = new Game(bee, net, honey, canvasEl);
    //     const gameView = new GameView(game, ctx, background, canvasEl);
    //     background.startBg(backgroundEl, ctxBg);
    //     gameView.gameMenu();
    // });

    // $('.restart-button').click(() => {
    //     ctx.clearRect(0,0, 700, 390);
    //     ctxBg.clearRect(0,0, 700, 390);
    //     GameView.gameOver = false;
    //     const game = new Game(bee, net, honey, canvasEl);
    //     const gameView = new GameView(game, ctx, background, canvasEl);
    //     gameView.gameMenu();
    // });


    console.log("Webpack is working!")

    
})

