import React from 'react';
import {useParams} from 'react-router-dom';

const Book = () =>{
    const {id} = useParams();
    return (
        <div>
            <h3>Books {id}</h3>
        </div>
    );
}

export default Book;