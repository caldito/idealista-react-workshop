import React, { useState } from 'react';
import Form from './components/Form'
import Ad from './components/Ad'

export default () => {

    const [list, setList] = useState([]);

    return (//[
        <Form onCreatedAd={(ad) => {
            setList([ad], ...list)
            console.log(list);
        }} />//,
        //<Ad title="My Ad Title" description = 'My Ad description'/>
    //]
    )
};
