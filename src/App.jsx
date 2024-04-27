import "./App.css";
import { Outlet } from "react-router-dom";
import { Api } from "./shared/services/api/ApiConfig";
import Header from "./shared/Header";

function App() {
  return <div>
    <div className="container">
      <Header/>
      <Outlet/>
    </div>
  </div>;
}

export default App;
