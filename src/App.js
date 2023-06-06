import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import IceCreamContainer from "./components/IceCreamContainer";
import InputElementBuyToffee from "./components/InputElementBuyToffee";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <InputElementBuyToffee />
      </div>
    </Provider>
  );
}

export default App;
