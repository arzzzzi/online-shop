import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {name: 'Водосточная труба', price: 999},
  {name: 'Труба', price: 599},
  {name: 'Люк канализационный', price: 2999}
]

function App() {
  return (
    <div className="outer">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search-block">
          <h1>Все товары</h1>
          <div className="search">
            <img className="loopa" width={20} height={20} src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="itemsShop">
        <Card title="Водосточная труба"  price={999} imgUrl='./img/1.jpg'/>
        <Card title="Слив" price={1875} imgUrl='./img/2.jpg'/>
          {/* {arr.map((obj) => (
            <Card />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
