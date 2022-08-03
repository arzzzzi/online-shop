function  Card() {
    return (
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
    )
}
export default Card;