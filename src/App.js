import React, { Component } from 'react';
import { PeopleForm, GreetingList, LanguageDropdown } from './components';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Greeting people</h1>
                <br></br>
                <PeopleForm />
                <br></br>
                <LanguageDropdown />
                <br></br>
                <GreetingList />
            </div>
        );
    }
}

export default App;
