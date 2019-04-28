import React from 'react';

const Item = (props) => {
    return (
        <React.Fragment>
            <label>{props.name}</label>
            <br />
        </React.Fragment>
    )
};

export default Item;