import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer/index';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';



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
      console.error(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart'),
        axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/favorites'),
        axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/items')
        ])

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных :(')
        console.error(error)
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart', obj)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Не поулчилось добавить товар в корзину')
      console.error(error)
    }
  }

  const onRemoveFromCart = (id) => {
    try {
      axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении товара из корзины')
      console.error(error)
    }
  }

  const onChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, addToFavorite, setCartOpened, setCartItems }}>
      <div className="outer">
        <Drawer onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveFromCart}
          opened={cartOpened} />
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
          <Route path="/orders" exact element={
            <Orders />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
