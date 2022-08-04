import React from 'react';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    id: 1,
    title: 'Водосточная труба',
    price: 999,
    imgUrl: './img/1.jpg'
  },
  {
    id: 2,
    title: 'Слив',
    price: 599,
    imgUrl: './img/2.jpg'
  },
  {
    id: 3,
    title: 'Сливная труба',
    price: 2999,
    imgUrl: './img/3.jpg'
  },
  {
    id: 4,
    title: 'Люк',
    price: 1480,
    imgUrl: './img/4.jpg'
  },
]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items').then(res => {
    return res.json()
  }).then(json => console.log(json))

  return (
    <div className="outer">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search-block">
          <h1>Все товары</h1>
          <div className="search">
            <img className="loopa" width={20} height={20} src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="itemsShop">
          {items.map((obj) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              plusClick={() => console.log(obj)}
              favoriteClick={() => console.log('lol')} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
