import React from 'react';
import './App.css';
import {Widget} from "./components/Widget/Widget";
import {useAppSelector} from "./app/hooks";
function App() {
    const users = useAppSelector((state) => state.widget.users);
        return (
        <div className="App">
            <Widget list={users}/>
        </div>
  );
}

export default App;
