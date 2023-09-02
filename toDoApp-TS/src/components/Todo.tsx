import { type Todo as TodoType } from "../types";
type Props = TodoType;

export const Todo: React.FC<Props> =()=>{
    return(
        <div className="view">
            <input 
            className="toogle"
            checked={completed}
            type="checkbox"
            onChange={()=>{}}
            />
            <label>{title}</label>
            <button className="destroy" onClick={()=>{}}></button>
                
        </div>
    )
}

// min 29:00