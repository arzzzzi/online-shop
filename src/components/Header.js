import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="https://education.sakshi.com/sites/default/files/styles/job_icon/public/icons/Engineering1_0.jpg" />
          <div className="headerInfo">
            <h3>СтройСам</h3>
            <p>Магазин строительных материалов</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li className="cartIcon" onClick={props.onClickCart}>
          <img width={20} height={20} src="https://cdn-icons-png.flaticon.com/512/118/118089.png" alt="Cart" />
          <span>1200 руб.</span>
        </li>
        <li className="favIcon">
          <Link to="/favorites">
            <img width={20} height={20} src="./img/unliked.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="https://freesvg.org/img/abstract-user-flat-1.png" alt="User" />
        </li>
      </ul>
    </header>
  )
}

export default Header;