import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([])

  const addToFavorite = async (obj) => {
    if (favorites.find((fav) => fav.id === obj.id)) {
      axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites/${obj.id}`)
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
    } else {
      const {data} = await axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites', obj);
      setFavorites(prev => [...prev, data]);
    }
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
    axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites')
      .then(res => {
        setFavorites(res.data)
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
        onRemove={onRemoveFromCart} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" exact
          element={<Home items={items}
            search={search}
            setSearch={setSearch}
            onChangeInput={onChangeInput}
            onAddToCart={onAddToCart}
            addToFavorite={addToFavorite} />
          } />
        <Route path="/favorites" exact
          element={<Favorites
            items={favorites}
            addToFavorite={addToFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;
