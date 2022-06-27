import React from "react";
import UserList from "../redux-saga/pages/UserList";
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <UserList />
            </div>
        );
    }
}
