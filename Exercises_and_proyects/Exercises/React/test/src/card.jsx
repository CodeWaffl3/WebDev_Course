import React from 'react';
import './card_style.css';


function Card(props) {
    const imgUrl = "http://picsum.photos/200";
    return(
        <div className="wrapper">
            <h2>{'name' in props ? props.name : "Frodo Baggins"}</h2>
            <img className="profile" src={props.img} alt="random img"/>
            <p>{props.adress}</p>
        </div>
    )
}

export default Card;