import React from 'react';

//stateless functional component
const Action = (props)=>{
    return(
        <div>
        <div>
        <button
         onClick = {props.handlePick}
         disabled = {!props.hasOptions }
        >
        What should I do?
        </button>
    </div>
        </div>
    );
}

export default Action;