import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([])

  const addToFavorite = (obj) => {
    axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  }

  useEffect(() => {
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
    axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeInput = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="outer">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}
        items={cartItems}
        onRemove={onRemoveFromCart}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Route path="/favorites">
        LOL
      </Route>
      
      <div className="content">
        <div className="search-block">
          <h1>{search ? `Поиск по запросу:" "` : 'Все товары'}</h1>
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
                favoriteClick={(obj) => addToFavorite(obj)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
