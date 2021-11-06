import React from 'react';

import Joke from "./Joke";
import jokesData from './jokesData';

function App() {
    const jokeComponent = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponent}
        </div>
    );
}
export default App;