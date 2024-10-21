// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import { getDatabase } from "firebase/database";
import firebaseApp, { databaseURL } from "./firebase/firebaseconfig";
import "./App.css";
import axios from "axios";
const firebaseDatabase = getDatabase();

function App() {
  async function writeDataToFirebase() {
    try {
      const response = await axios.post(`${databaseURL}/users.json`, {
        userEmail: "p.prakashpaudel35@gmail.com",
        userId: "4",
        userName: "prakashPaudel",
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async function readDataFromFirebase() {
    try {
      const response = await axios.get(`${databaseURL}/users.json`);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button onClick={readDataFromFirebase}>READ DATA</button>
      <button onClick={writeDataToFirebase}>WRITE DATA</button>
    </>
  );
}

export default App;
