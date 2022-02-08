import { Pokemon } from "../model/Pokemon"

const pokemonData:Pokemon[] = require('../data/pokemon.json');

export function GetPokemonById(id:number):Pokemon | undefined {
    const pokemonIndex = String(id).padStart(3, "0");
    const foundPokemon:Pokemon | undefined = pokemonData.find(pokemon => pokemon.id === pokemonIndex);

    return foundPokemon;
}

export function GetPokemonList():Pokemon[] {
    return pokemonData;
}