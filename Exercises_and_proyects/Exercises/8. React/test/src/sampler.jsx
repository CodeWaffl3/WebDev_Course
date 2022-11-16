import React from 'react';
import ReactiveLabel from "./ReactiveLabel";
import contacts from "./data/contacts";
import Card from "./card";

const Sampler = () => {
    const customStyle = {
        color: "black",
        fontSize: "25px",
        backgroundColor: "orange"
    };

    const num = 7;
    const name = "Gabriel";
    const lastname = "Cardenas";
    const randomNum = Math.floor(Math.random()*100);
    var currentDate = Date();
    if (randomNum > 50){
        customStyle.color = "white";
        customStyle.backgroundColor = "green";
    }
    const imgUrl = "http://picsum.photos/200";
    var filterMask = "M";

    function createCard(contact){
        return (
            <Card
                name={contact.name}
                img={contact.img}
                adress={contact.adress}
            />
        )
    }
    return (
        <div>
            <h1 style={customStyle} >Hello World</h1>
            <p>Is like EJS: {num}</p>
            <p>Just a random number { randomNum }</p>
            <p>Name:  { name + " " + lastname }</p>
            <p>We are in { currentDate } </p>
            <img src= { imgUrl } alt="Dog"/>

            <ReactiveLabel/>
            <h1>Filter</h1>
            {contacts
                .filter((contact)=>{
                    return contact.name.includes("F");
                })
                .map(createCard)
            }
            <h1>Find</h1>
            {createCard(contacts
                .find(contact =>{
                    return contact.name.includes(filterMask);
                })
            )}
        </div>
    );
};

export default Sampler;