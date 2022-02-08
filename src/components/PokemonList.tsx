import classes from './PokemonList.module.css';
import { Pokemon } from '../model/Pokemon';
import { GetPokemonList } from '../utils/GetPokemon';
import Card from './Card';

export const PokemonList = () => {
    const pokemonList:Pokemon[] = GetPokemonList();

    return <>
        <header></header>
        <h1>Pokédex</h1>
        <div className={classes['pokemon-list']}>
            {pokemonList.map(pokemon => {
                return <Card
                            key={pokemon.name}
                            pokemon={pokemon}
                        />
            }) }
        </div>
    </>;
}