import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CardPage } from "./pages/CardPage";
import { CardPageEdit } from "./pages/CardPageEdit";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
    // TODO: Make something like app.routes or routes folder
    return (
        <Router>
            <Routes>
                <Route path="/:userurl" element={<CardPage />} />
                <Route path="/:userurl/edit" element={<CardPageEdit />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
