import { useState } from "react";
import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Header></Header>
      <Form></Form>
  
    </>
  );
}

export default App;
