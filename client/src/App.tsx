import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
