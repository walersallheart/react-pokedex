import { Pokemon } from "../model/Pokemon"

type TypeColor = {
    color: string;
    type: string;
}

const pokemonData: Pokemon[] = require('../data/pokemon.json');
const typeColors: TypeColor[] = require('../data/type-colors.json');

export function GetPokemonById(id: number): Pokemon | undefined {
    const pokemonIndex = String(id).padStart(3, "0");
    const foundPokemon: Pokemon = ensure(pokemonData.find(pokemon => pokemon.id === pokemonIndex));

    return foundPokemon;
}

export function GetPokemonList(): Pokemon[] {
    return pokemonData;
}

export function GetPokemonTypeColor(id: number): string {
    const pokemon = GetPokemonById(id);
    const pokemonType = String(pokemon?.type[0]).toLowerCase();
    const typeColor: TypeColor = ensure(typeColors.find(color => color.type === pokemonType));

    return typeColor.color;
}

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}