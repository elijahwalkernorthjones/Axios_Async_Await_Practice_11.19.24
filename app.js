
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
// async function getStarWarsFilms(){
    
//     let res = await axios.get("https://swapi.dev/api/films/")
    
// }

// getStarWarsFilms()


// using try and catch properly

// async function getUser(user){
//     try {
//         let res = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(`${res.data.name}: ${res.data.bio}`)
//     } catch (e) {
//         console.log("User does not exist.")
//     }

// }

// getUser('colt')


//----------------------------------------
//practice refactoring old JQuery Garbage lol

// async function getPokemon(){
//     let pokemonArr = []
//     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)

//     for(let i=0; i<3; i++){
//         pokemonArr.push(res.data.results[i].name)
//     }
//     console.log(pokemonArr)
// }

// getPokemon()

async function getPoke(){
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(res.data.results[0].name)
}
    
getPoke()

//----------------------------------------
// you can do async callbacks in PARALLEL... first calling the axios.get in batches, then saying "await" in a batch
//then console.logging all of the promise responses. 
//"axios.get, await, then do something with all responses at once"

async function catchSomeOfEmParallel() {
    try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

        // Use Promise.all to fetch data in parallel
        let [p1, p2, p3] = await Promise.all([
            axios.get(res.data.results[0].url),
            axios.get(res.data.results[1].url),
            axios.get(res.data.results[2].url),
        ]);

        console.log(`The first pokemon is ${p1.data.name}`);
        console.log(`The second pokemon is ${p2.data.name}`);
        console.log(`The third pokemon is ${p3.data.name}`);
    } catch (error) {
        console.error("Error in catchSomeOfEmParallel:", error.message);
    }
}

catchSomeOfEmParallel();