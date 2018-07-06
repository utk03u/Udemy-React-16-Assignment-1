import React from 'react';

const UserOutput  = (props) => {
    return(
        <div>
            <p>This is a basic react app.</p>
            <p>We can see how two way binding works below. Enter any string in input below.</p>
            <p>{props.name}</p>
        </div>
    )
};
export default UserOutput;