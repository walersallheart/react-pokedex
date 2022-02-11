import { Pokemon } from '../model/Pokemon';
import classes from './TypeList.module.css';

export const TypeList = (props:any)  => {
    const pokemon:Pokemon = props.pokemon;
    const direction = props.direction || 'vertical';
    const size = props.size || 'normal';
    const listClass = size === 'large' ? `${classes['type-list']} ${classes['large']}` : `${classes['type-list']}`

    return <ul className={listClass}>
        {pokemon.type?.map((type:string) => <li className={classes[direction]} key={type}>{type}</li>)}
    </ul>;
}