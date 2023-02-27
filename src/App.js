import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Code from './Components/Code';
import Contestants from './Components/Contestants';

function App() {
  const [contestData, setContestData] = useState([]);
  const [currentContestant, setCurrentContestant] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://blind-code.onrender.com/api/code/getcodes');
        const data = await response.json();
        setContestData(data);
        setCurrentContestant(data[0]);
      } catch (error) {
        console.log(error)
      }
  
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <Contestants contestData={contestData} currentContestant={currentContestant} setCurrentContestant= {setCurrentContestant}/>
      <Code currentContestant={currentContestant}/>
    </div>
  );
}

export default App;
