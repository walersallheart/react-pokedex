import { Pokemon } from "../../model/Pokemon";
import { useParams } from "react-router-dom";
import { GetPokemonById } from "../../utils/GetPokemon";
import { EvolutionTree } from "./evolution-tree/EvolutionTree";

import classes from './EvolutionChain.module.css';

export const EvolutionChain = (props:any) => {
    const { id } = useParams();
    const pokemon:Pokemon = GetPokemonById(Number(id))!;
    const evolutionTree:Pokemon[] = [pokemon];
    const evolutionTreeContent = [];

    pokemon.next_evolution?.forEach(function (evolution:any, index) {
        evolutionTree.push(GetPokemonById(evolution.num)!);
    })

    if  (evolutionTree.length > 0) {
        for (let i = 0, len = evolutionTree.length -1; i<len; i++) {
            evolutionTreeContent.push(<EvolutionTree key={evolutionTree[i].name} previous={evolutionTree[i]} next={evolutionTree[i + 1]} condition={""} />);
        }
    }

    return <div className={classes['evolution-chain']}>
            <h2>Evolution Chain</h2>
            { evolutionTreeContent.map((pokemon, i) => pokemon) }
    </div>;
}