import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import LandingPage from "../src/screens/LandingPage";
import AppHeader from "../src/components/AppHeader";
function App() {
  return (
    <Router>
      <AppHeader />
      <div>
        <Menu fixed="top" inverted>
          <Routes>
            <Route path="/" element={<Navigate to="/" replace />} />
          </Routes>
        </Menu>
        <Container style={{ marginTop: "2em" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
