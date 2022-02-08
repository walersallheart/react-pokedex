import { Pokemon } from "../model/Pokemon";

const Card:React.FC<Pokemon> = (props)  => {
    return <div style={{backgroundImage: `url('images/img.jpg')`}}>
        <p>{props.name}</p>
        <ul className="type-list">
            {props.type?.map(type => <li>{type}</li>)}
        </ul>
    </div>;
}

export default Card;