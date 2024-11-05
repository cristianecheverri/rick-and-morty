import { useEffect, useState } from "react"
import Character from "./Character";
import Paginator from "./Paginator";
import image from './../assets/images/rick-sanchez.gif';

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
                setIsLoading(false);
            })
    }, [page]);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-2">
                {isLoading ? <img src={image} alt="loading" /> : ''}
                {!isLoading && characters.map(character => (
                    <Character 
                        key={character.id} 
                        name={character.name} 
                        image={character.image}
                        status={character.status}
                        species={character.species} />
                ))}
            </div>
            <Paginator page={page} info={info} setPage={setPage}/>
        </>
    )
}

export default RickAndMortyCharacters;