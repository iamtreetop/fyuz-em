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

    class Projectile {
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

    const x = canvas.width / 2
    const y = canvas.height / 2
    const projColor = `hsl(${Math.random() * 360}, 50%, 50%)`
    const playerColor = projColor;
    const player = new Player(x, y, 20, playerColor);
    const projectiles = []

    function distance(x1, y1, x2, y2) {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    let circle1;
    let circle2;
    function init(){
        circle1 = new Player(300, 250, 130, 'transparent');
        // circle2 = new Player(10, 10, 20, 'red')
    }

    let projectile;
    let animationId;
    function animate(){ 
        animationId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
            
        circle1.update();
        // circle2.x = mouse.x;
        // circle2.y = mouse.y;
        // circle2.update();
        ctx.rect(0, 0, canvas.width, canvas.height);
        const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 175, 0, Math.PI * 2, false);
        ctx.strokeStyle = "lightgrey"
        ctx.stroke(); 
            
        player.draw();
        projectiles.forEach(projectile => {
        projectile.draw();
        projectile.update();
            
            if (distance(circle1.x, circle1.y, projectile.x, projectile.y) > circle1.radius + projectile.radius) {
                // make circle stop, not disappear
                // projectile.x = x;
                // projectile.y = y;
                projectile.velocity = {
                    x: 0,
                    y: 0
                };
                // circle1.color = 'lightgrey';
    
            } else {
                circle1.color = 'transparent';
            }

        })
        // projectile.update();
        console.log(distance(circle1.x, circle1.y, player.x, player.y));
        // console.log('animate');
    }

    const mouse = {
        x: 10,
        y: 10
    }

    addEventListener('mousemove', (event) => {
        mouse.x = event.offsetX
        mouse.y = event.offsetY
    })

    addEventListener('click', (event) => {
        const angle = Math.atan2(event.offsetY - canvas.height / 2, event.offsetX- canvas.width / 2)
        const velocity = {
            x: Math.cos(angle) * 8,
            y: Math.sin(angle) * 8
        }

        const projColor = `hsl(${Math.random() * 360}, 50%, 50%)`
        projectiles.push(
            new Projectile(canvas.width / 2, canvas.height / 2, 20, projColor, velocity)
        )
        console.log(event)
    })
    init();
    animate();

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
})


/******/ })()
;
//# sourceMappingURL=bundle.js.map