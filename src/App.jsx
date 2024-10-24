import { useState } from "react";
import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00a3e0",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
