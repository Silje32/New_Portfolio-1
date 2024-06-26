import { Outlet } from "react-router-dom";
import Nav from "./index";
import Header from "../Header/index";
import Footer from "../Footer/index";

function Layout() {
    return (
      <>
        <Nav />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

export default Layout;  