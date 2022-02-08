import classes from './Card.module.css';
import { GetPokemonTypeColor } from "../utils/GetPokemon";
import { Link } from 'react-router-dom';

const Card = (props:any)  => {
    const pokemon = props.pokemon;
    const typeColor = GetPokemonTypeColor(Number(pokemon.id));
    const detailPageLink = `pokemon/${pokemon.id}`;

    return <div className={classes.card} style={{backgroundColor:typeColor, backgroundImage: `url('images/thumbnails/${pokemon.id}.png')`}}>
        <Link to={detailPageLink}>
            <p className={classes['pokemon-name']}>{pokemon.name}</p>
            <ul className={classes['type-list']}>
                {pokemon.type?.map((type:string) => <li key={type}>{type}</li>)}
            </ul>
        </Link>
    </div>;
}

export default Card;