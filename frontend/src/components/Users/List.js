import React from 'react';
import Item from './item';

const List = (props) => {
    let i = 0;
    return (
        props.names.map(name => {
            i++;
            return <Item key={i.toString()} name={name} />
        })
    );
}

export default List;