import React, { useState, useEffect } from 'react';
import List from './List';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

const View = () => {
    const [names, setNames] = useState([]);
    
    const refresh = () => {
        axios.get('http://localhost:4500/users')
            .then(res => {
                const apiNames = [];
                res.data.forEach(element => {
                    apiNames.push(element.name);
                });
                setNames(apiNames);
            })
    };

    const addName = (newName) => {
        setNames([
            ...names,
            newName
        ]);
    };
    
    var socket = socketIOClient('http://localhost:4500');
    socket.on('changeData', (data) => {
        if (data.operationType === 'insert') {
            addName(data.fullDocument.name);
        } else {
            refresh();
        }
    });

    useEffect(() => {
        refresh();
    }, []);

    return <List names={names}/>
};

export default View;