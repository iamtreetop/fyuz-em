/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
// const Game = require("./game")
// import Background from "./background";

document.addEventListener("DOMContentLoaded", () =>{
    const canvasEl = document.querySelector('canvas')
    const ctx = canvasEl.getContext('2d');
    const backgroundEl = document.getElementById("background");
    
    ctx.rect(0, 0, canvas.width, canvas.height);
    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');
    ctx.fillStyle = grd;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 250, 150, 0, Math.PI * 2, false);
    ctx.strokeStyle = "lightgrey"
    ctx.stroke();

    for(let i = 0; i < 20; i++) {
        let x = Math.random() * 250;
        let y = Math.random() * 250;

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2, false);
        ctx.strokeStyle = "blue"
        ctx.stroke();
    }

    console.log("Webpack is working!")
})


/******/ })()
;
//# sourceMappingURL=bundle.js.map