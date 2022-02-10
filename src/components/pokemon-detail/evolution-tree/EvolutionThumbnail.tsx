import { Pokemon } from "../../../model/Pokemon";

import classes from './EvolutionThumbnail.module.css';

export const EvolutionThumbnail = (props:any) => {
    const pokemon:Pokemon = props.pokemon;

    const backgroundStyle = { "--background-image": "url('/images/icons/pokeball-grey.png')" } as React.CSSProperties;

    return <div style={backgroundStyle} className={classes['evolution-thumbnail-container']}>
        <img
                src={`/images/thumbnails/${pokemon.id}.png`}
                alt={pokemon.name}
            />
    </div>;
}