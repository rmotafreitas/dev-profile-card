import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CardPage } from "./pages/CardPage";

function App() {
    // TODO: Make something like app.routes or routes folder
    return (
        <Router>
            <Routes>
                <Route path="/:userurl/:editmode?" element={<CardPage />} />
            </Routes>
        </Router>
    );
}

export default App;
