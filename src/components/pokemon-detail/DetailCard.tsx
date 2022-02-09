import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";

import { Pokemon } from "../../model/Pokemon";
import { TypeList } from "../TypeList";

import classes from './DetailCard.module.css';

export const DetailCard = (props:any) => {
    const pokemon:Pokemon = props.pokemon;

    return <>
        <div className={classes['name-and-number']}>
            <div className={classes.name}>{pokemon.name}</div>
            <div className={classes.number}>#{pokemon.id}</div>
        </div>

        <div className={classes['type-and-species']}>
            <TypeList direction='horizontal' pokemon={pokemon} />
            <div className={classes.species}>{pokemon.species}</div>
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