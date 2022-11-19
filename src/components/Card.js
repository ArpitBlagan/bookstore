import React from 'react';

function Card({title,src,date,id,auth}){
    return (
        <div className='item' key={id}>
                    <div className='content'>
                        <img src={src} alt="image"/>
                        <div className='ttt'>
                        <h4>{title}</h4>
                        {auth}
                        <p>{date}</p>
                    </div>
                </div>
                </div>
    );
}
export default Card;