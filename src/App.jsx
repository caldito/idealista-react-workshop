import React from 'react';
import Form from './components/Form'
import Ad from './components/Ad'

export default () => {
    return ([
        <Form/>,
        <Ad title="My Ad Title" description = 'My Ad description'/>
    ])
};
