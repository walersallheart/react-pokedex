import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";

import { Pokemon } from "../../model/Pokemon";

import classes from './DetailCard.module.css';

export const DetailCard = (props:any) => {
    const pokemon:Pokemon = props.pokemon;

    return <>
        <div className={classes['name-and-number']}>
            <h2>{pokemon.name}</h2>
        </div>

        <div className={classes['type-and-species']}>

        </div>

        <div className={classes['detail-nav']}>
            <div>
                <NavLink to={`/pokemon/${pokemon.id}/`}>About</NavLink>
                <NavLink to={`/pokemon/${pokemon.id}/stats`}>Base Stats</NavLink>
                <NavLink to={`/pokemon/${pokemon.id}/evolution`}>Evolution</NavLink>
            </div>
        </div>

        <Outlet />
    </>
}