
// async function getStarWarsFilms(){
//     console.log("starting")
//     let res = await axios.get("https://swapi.dev/api/films/")
//     for (let i of res.data.results){
//         console.log(i.title)
//     }
    
// }

// getStarWarsFilms()


//***************************** */


//color chance async demo

// const h1 = document.getElementById("h1")

// function changeColor(el, color){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// async function rainbowed(el){
//     await changeColor(el, 'red')
//     await changeColor(el, 'orange')
//     await changeColor(el, 'yellow')
//     await changeColor(el, 'green')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'indigo')
//     await changeColor(el, 'violet')
// }


// rainbowed(h1)


//-------------------------------------------------------------------
async function getStarWarsFilms(){
    
    let res = await axios.get("https://swapi.dev/api/films/")
    for(let i of res.data.results){
        console.log(i.opening_crawl)
    }
}

getStarWarsFilms()