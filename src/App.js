import "./App.scss";
import RouteList from "./Routes";
import CartContextProvider from "./Contexts/CartContexts";

import "dotenv/config";
function App() {
  return (
    <CartContextProvider>
      <RouteList />
    </CartContextProvider>

  );
}

export default App;
