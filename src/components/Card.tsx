import classes from './Card.module.css';
import { GetPokemonTypeColor } from "../utils/GetPokemon";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Card = (props:any)  => {
    const pokemon = props.pokemon;
    const typeColor = GetPokemonTypeColor(Number(pokemon.id));
    const detailPageLink = `pokemon/${pokemon.id}`;

    return <div className={classes.card} style={{backgroundColor:typeColor}}>
        <Link to={detailPageLink}>
            <p className={classes['pokemon-name']}>{pokemon.name}</p>
            <ul className={classes['type-list']}>
                {pokemon.type?.map((type:string) => <li key={type}>{type}</li>)}
            </ul>
            <LazyLoad height={100} once>
                <img
                    className={classes.thumbnail}
                    src={`images/thumbnails/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
            </LazyLoad>
        </Link>
    </div>;
}

export default Card;