import { Pokemon } from '../model/Pokemon';
import classes from './TypeList.module.css';

export const TypeList = (props:any)  => {
    const pokemon:Pokemon = props.pokemon;
    const direction = props.direction || 'vertical';

    return <ul className={classes['type-list']}>
        {pokemon.type?.map((type:string) => <li className={classes[direction]} key={type}>{type}</li>)}
    </ul>;
}