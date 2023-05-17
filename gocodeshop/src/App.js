
import './App.css';
import { ProductFilter } from './components/ProductFilter/ProductFilter';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <ProductFilter app/>
      <Products />
    </div>
  );
}

export default App;

