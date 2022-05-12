import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTicketEmbed from "./Components/CreateTicketEmbed";
import "bootstrap/dist/css/bootstrap.min.css";
import LookAtTicket from "./Components/LookAtTicket";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateTicketEmbed />}></Route>
          <Route exact path="/LookAtTicket" element={<LookAtTicket />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
