import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";

import { Pokemon } from "../../model/Pokemon";
import { TypeList } from "../TypeList";

import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GetFavorite, ToggleFavorite } from "../../utils/GetPokemon";

import classes from './DetailCard.module.css';
import { useEffect, useState } from "react";

export const DetailCard = (props:any) => {
    const pokemon:Pokemon = props.pokemon;
    const [favorited,  setFavorited] = useState(false);

    useEffect(() => {
        setFavorited(GetFavorite(Number(props.pokemon.id)));
    }, [props.pokemon.id]);

    const toggleFavorite = (event:any):void =>  {
        setFavorited(ToggleFavorite(Number(pokemon.id)));
    }

    return <>
        <div className={classes['arrow-and-favorites']}>
            <div>
                <NavLink to={`/`} className={classes['back-button']}><FontAwesomeIcon title="Back to Pokemon List" icon={faArrowLeft} /></NavLink>
            </div>
            <div className={classes.favorites}>
                {favorited ?
                    <FontAwesomeIcon onClick={toggleFavorite} title="Add to Favorites" icon={faHeart} /> :
                    <FontAwesomeIcon onClick={toggleFavorite} title="Add to Favorites" icon={farHeart} />
                }
            </div>
        </div>

        <div className={classes['name-and-number']}>
            <div className={classes.name}>{pokemon.name}</div>
            <div className={classes.number}>#{pokemon.id}</div>
        </div>

        <div className={classes['type-and-species']}>
            <TypeList direction='horizontal' size='large' pokemon={pokemon} />
            <div className={classes.species}>{pokemon.species}</div>
        </div>

        <div className={classes['full-image']}>
            <img
                src={`/images/full/${pokemon.id}.png`}
                alt={pokemon.name}
            />
        </div>

        <div className={classes['detail-nav']}>
            <div>
                <NavLink to={`/pokemon/${pokemon.id}/`}>About</NavLink>
                <NavLink to={`/pokemon/${pokemon.id}/stats`}>Base Stats</NavLink>
                <NavLink to={`/pokemon/${pokemon.id}/evolution`}>Evolution</NavLink>
            </div>
        </div>

        <div className={classes['detail-content']}>
            <Outlet />
        </div>
    </>
}