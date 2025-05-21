import "./coin.css";
import { useState } from "react";

import heads from "./assets2/coin/head.png";
import tails from "./assets2/coin/tails.png";

const CoinImages = [tails, heads,];
 
function Coin() {
    const [CoinValue, setCoinValue] = useState(4);
   
    function CoinFlip() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    setCoinValue(randomNumber);
    }
  
    return (
      <article className ="coin" >
        <h2>Monētas mešana</h2>
        <button onClick={CoinFlip}>Uzmest</button>
         <p>Jūs uzmetāt <strong>{CoinValue}</strong></p>

         <img
           src={CoinImages[CoinValue - 1]}
           alt={"Monētas vērtība " + CoinValue}
         />
      </article>
    );
   
  }
  
  
  export default Coin;