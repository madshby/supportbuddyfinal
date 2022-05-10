import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTicketEmbed from "./Components/CreateTicketEmbed";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateTicketEmbed />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
