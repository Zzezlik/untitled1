import {createContent} from "./modules/uploadInfo.js";

const div = document.querySelector('.items')

createContent(div, null)

//

/* 
    <div class="notfound">
            <h3>Character not found!</h3>
            <h5>Try another character or another okun'</h4>
    </div>
*/

const input = document.querySelector('.search')

input.addEventListener('input', e => {
    const { target } = e
    const items = document.querySelectorAll('.item')

    
    if (target.value.toLowerCase().trim() !== '') {
        console.dir(target.value)
        div.innerHTML = null
        createContent(div, `name=${target.value.toLowerCase().trim()}`)
        console.dir(items)
    } else {
        if (target.value.toLowerCase().trim() === ""){
            createContent(div)
            return
        } else {
            div.innerHTML = `
            <div class="notfound">
            <h3>Character not found!</h3>
            <h5>Try another character or another okun'</h4>
    </div>
            `
        }
    }
})


document.addEventListener('scroll', e => {
    if(window.scrollY >= 1000) {
        console.dir('start')
        
    }
    document.removeEventListener()
})