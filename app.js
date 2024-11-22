import page from "https://unpkg.com/page/page.mjs"
import { templates } from './static/js/navigation.js';


// Making the app navigation
page('/', () => {
    setStylesheet('additional-styles.css');
    templates.introductionTemplate();
})
page('/game', () => {
    setStylesheet('car-game-style.css')
    templates.gameTemplate()
})
page('/result', () => {
    setStylesheet('additional-styles.css');
    templates.resultTemplate();
})
page()



function setStylesheet(stylesheet) {
    let link = document.getElementById('page-stylesheet');
    link.href = `static/css/${stylesheet}`;
}


