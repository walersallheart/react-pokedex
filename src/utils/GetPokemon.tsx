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

function replacer(key:any, value:any):any {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}
function reviver(key:any, value:any):any {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

export function ToggleFavorite(id: number): boolean {
    const favoriteStorageData = localStorage.getItem('favoriteData');
    let favoriteData: Map<String, boolean> = new Map();
    let favorited = true;  //default to true because the first time this is called we will be making it a favorite
    let key = 'favorite-' + id;

    if (favoriteStorageData !== null) {
        favoriteData = JSON.parse(favoriteStorageData, reviver);
    }

    if (favoriteData.has(key)) {
        favorited = favoriteData.get(key)!;
        favorited = !favorited;
    }

    favoriteData.set(key, favorited);
    localStorage.setItem('favoriteData', JSON.stringify(favoriteData, replacer));

    return favorited;
}

export function GetFavorite(id: number): boolean {
    const favoriteStorageData = localStorage.getItem('favoriteData');
    let favoriteData: Map<String, boolean> = new Map();
    let key = 'favorite-' + id;

    if (favoriteStorageData !== null) {
        favoriteData = JSON.parse(favoriteStorageData, reviver);
    }

    if (favoriteData.has(key)) {
        return favoriteData.get(key)!;
    }

    return false;
}

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}