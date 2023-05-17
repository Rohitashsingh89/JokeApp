let jokes = document.getElementById('jokes');
let newJoke = document.getElementById('new');
let realData = "";



const getNewJokes = () => {
    jokes.innerText = `${realData.jokeContent}`;    
    console.log(`${randomJoke.jokeContent}`)
}

const getJokes = async () => {
    const api = "https://hindi-jokes-api.onrender.com/jokes?api_key=f5499f31439f6f5871682c3bd7eb";
    try {
        const data = await fetch(api);
        realData = await data.json();
        // console.log(realData.jokeContent)
        // console.log(realData)

        getNewJokes();
        
    } catch(error) {}
}

newJoke.addEventListener("click", getJokes);
getJokes();