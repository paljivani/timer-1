import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // clean up function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div >
      <h2>Timer: {seconds}</h2>
    </div>
  );
}
export default App;