import { useState } from "react";

export default function Player({ name, symbol, isActive }) {

    const [enteredName, setEnteredName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const changeIsEditingStatusHandler = (val) => {
        setEnteredName(prevState => {
            if (val && prevState.trim() === name) {
                return '';
            } else if (!val && prevState.trim().length === 0) {
                return name;
            } else {
                return prevState;
            }
        })
        setIsEditing(val);
    }

    const enteredNameHandler = ($event) => {
        setEnteredName($event.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing && <input type="text" value={enteredName} onChange={enteredNameHandler}></input>}
                {!isEditing && <span className="player-name">{enteredName}</span>}
                <span className="player-symbol">{symbol}</span>
                {!isEditing && <button onClick={() => changeIsEditingStatusHandler(true)}>edit</button>}
                {isEditing && <button onClick={() => changeIsEditingStatusHandler(false)}>save</button>}
            </span>
        </li>

    )
}