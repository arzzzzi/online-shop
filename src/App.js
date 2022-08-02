
function App() {
  return (
    <div className="outer">
      <div className="overlay">
        <div className="drawer">
          <h2 className="">Корзина <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' /> </h2>
          <div className="items">
            <div className="cartItem">
              <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg"></div>
              <div>
                <p>Труба</p>
                <b>999 руб.</b>
              </div>
              <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' />
            </div>
            <div className="cartItem">
              <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg"></div>
              <div>
                <p>Труба</p>
                <b>999 руб.</b>
              </div>
              <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>1998 руб.</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>99,9 руб.</b>
              </li>
            </ul>
            <button className="greenButton"><span>Оформить заказ</span> <img className="arrow" src="/img/arrow.png" alt="Arrow"/></button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="https://education.sakshi.com/sites/default/files/styles/job_icon/public/icons/Engineering1_0.jpg" />
          <div className="headerInfo">
            <h3>СтройСам</h3>
            <p>Магазин строительных материалов</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="https://cdn-icons-png.flaticon.com/512/118/118089.png" />
            <span>1200 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="https://freesvg.org/img/abstract-user-flat-1.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="search-block">
          <h1>Все товары</h1>
          <div className="search">
            <img className="loopa" width={20} height={20} src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="itemsShop">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="Unlike" />
            </div>
            <img width={133} height={112} src="img/1.jpg" />
            <h5>Водосточная труба</h5>
            <div className="cardBtn">
              <div className="crdBtn">
                <span>Цена: </span>
                <b>999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/2.jpg" />
            <h5>Слив</h5>
            <div className="cardBtn">
              <div className="crdBtn">
                <span>Цена: </span>
                <b>499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" />
              </button>
            </div>
          </div><div className="card">
            <img width={133} height={112} src="img/3.jpg" />
            <h5>Отлив</h5>
            <div className="cardBtn">
              <div className="crdBtn">
                <span>Цена: </span>
                <b>999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" />
              </button>
            </div>
          </div><div className="card">
            <img width={133} height={112} src="img/4.jpg" />
            <h5>Водосточная труба</h5>
            <div className="cardBtn">
              <div className="crdBtn">
                <span>Цена: </span>
                <b>999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
