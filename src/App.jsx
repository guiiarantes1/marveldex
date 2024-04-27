import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <img src="src\assets\marvel-header.png"></img>
        <nav className="navbar navbar-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquise seu herói..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Pesquisar
            </button>
          </form>
        </nav>
      </div>
      <div className="body">
        <div className="card-container">
          <div className="card">
            <div className="front">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Spider-Man</p>
              </div>
            </div>
            <div className="back">
              <p>Dark side of the moon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
