import classes from './Card.module.css';
import { GetPokemonTypeColor } from "../utils/GetPokemon";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { TypeList } from './TypeList';

const Card = (props:any)  => {
    const pokemon = props.pokemon;
    const typeColor = GetPokemonTypeColor(Number(pokemon.id));
    const detailPageLink = `pokemon/${pokemon.id}`;

    return <div className={classes.card} style={{backgroundColor:typeColor}}>
        <Link to={detailPageLink}>
            <p className={classes['pokemon-name']}>{pokemon.name}</p>

            <TypeList pokemon={pokemon} />

            <LazyLoad height={100} once style={{position:'absolute', right:'10px', bottom:'10px'}}>
                <img
                    src={`images/thumbnails/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
            </LazyLoad>
        </Link>
    </div>;
}

export default Card;