import Coin from "./Coin";
import Dice from "./Dice";
import Flower from "./Flower";
import "./App.css";

function App() {
  return (
    <>
      <h1>Gājienu palīgs</h1>
      <Dice />
      <Dice />
      <Dice />

      <h2>Coinflip</h2>
      <Coin /> 
      <h3>Mīl vai nemīl?</h3>
    <Flower />
    </>
   
    
    

    
  );
}
export default App;