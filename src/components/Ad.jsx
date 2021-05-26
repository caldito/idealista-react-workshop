import React, { useState } from 'react';

const Ad = ({ title = 'defaultTitle', description = 'defaultDesc', isFav = false} = {}) => {
    const [isFavorite, setIsFavorite] =  useState(isFav)
    const onFavorite = () => setIsFavorite(!isFavorite)
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <label>
                <input onChange={onFavorite} type="checkbox" checked={isFavorite}/>
                Favourite
            </label>
        </div>
    );
};

export default Ad;