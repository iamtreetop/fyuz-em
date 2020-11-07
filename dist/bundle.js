/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
// // const Game = require("./game")
// const Background = require("./background");
// const GamePiece = require("./pieces")
// // import Background from "./background";
// const Player = require("./player")
// import Player from './player';

document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d');
    // const backgroundEl = document.getElementById("background");
    // const ctxBg = backgroundEl.getContext("2d");
    // const background = new Background();
    // Background();
    // GamePiece();
    // ctx.rect(0, 0, backgroundEl.width, backgroundEl.height);
    // const grd = ctx.createLinearGradient(0, 0, backgroundEl.width, backgroundEl.height);

    class Board{
        makePos() {
            const grid = [];
            for (let i = 0; i < 20; i++) {
                let pos = new Array(20);
                grid.push(pos);
            }
        }
    }

    class Player{
        constructor(x, y , radius, color){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
        }

        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color
            ctx.fill();
        }

        update() {
            this.draw()
        }
    }

    class Bubble {
        constructor(x, y, radius, color, velocity) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = velocity
        }

        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color
            ctx.fill();
        }

        update(){
            this.draw()
            this.x = this.x + this.velocity.x
            this.y = this.y + this.velocity.y
        }
    }


    const midX = canvas.width / 2
    const midY = canvas.height / 2
    const projColor = `hsl(${Math.random() * 360}, 50%, 50%)`
    const playerColor = projColor;
    const player = new Player(midX, midY, 20, playerColor);
    const bubbles = []

    function distance(x1, y1, x2, y2) {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    let circle1;

    // testAngle
    // const testCircle1 = new Player((midX + Math.cos(60)*175) - (Math.cos(60) * 20), (midY + Math.sin(60)*175) - (Math.cos(60) * 20), 20, 'red')
    // const testCircle2 = new Player(midX + Math.cos(120)*140, midY + Math.sin(120)*140, 20, 'red')
    // const testCircle3 = new Player(midX + Math.cos(180)*140, midY + Math.sin(180)*140, 20, 'red')
    // const testCircle4 = new Player(midX + Math.cos(240)*140, midY + Math.sin(240)*140, 20, 'red')
    // const testCircle5 = new Player(midX + Math.cos(300)*140, midY + Math.sin(300)*140, 20, 'red')
    // const testCircle6 = new Player(midX + Math.cos(360)*140, midY + Math.sin(360)*140, 20, 'red')
    const testCircle = new Player(midX, midY, 10, 'red')
    // const testCircle2 = new Player(300, 125, 10, 'black')
    

    function init(){
        circle1 = new Player(300, 250, 130, 'black');
        // circle2 = new Player(50, 50, 20, 'red');
    }

    let bubble;
    let animationId;
    function animate(){ 
        
        
        animationId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //background
        ctx.rect(0, 0, canvas.width, canvas.height);
        const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');
        ctx.fillStyle = grd;
        ctx.fill();

        //outer rim

        ctx.beginPath();
        ctx.arc(midX, midY, 175, 0, Math.PI * 2, false);
        ctx.strokeStyle = "black"
        ctx.stroke(); 
        
        player.draw();
        testCircle.update();
        // testCircle1.update();
        // testCircle2.update();
        // testCircle3.update();
        // testCircle4.update();
        // testCircle5.update();
        // testCircle6.update();
        let circleArr = []
        for (let i = 0; i < 20; i++){
            circleArr.push(
                new Player((midX + Math.cos(0.314159*i)*150) - (Math.cos(0.314159*i)), (midY + Math.sin(0.314159*i)*150) - (Math.cos(0.314159*i)), 20, 'black')
            )
        }
        circleArr.forEach(circle => {
            circle.update();
        })

        bubbles.forEach(bubble => {
            bubble.draw();
            bubble.update();
                
            if (distance(circle1.x, circle1.y, bubble.x, bubble.y) > circle1.radius + bubble.radius) {
                // make circle stop, not disappear
                // circle1.color = 'black';
                bubble.velocity = {
                    x: 0,
                    y: 0
                };
            }
        })
        // console.log('hi');
    }

    addEventListener('click', (event) => {
        const angle = Math.atan2(event.offsetY - canvas.height / 2, event.offsetX- canvas.width / 2)
        const velocity = {
            x: Math.cos(angle) * 8,
            y: Math.sin(angle) * 8
        }

        const projColor = `hsl(${Math.random() * 360}, 50%, 50%)`
        bubbles.push(
            new Bubble(canvas.width / 2, canvas.height / 2, 20, projColor, velocity)
        )
        console.log(event)
    })

    init();
    animate();
})


/******/ })()
;
//# sourceMappingURL=bundle.js.map