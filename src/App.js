import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './hello'

function App({name, age}) {
return <div>Hello from app.js{name} age = {age-20}
        <br/>
        <Hello fname = {age}/>
        </div>
}

export default App;
