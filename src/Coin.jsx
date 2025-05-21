import "./coin.css";
import { useState } from "react";

import heads from "./assets2/coin/head.png";
import tails from "./assets2/coin/tails.png";

const CoinImages = [tails, heads];
 
function Coin() {
    const [CoinValue, setCoinValue] = useState("tails");
   
    function CoinFlip() {
      const randomNumber = Math.floor(Math.random() * 2);
    setCoinValue(randomNumber === 0 ? "tails" : "heads");
    
    }
  
    return (
      <article className ="coin" >
        <h2>Monētas mešana</h2>
        <button onClick={CoinFlip}>Uzmest</button>
        <p>Jūs uzmetāt <strong>{CoinValue === "heads" ? "Galvu" : "Astes"}</strong></p>

         <img
            src={CoinImages[CoinValue === "heads" ? 1 : 0]} 
           alt={"Monētas vērtība " + CoinValue}
         />
      </article>
    );
   
  }
  
  
  export default Coin;