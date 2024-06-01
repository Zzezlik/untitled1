// <div class="item">
//             <img style="border-radius: 4px 4px 0 0" src="https://picsum.photos/240/168">
//             <div class="desc">
//                 <h2 class="name">Rick Sanchez</h2>
//                 <h3 class="race">Human</h3>
//             </div>
//         </div>

export const createContent = (info) => {
    const BASE_URL = `https://rickandmortyapi.com/api`

    const fetchingContent = fetch(`${BASE_URL}/character`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(response => {
                info.insertAdjacentHTML('afterbegin', `
        <div class="item">
            <img style="border-radius: 4px 4px 0 0" src="${response.image}">
            <div class="desc">
                <h2 class="name">${response.name}</h2>
                <h3 class="race">${response.species}</h3>
            </div>
        </div>`)
            })
        })
}