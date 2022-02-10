import { Pokemon } from "../../../model/Pokemon";

export const EvolutionThumbnail = (props:any) => {
    const pokemon:Pokemon = props.pokemon;

    return <>
        <img
                src={`/images/thumbnails/${pokemon.id}.png`}
                alt={pokemon.name}
            />
    </>;
}