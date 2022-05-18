import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTicketEmbed from "./Components/CreateTicketEmbed";
import LookAtTicket from "./Components/LookAtTicket";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/createticket"
            element={<CreateTicketEmbed />}
          ></Route>
          <Route exact path="/viewticket" element={<LookAtTicket />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
