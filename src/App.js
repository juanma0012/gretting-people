import React, { Component } from 'react';
import { PeopleForm, GreetingList, LanguageDropdown } from './components'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <PeopleForm />
                <LanguageDropdown />
                <GreetingList />
            </div>
        );
    }
}

export default App;
