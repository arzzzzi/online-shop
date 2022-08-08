import Card from "../components/Card";

function Favorites({ items, addToFavorite }) {
    return (
        <div className="content">
            <div className="search-block">
                <h1>Мои закладки</h1>
            </div>
            <div className="itemsShop">
                {items.map((item, index) => (
                    <Card key={index}
                    favorited={true}
                    onFavorite={addToFavorite}
                    {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;