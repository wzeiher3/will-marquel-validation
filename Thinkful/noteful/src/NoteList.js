  
import React from 'react';
import Note from './Note';

export default function NoteList(props){
        
    const noteList = props.notes.map(note => 
                <Note 
                   id = {note.id}
                   key = {note.id}
                   name = {note.name}
                   handleClick = {props.handleClick}
                   modified = {note.modified}
                   folderId = {note.folderId}
                   content = {note.content} 
                   note = {note}
                />
            );





    return (
        <div className="NoteList">
            {noteList}
        </div>
    )
} 