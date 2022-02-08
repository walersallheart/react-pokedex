import { Pokemon } from "../model/Pokemon";
import classes from './Card.module.css';
import { GetPokemonTypeColor } from "../utils/GetPokemon";

const Card:React.FC<Pokemon> = (props)  => {
    const typeColor = GetPokemonTypeColor(Number(props.id));

    return <div className={classes.card} style={{backgroundColor:typeColor, backgroundImage: `url('images/thumbnails/${props.id}.png')`}}>
        <p className={classes['pokemon-name']}>{props.name}</p>
        <ul className="type-list">
            {props.type?.map(type => <li>{type}</li>)}
        </ul>
    </div>;
}

export default Card;