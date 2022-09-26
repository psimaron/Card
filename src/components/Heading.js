import React from 'react';
import './Heading.css';

const Heading = (props) => {
    
        return (
        <div className="title">
                <div className="title1">
                        {props.title}
                </div>
                <div className="title2">
                        {props.stitle}
                </div>
        </div>        
        );
        }
export default Heading;