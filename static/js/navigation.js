import { html, render } from 'https://esm.run/lit-html@1';
import { carGame } from './car-game.js';
import  page  from "https://unpkg.com/page/page.mjs"

const root = document.getElementById('main');

const templates = {
    introductionTemplate,
    gameTemplate,
    resultTemplate
}


function introductionTemplate() {

// When started it renders the welcome page with the rules
// Clicking the start button it changes with client-rendering the main page
  
const template = html`
<div class="rules-page">
    <div class="title-container">
        <h1 class="title">Welcome to the Car Game.</h1>
    </div>

    <div class="rules-container">
        <h1 class="score">Here are the rules:</h1>
        <ul>
            <li>Your goal is to achieve 10 points to beat the game.</li>
            <li>In order to achieve points, you have to finish the line at the top.</li>
            <li>To move your car press the Arrow Up / Arrow Down buttons on keyboard</li>
        </ul>
    </div>

    <div class="button-container">
        <button id="start-btn" @click=${onClick}>START</button>
    </div>
</div> 
`
render(template, root)

}

function gameTemplate() {

const template = html`

<div class="game-container">
        
    <div class="road">

        <div class="lane" id="lane-1"></div>
        <div class="lane" id="lane-2"></div>
        <div class="lane" id="lane-3"></div>
        <div class="lane" id="lane-4"></div>
        <div class="lane" id="lane-5"></div>
        <div class="lane" id="lane-6"></div>
        <div class="lane" id="lane-7"></div>
        <div class="lane" id="lane-8"></div>
        <div class="lane" id="lane-9"></div>
        <div class="car" id="car"></div>

    </div>

    <div class="finish-line"></div>
    
</div>

<div class="scoreboard">
    Score: <span id="score">0</span>
</div>

<div class="reset">
    <button class="reset-button">Reset</button>
</div>



`   
render(template, root)
carGame()
}


function resultTemplate() {
    
    const template = html`   
    <div class="result-page">
        <div class="title-container">
            <h1 class="title">Congratulations! You've beaten the game.</h1>
        </div>
    
        <div class="score-container">
            <h1 class="score">You scored: 10 points!</h1>
        </div>
    
        <div class="cat-png">    
            <img src="static/pictures/file.png" alt="A cute cat image">
        </div>
    </div>
    `
    render(template, root)
}

function onClick() {
    page.redirect('/game')
}

export { templates }