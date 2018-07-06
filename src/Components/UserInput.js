import React from 'react';
import './Style.css';

const UserInput = (props) => {
    return(
    <div>
        <input className = "userinp" type = "text" value = {props.name} onChange = {props.updated}/>
    </div>
    )
};

export default UserInput;