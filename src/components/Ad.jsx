import React from 'react';

const Ad = ({ title = 'defaultTitle', description = 'defaultDesc'} = {}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <label>
                <input type="checkbox"/>
                Favourite
            </label>
        </div>
    );
};

export default Ad;