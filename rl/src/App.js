import './App.css'
import Name from './cmponet/Name';
import Description from './cmponet/Description';
import Image from './cmponet/Image';
import Price from './cmponet/Price';
import Cards from './cmponet/Cards';
function App() {
  return (
    <div className="App">
      <Cards/>
      <Price/>
      <Image/>
      <Description/>
      <Name/>
    </div>
  );
}

export default App;