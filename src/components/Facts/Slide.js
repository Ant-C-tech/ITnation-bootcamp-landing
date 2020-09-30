import React from 'react';

const Slide = ({item}) => {
    return (
        <div className="slide">
            <img className="slide__img" src={item.link} alt="problem illustration"/>
            <p className="slide__text">{item.text}</p>
        </div>
    );
};

export default Slide;