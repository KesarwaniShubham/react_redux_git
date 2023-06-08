import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import IceCreamContainer from "./components/IceCreamContainer";
import InputElementBuyToffee from "./components/InputElementBuyToffee";
import User from "./components/User";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <InputElementBuyToffee />
        <User/>
      </div>
    </Provider>
  );
}

export default App;
