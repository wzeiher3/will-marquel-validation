import React from 'react';
import { Link } from 'react-router-dom'

export default function Note(props){
    return(

        <div className="Note" id={props.id}>
            <Link to={`/notes/${props.id}`}>
                {props.name}
            </Link>
        </div>
    )
}