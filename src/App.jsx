import logo from './logo.svg';
import './App.css';
import Orders from './components/Orders';
import OrderList from './components/OrderList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1 className='title'>Desserts</h1>
      <div className='order-list'>
      <OrderList/>
      </div>
      {/* <Cart/> */}
    </div>
    
  );
}

export default App;
