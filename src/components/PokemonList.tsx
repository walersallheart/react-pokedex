import classes from './PokemonList.module.css';
import { Pokemon } from '../model/Pokemon';
import { GetPokemonList } from '../utils/GetPokemon';

export const PokemonList = () => {
    const pokemonList:Pokemon[] = GetPokemonList();

    return <div className={classes['pokemon-list']}>
        { pokemonList.map(pokemon => <li>{ pokemon.name }</li>) }
    </div>
}