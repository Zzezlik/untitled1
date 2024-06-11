export const createContent = (info, char) => {
    const BASE_URL = `https://rickandmortyapi.com/api`

    const fetchingContent = fetch(`${BASE_URL}/character/?${char}`)
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json()
        })
        .then(data => {
            console.dir(data.results)
            data.results.forEach(response => {
                info.insertAdjacentHTML('beforeend', `
        <div class="item">
        <a href="character.html?id=${response.id}">
            <img style="border-radius: 4px 4px 0 0" src="${response.image}">
            <div class="desc">
                <h2 class="name">${response.name}</h2>
                <h3 class="race">${response.species}</h3>
            </div>
        </a>
        </div>`)
            })
        })
        .catch((err) => {
            console.dir(err)
            info.innerHTML = `
                <div class="notfound">
        <h3>Character not found!</h3>
        <h5>Try another character or another okun'</h4>
</div>`
        })
}
