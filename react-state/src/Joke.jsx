import { useEffect, useState } from "react";

export default function Joke() {
    let [Joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });

    };

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({
                setup: jsonResponse.setup,
                punchline: jsonResponse.punchline,
            });
        }
        getFirstJoke();
    },[]);

    return (
      <div>
        <h3>Here your joke</h3>
        <h2>{Joke.setup}</h2>
        <h2>{Joke.punchline}</h2>
        <button onClick={getNewJoke}>Get joke</button>
      </div>
    );
}