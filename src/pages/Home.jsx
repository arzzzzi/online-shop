import Card from '../components/Card'

function Home({ items, 
    search,
    setSearch,
    onChangeInput,
    onAddToCart,
    addToFavorite }) {
    return (
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
                    .map((item, index) => (
                        <Card
                            key={index}
                            plusClick={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => addToFavorite(obj)} 
                            {...item}
                            />
                    ))}
            </div>
        </div>
    )
}

export default Home;