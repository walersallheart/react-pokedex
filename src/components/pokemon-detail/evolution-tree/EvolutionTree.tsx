import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EvolutionThumbnail } from "./EvolutionThumbnail";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Pokemon } from "../../../model/Pokemon";

import classes from './EvolutionTree.module.css';

export const EvolutionTree = (props:any) => {
    const previousPokemon:Pokemon = props.previous;
    const nextPokemon:Pokemon = props.next;

    return <>
        <div className={classes['evolution-row']}>
            <div>
                <EvolutionThumbnail pokemon={previousPokemon} />
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div>
                <EvolutionThumbnail pokemon={nextPokemon} />
            </div>
        </div>
    </>;
}