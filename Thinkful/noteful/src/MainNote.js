import React from 'react';

export default function MainNote(props){
    console.log(props)
    const note = props.notes.find(item => item.id === props.match.params.id);
    return (
        <div className="Main-Note">
            <h2>{note.name}</h2>
            <p>{note.content}</p>
        </div>
    )
}