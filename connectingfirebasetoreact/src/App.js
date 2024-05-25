import React, { useState } from 'react';
import './firebaseConfig'; 
import { getFirestore, addDoc, collection } from "firebase/firestore"; 

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "myCollection"), {
        field1: inputValue1,
        field2: inputValue2,
      });
      alert("Document written to Database");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <h1>Save Data to Firebase Firestore</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={saveDataToFirestore}>Save to Firestore</button>
    </div>
  );
}

export default App;
