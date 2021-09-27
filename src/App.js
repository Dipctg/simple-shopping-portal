import './App.css';
import Shop from './components/component/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Shopping Items</h2>
      <Shop></Shop>
    </div>
  );
}

export default App;
