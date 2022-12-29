import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {UsersList} from "./components/UsersList/UsersList";
import {UserInfo, Widget} from "./components/Widget/Widget";
import jsonData from './initData.json'
function App() {
    const test =[
        {
            "phone": "902-738-3242",
            "name": "Geordan Aaryn",
            "nickname": "@geordanaaryn",
            "email": "geordan.aaryn@fallinhay.com",
            "position": "Chief Executive Officer",
            "photo": "1.jpg"
        },
        {
            "phone": "902-782-3286",
            "name": "Brazil Izair",
            "nickname": "@brazilizair",
            "email": "brazil.izair@fallinhay.com",
            "position": "Managing Director",
            "photo": "2.jpg"
        }];
        return (
        <div className="App">
            {/*<Counter />*/}t
            {/*<UsersList/>*/}
            <Widget list={test}/>
        </div>
  );
}

export default App;
