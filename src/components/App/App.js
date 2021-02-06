import Alert from "../Alert/Alert";
import CartSucess from "../CartSuccess/CartSuccess";
// import './App.css';

function App() {
  const wrapper = {
    padding: 20
  }
  return (
    <div style={wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSucess/>
    </div>
  );
}

export default App;
