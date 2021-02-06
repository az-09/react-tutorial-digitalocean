import Alert from "../Alert/Alert";
import CartSucess from "../CartSuccess/CartSuccess";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSucess/>
    </div>
  );
}

export default App;
