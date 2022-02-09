import classes from './PokemonDetail.module.css';
import { useParams } from 'react-router-dom';
import { GetPokemonTypeColor, GetPokemonById } from "../../utils/GetPokemon";
import Card from '../Card';

export const PokemonDetail = (props:any) => {
    const { id } = useParams();
    const pokemon = GetPokemonById(Number(id));
    const typeColor = GetPokemonTypeColor(Number(id));

    return <div className={classes['detail-view']} style={{backgroundColor:typeColor}}>
        <Card pokemon={pokemon} />
    </div>
}