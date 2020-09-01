import React from 'react';
import './MainSidebar.css';
import { Link } from 'react-router-dom';

export default class MainSidebar extends React.Component{
    render(){
        return (
            <div className="Main-Sidebar">
                {this.props.folders.map(folder => 
                    <Link to={`/folders/${folder.id}`} key={folder.id}>{folder.name}</Link>
                )}
            </div>
        )
    }
}