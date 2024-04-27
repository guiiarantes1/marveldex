import "./App.css";

function App() {
  window.addEventListener("load", function () {
    // Selecionar todos os elementos <a> com a classe "linkCard"
    var links = document.querySelectorAll("a.linkCard");

    // Adicionar um event listener a cada link
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar o comportamento padrão de redirecionamento do link

        // Obter o ID do link clicado
        var linkId = this.getAttribute("id");

        // Selecionar o elemento com o ID "modal-container"
        var modalContainer = document.getElementById("modal-container");

        // Remover todas as classes do elemento "modal-container"
        modalContainer.removeAttribute("class");

        // Adicionar a classe do link clicado ao "modal-container"
        modalContainer.classList.add(linkId);

        // Adicionar a classe "modal-active" ao corpo do documento
        document.body.classList.add("modal-active");
      });
    });

    // Adicionar um event listener ao elemento com o ID "modal-container"
    document
      .getElementById("modal-container")
      .addEventListener("click", function () {
        // Adicionar a classe "out" ao "modal-container"
        this.classList.remove("modal1");

        // Remover a classe "modal-active" do corpo do documento
        document.body.classList.remove("modal-active");
      });
  });

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
          <a className="linkCard" id="modal1">
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
          </a>
        </div>
      </div>

      <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <h1>Spider-Man</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
