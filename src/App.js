import React, { Component } from 'react';
import { PeopleForm, GreetingList, LanguageDropdown } from './components';
import './app.css';

class App extends Component {
    title = 'Greeting people';
    render() {
        return (
            <div className="app">
                <h1>{this.title}</h1>
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
