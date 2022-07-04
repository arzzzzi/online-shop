
function App() {
  return (
    <div className="outer">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="https://education.sakshi.com/sites/default/files/styles/job_icon/public/icons/Engineering1_0.jpg"/>
          <div className="headerInfo">
            <h3>СтройСам</h3>
            <p>Магазин строительных материалов</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>1200 руб.</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

      </div>
    </div>
  );
}

export default App;
