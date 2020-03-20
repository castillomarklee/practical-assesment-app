import React from "react";
import ReactDOM from "react-dom";
import MainForm from './MainForm';
import './style.scss'; 

const App = () => {
    return (
        <div className="ui container comments sample">
            <MainForm />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));