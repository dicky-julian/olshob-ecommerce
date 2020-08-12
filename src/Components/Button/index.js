import React from 'react';
import './index.scss';

const Button = props => {
    return (
        <a href={props.link} className={`bt bt__${props.size} bt__${props.styles}`}>
            {props.title}
        </a>
    )
}

export default Button;