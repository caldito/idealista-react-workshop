import React, { useState } from 'react';

const Form = ({ inputTitle = '', inputDescription = '', isFav = false } = {}) => { 
    const [title, setTitle] = useState(inputTitle);
    const [description, setDescription] = useState(inputDescription);
    const [isFavorite, setFavorite] = useState(isFav);
    
    const onFavorite = () => setFavorite(!isFavorite);
    const onTitleChange = (event) => setTitle(event.target.value);
    const onDescriptionChange = (event) => setDescription(event.target.value);
    
    return (
        <div>
            <input type="text" onChange={onTitleChange} placeholder='Title' value={title} />
            <input type="text" onChange={onDescriptionChange} placeholder='Description' value={description} />
            <label>
                <input type="checkbox" onChange={onFavorite} checked={isFavorite} />
                <span>Favorite</span>
            </label>
        </div>
    );
}; 
export default Form;
