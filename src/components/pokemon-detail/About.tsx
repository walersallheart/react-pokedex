import { useParams } from 'react-router-dom';
import { GetPokemonById } from "../../utils/GetPokemon";

import classes from './About.module.css';

export const About = () => {
    const { id } = useParams();
    const pokemon = GetPokemonById(Number(id));
    const gender = pokemon?.profile?.gender.split(":");
    const egg = pokemon?.profile?.egg;

    return <>
        <div className={classes.about}>
            <div className={classes.description}>{pokemon?.description}</div>

            <div className={classes.measurements}>
                <div className={classes['measurements-title']}>Height</div>
                <div className={classes['measurements-title']}>Weight</div>
                <div>{pokemon?.profile?.height}</div>
                <div>{pokemon?.profile?.weight}</div>
            </div>
        </div>

        <table cellPadding={0} cellSpacing={0} className={classes.breeding}>
            <th>
                <td colSpan={3}>Breeding</td>
            </th>
            <tr>
                <td>Gender</td>
                <td>{gender![0]}</td>
                <td>{gender![1]}</td>
            </tr>
            <tr>
                <td>Egg Groups</td>
                <td>{egg![0]}</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Egg Cycle</td>
                <td>{egg![1]}</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    </>;
}