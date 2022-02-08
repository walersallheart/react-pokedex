import classes from './Card.module.css';
import { GetPokemonTypeColor } from "../utils/GetPokemon";

const Card = (props:any)  => {
    const pokemon = props.pokemon;
    const typeColor = GetPokemonTypeColor(Number(pokemon.id));

    const selectPokemon = () =>  {
        console.log('selectPokemon');
    }

    return <div onClick={selectPokemon} className={classes.card} style={{backgroundColor:typeColor, backgroundImage: `url('images/thumbnails/${pokemon.id}.png')`}}>
        <p className={classes['pokemon-name']}>{pokemon.name}</p>
        <ul className={classes['type-list']}>
            {pokemon.type?.map((type:string) => <li key={type}>{type}</li>)}
        </ul>
    </div>;
}

export default Card;