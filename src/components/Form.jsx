import React, { useState } from 'react';


const Form = ({ onCreatedAd }) => { 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isFavorite, setFavorite] = useState(false);
    
    const onFavorite = () => setFavorite(!isFavorite);
    const onTitleChange = (event) => setTitle(event.target.value);
    const onDescriptionChange = (event) => setDescription(event.target.value);

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        onCreatedAd({
            title,
            description,
            isFavorite       
        })
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" onChange={onTitleChange} placeholder='Title' value={title} />
            <input type="text" onChange={onDescriptionChange} placeholder='Description' value={description} />
            <label>
                <input type="checkbox" onChange={onFavorite} checked={isFavorite} />
                <span>Favorite</span>
            </label>
            <input type="submit" />
        </form>
    );
}; 
export default Form;
