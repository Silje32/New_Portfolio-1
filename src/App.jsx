import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/layout";
import GlobalStyles from "./styles/globalStyles";

  
  function App() {
  
    return (
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
