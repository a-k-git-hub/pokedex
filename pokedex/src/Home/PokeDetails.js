import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './PokeDetails.css';

function PokeDetails(props) {
    const location = useLocation();
    const [pokemonDetail, setPokemonDetail] = useState();

    useEffect(() => {
        fetch(`${location.state.item.url}`)
            .then(res => res.json())
            .then(res => setPokemonDetail(res))
            .catch(error => console.error('Error fetching Pokemon details:', error))
    }, [location.state.url]);

    if (!pokemonDetail) {
        return <div>Loading...</div>;
    }

    const moves = () => {
        return (
            pokemonDetail.moves.slice(1, 6).map((item) => {
                return (
                    <div className="PokemonMovesContainer">
                        <img
                            className="PokeBallImage"
                            src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png" />
                        <h3>{item.move.name}</h3>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <img className="PokemonImage" src={pokemonDetail.sprites.back_default} />
            <h1>{location.state.item.name}</h1>
            <h2 className="MovesTextStyle" >Moves:</h2>
            <div className="MovesContainer">
                {moves()}
            </div>
        </div>
    )
}

export default PokeDetails;