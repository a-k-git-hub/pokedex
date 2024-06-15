import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokeList } from '../features/pokeList';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import './Home.css';

const PokeCards = ({ data, dispatch }) => {

    const navigate = useNavigate();
    const handleClick = (item, index) => {
        navigate('/PokeDetails', { state: { item, index } });
    };
    return (
        <div className="PokeCardsContainer" >
            {data?.map((item, index) => {
                return (
                    <div key={index} className="PokeCardsBox">
                        <img className="PokeBallImage"
                            src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png" />
                        <h3>{item.name}</h3>
                        <div className="PokeCardsButtonsBox">
                            <div className="PokeCardsDeleteAndNavigateButton"
                                onClick={() => Delete(data, index, dispatch)}>
                                <img className="PokeCardsDeleteNavigateImage"
                                    src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" />
                            </div>
                            <div className="PokeCardsDeleteAndNavigateButton"
                                onClick={() => handleClick(item, index)}>
                                <img className="PokeCardsDeleteNavigateImage"
                                    src="https://cdn-icons-png.flaticon.com/128/2267/2267911.png" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Delete = (data, index, dispatch) => {
    const newData = [...data]
    newData.splice(index, 1)
    dispatch(setPokeList(newData));
}

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const data = useSelector((state) => state.data.pokeData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((res) => dispatch(setPokeList(res.results)));
    }, []);

    return (
        <div className="HomeContainer">
            <Header />
            <PokeCards data={data} dispatch={dispatch} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}

export default Home;