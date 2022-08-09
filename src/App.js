import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToFavorite = async (obj) => {
    try {
      if (favorites.find((fav) => Number(fav.id) === Number(obj.id))) {
        axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj]);
    }
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, addToFavorite }}>
      <div className="outer">
        {cartOpened && <Drawer onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveFromCart} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="/" exact element={
            <Home
              items={items}
              cartItems={cartItems}
              search={search}
              setSearch={setSearch}
              onChangeInput={onChangeInput}
              onAddToCart={onAddToCart}
              addToFavorite={addToFavorite}
              isLoading={isLoading}
            />
          } />
          <Route path="/favorites" exact element={
            <Favorites />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
