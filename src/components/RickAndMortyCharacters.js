import { useEffect, useState } from "react"
import Character from "./Character";

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    return (
        <>
            {characters.map(character => (
                <Character key={character.id} name={character.name} image={character.image}/>
            ))}
        </>
    )
}

export default RickAndMortyCharacters;