import { useEffect, useState } from 'react';
import classes from './StatBar.module.css';

const getBarColor = (percentage:number):string => {
    if (percentage < .4) {
        return '#fb6d6c';
    }

    return '#4cc17a';
}

export const StatBar = (props:any) => {
    const statValue:number = props.statValue;
    const maxValue = props.maxValue || 255;
    const [percentage, setPercentate] = useState(0);

    useEffect(()  =>  {
        setTimeout(() => {
            setPercentate(statValue / maxValue);
        }, 500);
    }, [maxValue, statValue]);

    return <div className={classes.statbar}>
        <div></div>
        <div style={{width:'calc(100% * ' + percentage + ')', backgroundColor:getBarColor(percentage)}}></div>
    </div>;
}