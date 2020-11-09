## FYüZ-EM

[FYüZ-EM Live](https://iamtreetop.github.io/fyuz-em/)

### Background

FYüZ-EM is an incremental puzzle game inspired by Sirnic's Atomas.  The object of the game is to get the highest score possible before the play environment fills up.  Players will need to fuse two objects together using the occasional fuse power-up objects.  The score of each game will be tracked by the number of fusions a player can make before the game ends.  
A more descriptive outline of Collision is defined below in **Functionality & MVP**.  

### Functionality & MVP  

With Collision, players will be able to:
- [ ] Start and reset the game
- [ ] Click to place an object
  - [ ] Collect fusions
- [ ] See score on the board

In addition, this project will include:
- [ ] A list of instructions describing the rules of the game and controls
- [ ] A production Readme

### Wireframes

This app will consist of a single screen in the center with the gameplay action. Instructions and controls for the game will be found on the right side bar. Links to my Github and LinkedIn will be found on the bottom left corner. The sound control will be included in the right side bar as well.

![wireframes](https://github.com/iamtreetop/fyuz-em/blob/main/assets/images/wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:
- Vanilla JS
- HTML5 Canvas
- CSS
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up. Create `webpack.config.js` as well as `package.json`. Write a basic entry file and the bare bones of any scripts needed.  Research any potential libraries to have for the app.

- Get `webpack` working
- Research Day, Learn more about `Canvas`, 
- Find/create animations to be used for components, background, and environment

**Day 2**: First, use `game.js` to build the environment for the game and make layout is built. Create a pieces and look for animations for  objects needed in the game.

- Render a simple, environment to `Canvas` within the `game.js`; Be able to see shapes on the screen
- Complete the pieces module (constructor, collision functions); should be able to move center objects to outer rim

**Day 3**: Be able to render the components onto the screen. Objects should be able to fuse on collision to score, which will end the game.

- Finish creating the different components (numbers, addition) and handle logic of their movements
- Have a score to keep track of fusions

**Day 4**: Install the controls for the user to interact with the game. Style the frontend, making it look professional.

- Create game controls for START, PAUSE, and RESTART
- Have a styled `Canvas`, nice looking controls and title
- Have an increased level of difficulty if score is over a certain amount, keep it challenging
- Add animations to the background

### Bonus features
Some features this game can include in the future:
- [ ] Music to play during game
