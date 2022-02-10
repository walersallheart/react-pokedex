import { StatBar } from "./StatBar";

import classes from './BaseStats.module.css';
import { PokemonStats } from "../../../model/Pokemon";
import { useParams } from "react-router-dom";
import { GetPokemonById } from "../../../utils/GetPokemon";

export const BaseStats = (props:any) => {
    const { id } = useParams();
    const pokemon = GetPokemonById(Number(id));
    const statValues:PokemonStats = pokemon!.base!;

    const totalStats = statValues.HP + statValues.Attack + statValues.Defense + statValues.Speed;

    return <>
        <div className={classes['base-stats']}>
            <div className={classes['stat-name']}>HP</div>
            <div className={classes['stat-value']}>{ statValues.HP }</div>
            <StatBar statValue={statValues.HP} />
        </div>

        <div className={classes['base-stats']}>
            <div className={classes['stat-name']}>Attack</div>
            <div className={classes['stat-value']}>{ statValues.Attack }</div>
            <StatBar statValue={statValues.Attack} />
        </div>

        <div className={classes['base-stats']}>
            <div className={classes['stat-name']}>Defense</div>
            <div className={classes['stat-value']}>{ statValues.Defense }</div>
            <StatBar statValue={statValues.Defense} />
        </div>

        <div className={classes['base-stats']}>
            <div className={classes['stat-name']}>Speed</div>
            <div className={classes['stat-value']}>{ statValues.Speed }</div>
            <StatBar statValue={statValues.Speed} />
        </div>

        <div className={classes['base-stats']}>
            <div className={classes['stat-name']}>Total</div>
            <div className={classes['stat-value']}>{ totalStats }</div>
            <StatBar statValue={totalStats} maxValue={720} />
        </div>
    </>;
}