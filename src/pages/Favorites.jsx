import Card from "../components/Card";
import { useContext } from "react";
import AppContext from "../context";

function Favorites() {
    const { favorites, addToFavorite } = useContext(AppContext);

    return (
        <div className="content">
            <div className="search-block">
                <h1>Мои закладки</h1>
            </div>
            <div className="itemsShop">
                {favorites.map((item, index) => (
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