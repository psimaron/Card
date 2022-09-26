import React from 'react';
import './Item.css';

const Item = (props) => {

    return (
    
    <div className="item">
            <div className="icon">{props.icon}</div>
        <div className="item-content">
            <div className="titleh"><h1>{props.title}</h1></div>
            <div className="text"><p>{props.text}</p></div>
        </div>
    </div>
    );
}

export default Item ;