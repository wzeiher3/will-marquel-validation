import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import Main from './Main';
import MainSidebar from './sidebars/MainSidebar';
import store from './store.js';
import NoteList from './NoteList';
import NoteSideBar from './sidebars/NoteSidebar';
import MainNote from './MainNote';
import FilteredNoteList from './FilteredNoteList';

export default class App extends React.Component {
  state ={
      folders: store.folders,
      notes: store.notes,
      note: {}
  }
  
  handleNoteClick(note){
      this.history.push(`/notes/${note.id}`)
      this.setState({
        note: note
      })

      console.log(note);
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <h1>Noteful</h1>

    <Sidebar>
          <Route exact path='/' render={() => 
              <MainSidebar 
                folders={this.state.folders}
                />
              } 
            />

            <Route exact path='/folders/:id' render={() => 
              <MainSidebar 
                folders={this.state.folders}
                />
              } 
            />
          <Route path='/notes' render={() =>
              <NoteSideBar
                notes={this.state.notes} />
          } />
    </Sidebar>
      <Main>
           <Route exact path='/' render={() =>  
              <NoteList 
                  notes={this.state.notes} 
                  handleClick = {this.handleNoteClick}
              />} />
              
            <Route exact path='/notes/:id' render={(routerProps) => 
              <MainNote 
                  {...routerProps}
                  notes = {this.state.notes}
              />
          } />

            <Route exact path='/folders/:id' render={(routerProps) => 
              <FilteredNoteList 
                  {...routerProps}
                  notes = {this.state.notes}
              />
          } />
       
      </Main>

    </div>
  );

  }
}