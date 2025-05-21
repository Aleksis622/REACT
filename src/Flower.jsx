import "./flower.css";
import { useState, useEffect } from "react";

const phrases = ["mīl", "nemīl"];

function Flower(){
    const [totalPetals, setTotalPetals] = useState(0);
    const [pluckedCount, setPluckedCount] = useState(0);
    const [finalResult, setFinalResult] = useState(null);
  
    useEffect(() => {
        const randomPetals = Math.floor(Math.random() * 11) + 5; // 5 līdz 15
        setTotalPetals(randomPetals);
      }, []);
    
      function pluckPetal() {
        const newCount = pluckedCount + 1;
        setPluckedCount(newCount);
    
        if (newCount === totalPetals) {
          const final = phrases[newCount % 2 === 0 ? 1 : 0];
          setFinalResult(final.toUpperCase() + "!!!");
        }
      }
    
      const currentPhrase = phrases[pluckedCount % 2];
    
         
    return (
        <div className="flower">
          <h2>Zieds</h2>
          <p>Kopējais ziedlapiņu skaits: {totalPetals}</p>
          <p>Norautas ziedlapiņas: {pluckedCount}</p>
    
          {pluckedCount < totalPetals ? (
            <>
              <button onClick={pluckPetal}>Noraut ziedlapiņu</button>
              <p><strong>{currentPhrase}</strong></p>
            </>
          ) : (
            <h3>{finalResult}</h3>
          )}
        </div>
      );
    

}



































export default Flower;