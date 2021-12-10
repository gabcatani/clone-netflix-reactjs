import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow  from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() =>{
        const loadAll = async() => {
            // Pegando Toda a Lista de Filmes
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //Pegando o FeaturedMovie
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
            console.log(chosenInfo)
            
        }

        loadAll();
    }, []);

        return (
            <div className="page">
                
                <Header />


                {featuredData &&
                    <FeaturedMovie item={featuredData} />
                }

                <section className="lists">
                    {movieList.map((item, key)=>(
                        < MovieRow key={key} title={item.title} items={item.items}/>
                    ))}
                </section>
            </div>
        )
}