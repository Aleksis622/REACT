import Coin from "./Coin";
import Dice from "./Dice";
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
    </>
    
    

    
  );
}
export default App;