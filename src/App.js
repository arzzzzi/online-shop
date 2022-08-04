import React, {useEffect, useState} from 'react';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

// const arr = [
//   {
//     id: 1,
//     title: 'Водосточная труба',
//     price: 999,
//     imgUrl: './img/1.jpg'
//   },
//   {
//     id: 2,
//     title: 'Слив',
//     price: 599,
//     imgUrl: './img/2.jpg'
//   },
//   {
//     id: 3,
//     title: 'Сливная труба',
//     price: 2999,
//     imgUrl: './img/3.jpg'
//   },
//   {
//     id: 4,
//     title: 'Люк',
//     price: 1480,
//     imgUrl: './img/4.jpg'
//   },
// ]

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {fetch('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items')
    .then(res => {
      return res.json()
    })
    .then(json => {
      setItems(json)
    })
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems([...cartItems, obj]);
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="outer">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}
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
          {items.map((item) => (
            <Card
              key={item.imgUrl}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              plusClick={(obj) => onAddToCart(obj)}
              favoriteClick={() => console.log('lol')} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
