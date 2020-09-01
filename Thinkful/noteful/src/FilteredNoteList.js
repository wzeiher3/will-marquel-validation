import React from 'react';
import Note from './Note'

export default function FilteredNoteList(props){
    const filteredList = props.notes.filter(note => 
        note.folderId === props.match.params.id
    );

    const newList = filteredList.map(note =>
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
        )



return (
<div className="NoteList">
    { newList }
</div>
)
}