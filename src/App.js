import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [search, setSearch] = useState('');

  useEffect(() => {
    // fetch('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(json => {
    //     setItems(json)
    //   })
    axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items')
      .then(res => {
        setItems(res.data)
      });
      axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data)
      })  
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems([...cartItems, obj]);
    axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);

  }

  const onChangeInput = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="outer">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search-block">
          <h1>{search ? `Поиск по запросу: ${search}` : 'Все товары'}</h1>
          <div className="search">
            <img className="loopa" width={20} height={20} src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png" />
            <input placeholder="Поиск..."
              value={search}
              onChange={onChangeInput} />
            {search && (<img className="btnEmpty"
              src="/img/btn-remove.svg"
              alt='Remove'
              onClick={() => setSearch('')} />
            )}
          </div>
        </div>

        <div className="itemsShop">
          {items.filter(item => item.title.toLowerCase().includes(search.toLocaleLowerCase()))
            .map((item) => (
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
