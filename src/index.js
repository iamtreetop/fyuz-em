// const Game = require("./game")

document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.querySelector('canvas')
    
    canvas.width = 600;
    canvas.height = 600;

    const ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#602b76"
    // ctx.fillRect(100, 50, 100, 30);
    // ctx.fillStyle = "#402a76"
    // ctx.fillRect(150, 100, 160, 80);
    // ctx.fillRect(250, 200, 100, 120);

    // ctx.moveTo(50, 300);
    // ctx.lineTo(300, 100);
    // ctx.stroke();
    context.fillStyle = "#000000"
    ctx.beginPath();
    ctx.arc(300, 300, 150, 0, Math.PI * 2, false);
    ctx.strokeStyle = "green"
    ctx.stroke();

    // const canvas = document.getElementById("game-canvas")
    console.log("Webpack is working!")
})