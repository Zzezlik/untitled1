import {createContent} from "./modules/uploadInfo.js";

const div = document.querySelector('.items')

createContent(div)

//

const input = document.querySelector('.search')

input.addEventListener('input', e => {
    const { target } = e
    const items = document.querySelectorAll('.item')
    items.forEach(i => {
        const name = i.children[1].children[0].textContent
    })
})